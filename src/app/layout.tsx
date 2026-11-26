import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Pg in Adajan - SMS PG | Comfortable & Affordable Shared Rooms",
  description: "Explore comfortable and affordable shared PG rooms near LP Savani Circle, Adajan, Surat. Check room options and enquire on WhatsApp.",
  keywords: ["PG near LP Savani", "PG in Adajan Surat", "student accommodation Surat", "LP Savani PG"],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
