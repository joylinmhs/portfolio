import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joylin Mathias | Computer Science Student & AI Developer",
  description:
    "Portfolio of Joylin Mathias showcasing software engineering, AI projects, web development, and technical work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_35%,#020617_100%)] text-slate-100">
        {children}
      </body>
    </html>
  );
}
