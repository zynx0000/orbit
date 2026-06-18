import type { Metadata } from "next";
import "./globals.css";
import { ThemeBoot } from "@/components/theme-boot";

export const metadata: Metadata = {
  title: "OrbitCare | Wellness operations platform",
  description: "Public website and admin SPA for modern wellness studios."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeBoot />
        {children}
      </body>
    </html>
  );
}
