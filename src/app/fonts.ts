import { Chakra_Petch, Poppins, JetBrains_Mono } from "next/font/google";

// Display font (headings / wordmark).
// TODO: the 2025-26 site used a custom font called "Hunters". If you have the
// .ttf/.woff2 file, drop it in src/app/fonts/ and swap this for next/font/local:
//   import localFont from "next/font/local";
//   export const display = localFont({ src: "./fonts/Hunters.woff2", variable: "--nf-display" });
export const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--nf-display",
  display: "swap",
});

export const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--nf-body",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
  display: "swap",
});
