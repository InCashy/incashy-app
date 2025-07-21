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
  title: "InCashy App – Trucking Factoring Platform",
  description: "InCashy is a reliable trucking factoring service designed to help carriers get paid faster by purchasing freight invoices.",
  icons: {
    icon: "https://www.incashy.com/favicon.ico",
    apple: "https://www.incashy.com/apple-touch-icon.png",   // optional for Apple devices
    other: [
      { rel: "icon", url: "https://www.incashy.com/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "https://www.incashy.com/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  keywords: ["trucking factoring", "freight invoices", "carrier payment", "logistics finance", "InCashy"],

  authors: [{ name: "InCashy Team", url: "https://www.incashy.com" }],
  
  creator: "InCashy Team",
  
  openGraph: {
    title: "InCashy App – Trucking Factoring Platform",
    description: "InCashy helps carriers get paid faster by purchasing freight invoices with ease and security.",
    url: "https://www.incashy.com",
    siteName: "InCashy",
    images: [
      {
        url: "https://www.incashy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "InCashy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "InCashy App – Trucking Factoring Platform",
    description: "InCashy helps carriers get paid faster by purchasing freight invoices with ease and security.",
    siteId: "@incashy",      // Replace with your Twitter handle if you have one
    creator: "@incashy",     // Replace with your Twitter handle if you have one
    images: ["https://www.incashy.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
