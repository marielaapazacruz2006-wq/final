import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exercícios",
  description: "Lista de exercícios en NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}