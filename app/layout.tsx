import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamil - Uw digitale kameleon",
  description: "Kamil beschermt u onzichtbaar op de achtergrond terwijl u surft.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
