import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proelium-site.vercel.app"),
  title: {
    default: "Proelium Serviços | Infraestrutura, automação e tecnologia",
    template: "%s | Proelium Serviços",
  },
  description:
    "Soluções integradas de automação residencial, redes, Wi‑Fi, segurança, home cinema, elétrica e infraestrutura técnica para projetos de alto padrão.",
  keywords: [
    "Proelium Serviços",
    "automação residencial",
    "infraestrutura técnica",
    "redes Wi‑Fi",
    "home cinema",
    "CFTV",
    "elétrica",
    "tecnologia residencial",
  ],
  openGraph: {
    title: "Proelium Serviços | Tecnologia integrada ao projeto",
    description:
      "Infraestrutura, automação, redes, segurança e soluções técnicas para residências, escritórios e obras de alto padrão.",
    url: "https://proelium-site.vercel.app",
    siteName: "Proelium Serviços",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
