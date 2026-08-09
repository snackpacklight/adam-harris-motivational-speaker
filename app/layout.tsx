import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3001";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "Dr. Adam A. Harris | Motivational Speaker",
      template: "%s | Dr. Adam A. Harris",
    },
    description:
      "Motivation that meets you right where you are. Keynotes, workshops, and faith-informed encouragement from Dr. Adam A. Harris.",
    openGraph: {
      title: "Dr. Adam A. Harris | Motivation That Meets You Where You Are",
      description:
        "Honest words. Lasting hope. A clear next step. Bring Dr. Adam A. Harris to your audience.",
      type: "website",
      images: [{ url: socialImage, width: 1732, height: 910, alt: "Dr. Adam A. Harris — Motivation that meets you right where you are." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. Adam A. Harris | Motivational Speaker",
      description: "Motivation that meets you right where you are.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
