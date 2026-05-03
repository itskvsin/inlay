import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/providers/AnimationProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inlay Interior Design, Ahmedabad",
  description:
    "Luxury interior design studio in Satellite, Ahmedabad. Personalised spaces crafted with warmth and intention. Free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
