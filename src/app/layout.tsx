import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layoutComponents/Navbar";
import Footer from "../components/layoutComponents/Footer";

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
      <body className="antialiased">
        <div className="flex flex-col bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] p-0 m-0">
          <Navbar />
          <div className="min-h-[calc(100vh_-_5rem)] overflow-x-scroll">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
