import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://letyarlabs.com"),
  title: {
    default: "Letyar Labs — Web Software & Product Engineering",
    template: "%s — Letyar Labs",
  },
  description:
    "Letyar Labs builds practical web software, mobile products, AI systems, and digital products from Myanmar.",
  keywords: [
    "Letyar Labs",
    "web software",
    "product engineering",
    "Myanmar",
    "AI",
    "mobile products",
  ],
  applicationName: "Letyar Labs",
  authors: [{ name: "Letyar Labs" }],
  creator: "Letyar Labs",
  publisher: "Letyar Labs",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Letyar Labs — Web Software & Product Engineering",
    description: "Every build carries a fingerprint.",
    url: "https://letyarlabs.com",
    siteName: "Letyar Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Letyar Labs — Web Software & Product Engineering",
    description: "Every build carries a fingerprint.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
