import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSI app - Manejo de vias aéreas",
  description:
    "Aplicativo para auxiliar em manejo de vias aéreas com Rápida Sequência de Intubação",
  creator: "Plínio Holanda",
  authors: [{ name: "Rômulo Iorio", url: "https://github.com/romulo-iorio" }],
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
