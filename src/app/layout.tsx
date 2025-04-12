import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layoutComponents/Navbar";
import Footer from "../components/layoutComponents/Footer";
import QueryProvider from "./providers";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Abstractly | Stunning Abstract Images",
  description:
    "Well crafted abstract images to inspire creativity and elevate your projects.",
  openGraph: {
    title: "Abstractly | Stunning Abstract Images",
    description:
      "Discover well-crafted abstract images to inspire creativity and elevate your projects.",
    url: "https://abstractly-nine.vercel.app/",
    siteName: "Abstractly",
    images: [
      {
        url: "https://abstractly-nine.vercel.app/abstractlyLogo.png",
        width: 1200,
        height: 630,
        alt: "Abstractly Preview Image",
      },
    ],
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
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>
          <div className="flex flex-col bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] dark:from-[#1e2939] dark:to-[#1e2939] p-0 m-0">
            <Navbar />
            <div className="min-h-[calc(100vh_-_5rem)] overflow-x-scroll">
              {children}
            </div>
            <Footer />
          </div>
        </QueryProvider>
        <CookieConsentBanner />

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abstractly",
              url: "https://abstractly-nine.vercel.app/",
              description:
                "Well crafted abstract images to inspire creativity and elevate your projects.",
              publisher: {
                "@type": "Organization",
                name: "Abstractly",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
