// src/app/layout.tsx

import type { Metadata } from "next";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seguras Digital Platform Proposal | Aurigital",
  description: "Technical and economic proposal for the development of Seguras' digital platform - Complete MVP with cutting-edge headless architecture",
  keywords: "Seguras, digital platform, e-commerce, Costa Rica, Aurigital, web development",
  authors: [{ name: "Aurigital" }],
  openGraph: {
    title: "Seguras Digital Platform Proposal",
    description: "Transform your business with a modern digital platform",
    type: "website",
    url: "https://seguras-proposal.aurigital.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seguras Digital Platform Proposal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}