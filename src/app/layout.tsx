import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "App Spotify",
  description: "Ouça suas musicas preferidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
