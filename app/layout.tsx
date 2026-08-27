import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ChatWidget } from "@/components/chat-widget";
import { WhatsNewBanner } from "@/components/whats-new";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-body",
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

const FAVICON =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎾</text></svg>";

export const metadata: Metadata = {
  title: "Padel Business Case",
  description:
    "Business case for an independent padel venue around Brighton and Mid Sussex — draft for discussion.",
  robots: { index: false, follow: false },
  icons: { icon: FAVICON },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${bricolage.variable} ${sourceSerif.variable}`}>
      <body>
        <NavBar />
        <WhatsNewBanner />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
