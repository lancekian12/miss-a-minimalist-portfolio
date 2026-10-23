import type { Metadata, Viewport } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import { MotionProvider } from "./components/anim";
import { person } from "./content";
import "./globals.css";

const sans = Inter_Tight({ variable: "--font-sans-face", subsets: ["latin"], display: "swap" });
const serif = Newsreader({
  variable: "--font-serif-face",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = `${person.name}, ${person.postNominals} — ${person.role}`;

export const metadata: Metadata = {
  title,
  description: person.description,
  openGraph: { title, description: person.description, type: "profile" },
  twitter: { card: "summary_large_image", title, description: person.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
