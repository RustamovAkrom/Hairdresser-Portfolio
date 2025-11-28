import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import { Playfair_Display, Manrope } from "next/font/google";

const titleFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-title",
});

const textFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Dilfuza Halikova | Professional Hair & Makeup Artist",
  description:
    "Universal tajribali ayollar sartaroshi, kolorist va makiyaj ustasi. Soch kesish, bo‘yash, turmaklash, keratin tekislash, mikrobleyding va professional xizmatlar.",
  keywords: [
    "Dilfuza Halikova",
    "Ayollar sartaroshi",
    "Hair stylist Uzbekistan",
    "Professional kolorist",
    "Makeup artist",
    "Keratin tekislash",
    "Mikrobleyding",
    "Beauty services",
  ],
  authors: [{ name: "Dilfuza Halikova", url: "https://dilfuza-halikova.vercel.app" }],
  creator: "Dilfuza Halikova",
  publisher: "Dilfuza Halikova Studio",
  alternates: {
    canonical: "https://dilfuza-halikova.vercel.app",
  },
  openGraph: {
    title: "Dilfuza Halikova | Professional Hair & Makeup",
    description:
      "Universal tajribali ayollar sartaroshi, kolorist va makiyaj ustasi. Soch kesish, bo‘yash, turmaklash va professional xizmatlar.",
    url: "https://dilfuza-halikova.vercel.app/",
    siteName: "Dilfuza Halikova Studio",
    images: [
      {
        url: "https://dilfuza-halikova.vercel.app/hero-bg-dark.webp",
        width: 1200,
        height: 630,
        alt: "Dilfuza Halikova - Professional Hair & Makeup",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${titleFont.variable} ${textFont.variable} antialiased bg-white dark:bg-neutral-900 transition-colors duration-500`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

