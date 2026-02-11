import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexxus 2.0 | La tienda del futuro impulsada por IA",
  description: "Descubre la nueva era del e-commerce urbano con Nexxus 2.0.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased noise-overlay`}>
        <div className="aura"></div>
        {children}
      </body>
    </html>
  );
}
