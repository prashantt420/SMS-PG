
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "PG in Adajan - SMS PG | Comfortable & Affordable Shared Rooms",
  description:
    "Explore comfortable and affordable shared PG rooms near LP Savani Circle, Adajan, Surat. Check room options and enquire on WhatsApp.",
  keywords: [
    "PG near LP Savani",
    "PG in Adajan Surat",
    "student accommodation Surat",
    "LP Savani PG",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PG in Adajan - SMS PG | Comfortable & Affordable Shared Rooms",
    description:
      "Explore comfortable and affordable shared PG rooms near LP Savani Circle, Adajan, Surat. Check room options and enquire on WhatsApp.",
    url: "https://sms-pg-adajan.vercel.app",
    siteName: "SMS PG",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PG in Adajan - SMS PG | Comfortable & Affordable Shared Rooms",
    description:
      "Explore comfortable and affordable shared PG rooms near LP Savani Circle, Adajan, Surat. Check room options and enquire on WhatsApp.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
