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
  title: "NEXUS. | La tienda del futuro impulsada por IA",
  description: "Descubre la nueva era del e-commerce urbano con NEXUS.",
  icons: {
    icon: '/favicon.svg',
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${outfit.variable} antialiased selection:bg-accent selection:text-black`}>
        <AuthProvider>
          <div className="aura"></div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
