import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layoutComponents/Navbar";
import Footer from "./components/layoutComponents/Footer";

export const metadata: Metadata = {
  title: "Abstractly",
  description: "Well crafted abstract images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
