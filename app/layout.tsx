import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://honeybadgers.rpbaltazar.com"),
  title: {
    default: "Honeybadgers on Tour",
    template: "%s | Honeybadgers on Tour",
  },
  description:
    "An annual European football weekend, tournament archive and travel journal for Honeybadgers on Tour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
