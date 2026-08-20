import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", weight: ["400", "600"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Pare — Curated essentials",
  description: "Make sustainable choices the easy default.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} h-full`}>
      <body className="h-full flex items-center justify-center">
        <CartProvider>
          <div style={{
            position: "relative",
            width: 390,
            height: "100dvh",
            maxHeight: 844,
            background: "#fafaf7",
            overflow: "hidden",
            borderRadius: "clamp(0px, (100dvh - 844px) * 100, 40px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.6)",
          }}>
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
