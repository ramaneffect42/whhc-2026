import type { Metadata, Viewport } from "next";
import { body, display, mono } from "./fonts";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import EmberField from "@/components/effects/EmberField";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE.short} — ${SITE.name}`,
    template: `%s | ${SITE.short}`,
  },
  description: `${SITE.name} of ${SITE.campus}. ${SITE.tagline}`,
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="flex min-h-svh flex-col">
        <MotionProvider>
          <EmberField />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
