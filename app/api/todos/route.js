import { Redis } from "@upstash/redis";

const KEY = "todos";
const PEOPLE_KEY = "people";
const THEMES_KEY = "themes";
const DEFAULT_PEOPLE = ["Niall", "Ghaisar", "Jack", "James"];
const DEFAULT_THEMES = [
  "Find a building",
  "Line up the money",
  "Get planning confidence",
  "Understand the market",
  "Sort the company & founder terms",
  "Play more padel",
];
const MAX_PEOPLE = 20;
const MAX_THEMES = 15;
const MAX_NAME = 30;
const MAX_THEME_NAME = 40;

function hasRedisEnv() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function requireRedis() {
  if (!hasRedisEnv()) {
    return Response.json({ error: "To-dos aren't connected yet." }, { status: 503 });
  }
  return null;
}

// Mutations require the group passcode when one is set; reads stay open.
function gateMutation(request) {
  const passcode = process.env.SITE_PASSCODE;
  if (passcode && request.headers.get("x-passcode") !== passcode) {
    return Response.json({ error: "passcode required" }, { status: 401 });
  }
  return requireRedis();
}

async function readTodos(redis) {
  try {
    const data = (await redis.get(KEY)) ?? [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// People list; seeded with the group on first read.
async function readPeople(redis) {
  try {
    const data = await redis.get(PEOPLE_KEY);
    if (Array.isArray(data)) return data.filter((p) => typeof p === "string");
    await redis.set(PEOPLE_KEY, DEFAULT_PEOPLE);
    return DEFAULT_PEOPLE;
  } catch {
    return DEFAULT_PEOPLE;
  }
}

// Theme list; seeded with the default topics on first read.
async function readThemes(redis) {
  try {
    const data = await redis.get(THEMES_KEY);
    if (Array.isArray(data)) return data.filter((t) => typeof t === "string");
    await redis.set(THEMES_KEY, DEFAULT_THEMES);
    return DEFAULT_THEMES;
  } catch {
    return DEFAULT_THEMES;
  }
}

function cleanName(name) {
  return typeof name === "string" ? name.trim().slice(0, MAX_NAME) : "";
}

function cleanTheme(name) {
  return typeof name === "string" ? name.trim().slice(0, MAX_THEME_NAME) : "";
}

// "YYYY-MM-DD" or null
function cleanDue(due) {
  return typeof due === "string" && /^\d{4}-\d{2}-\d{2}$/.test(due) ? due : null;
}

// stable identifier used later to link items to cards in the documents
function cleanKey(key) {
  return typeof key === "string" && key.trim() ? key.trim().slice(0, 100) : null;
}

export async function GET() {
  const blocked = requireRedis();
  if (blocked) return blocked;
  const redis = Redis.fromEnv();
  const [todos, people, themes] = await Promise.all([
    readTodos(redis),
    readPeople(redis),
    readThemes(redis),
  ]);
  return Response.json(
    { todos, people, themes },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request) {
  const blocked = gateMutation(request);
  if (blocked) return blocked;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid JSON" }, { status: 400 });
  }

  const redis = Redis.fromEnv();
  const [todos, people, themes] = await Promise.all([
    readTodos(redis),
    readPeople(redis),
    readThemes(redis),
  ]);
  let writeTodos = false;
  let writePeople = false;
  let writeThemes = false;

  if (body.action === "add" && typeof body.text === "string" && body.text.trim()) {
    todos.push({
      id: crypto.randomUUID(),
      text: body.text.trim().slice(0, 500),
      by: typeof body.by === "string" ? body.by.trim().slice(0, 50) : "",
      assignee: cleanName(body.assignee),
      theme: cleanTheme(body.theme),
      due: cleanDue(body.due),
      key: cleanKey(body.key),
      done: false,
      ts: Date.now(),
    });
    writeTodos = true;
  } else if (body.action === "toggle" && typeof body.id === "string") {
    const t = todos.find((t) => t.id === body.id);
    if (t) t.done = !t.done;
    writeTodos = true;
  } else if (body.action === "delete" && typeof body.id === "string") {
    const i = todos.findIndex((t) => t.id === body.id);
    if (i !== -1) todos.splice(i, 1);
    writeTodos = true;
  } else if (body.action === "assign" && typeof body.id === "string") {
    const t = todos.find((t) => t.id === body.id);
    if (t) t.assignee = cleanName(body.assignee); // empty string clears
    writeTodos = true;
  } else if (body.action === "set-due" && typeof body.id === "string") {
    const t = todos.find((t) => t.id === body.id);
    if (t) t.due = cleanDue(body.due); // null / invalid clears
    writeTodos = true;
  } else if (body.action === "set-theme" && typeof body.id === "string") {
    const t = todos.find((t) => t.id === body.id);
    if (t) t.theme = cleanTheme(body.theme); // empty string clears
    writeTodos = true;
  } else if (body.action === "add-theme") {
    const name = cleanTheme(body.name);
    if (!name) return Response.json({ error: "name required" }, { status: 400 });
    if (!themes.some((t) => t.toLowerCase() === name.toLowerCase())) {
      if (themes.length >= MAX_THEMES) {
        return Response.json({ error: "too many themes" }, { status: 400 });
      }
      themes.push(name);
      writeThemes = true;
    }
  } else if (body.action === "remove-theme") {
    const name = cleanTheme(body.name);
    const i = themes.findIndex((t) => t === name);
    if (i !== -1) {
      themes.splice(i, 1); // existing items keep their theme value
      writeThemes = true;
    }
  } else if (body.action === "add-person") {
    const name = cleanName(body.name);
    if (!name) return Response.json({ error: "name required" }, { status: 400 });
    if (!people.some((p) => p.toLowerCase() === name.toLowerCase())) {
      if (people.length >= MAX_PEOPLE) {
        return Response.json({ error: "too many people" }, { status: 400 });
      }
      people.push(name);
      writePeople = true;
    }
  } else if (body.action === "remove-person") {
    const name = cleanName(body.name);
    const i = people.findIndex((p) => p === name);
    if (i !== -1) {
      people.splice(i, 1); // existing items keep their assignee value
      writePeople = true;
    }
  } else {
    return Response.json({ error: "unknown action" }, { status: 400 });
  }

  await Promise.all([
    writeTodos ? redis.set(KEY, todos) : null,
    writePeople ? redis.set(PEOPLE_KEY, people) : null,
    writeThemes ? redis.set(THEMES_KEY, themes) : null,
  ]);
  return Response.json(
    { todos, people, themes },
    { headers: { "Cache-Control": "no-store" } },
  );
}
