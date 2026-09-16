import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://letyarlabs.com"),
  title: "Letyar Labs — Web Software & Product Engineering",
  description:
    "Letyar Labs builds practical web software, mobile products, AI systems, and digital products from Myanmar.",
  keywords: ["Letyar Labs", "web software", "product engineering", "Myanmar", "AI", "mobile"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Letyar Labs — Web Software & Product Engineering",
    description: "Every build carries a fingerprint.",
    url: "https://letyarlabs.com",
    siteName: "Letyar Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
