
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sms-pg-adajan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "PG in Adajan, Surat | SMS PG",
    template: "%s | SMS PG Adajan",
  },

  description:
    "Looking for a comfortable PG in Adajan, Surat? Explore SMS PG near LP Savani Circle with AC and non-AC sharing rooms, Wi-Fi, CCTV and other essential facilities.",

  applicationName: "SMS PG",

  keywords: [
    "PG in Adajan Surat",
    "Boys PG in Adajan",
    "PG near LP Savani Circle",
    "PG near LP Savani Surat",
    "Student accommodation in Adajan",
    "Affordable PG in Surat",
    "AC PG in Adajan",
    "Non AC PG in Adajan",
    "SMS PG Adajan",
  ],

  authors: [{ name: "SMS PG" }],
  creator: "SMS PG",
  publisher: "SMS PG",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "PG in Adajan, Surat | SMS PG",
    description:
      "Explore comfortable boys PG accommodation in Adajan, Surat. Compare AC and non-AC sharing rooms and enquire directly.",
    url: SITE_URL,
    siteName: "SMS PG",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SMS PG accommodation in Adajan, Surat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PG in Adajan, Surat | SMS PG",
    description:
      "Explore boys PG accommodation in Adajan, Surat. Check room options and enquire directly.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
