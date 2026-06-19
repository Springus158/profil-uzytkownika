import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profil użytkownika",
  description: "Strona profilu — Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 antialiased dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
