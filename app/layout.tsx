import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hawi Software Solutions",
  icons: {
    icon: "../assets/images/logo.png",
    shortcut: "../assets/images/logo.png",
    apple: "../assets/images/logo.png",
  },
  description:
    "Hawi Software Solutions is a software development company that specializes in creating custom software solutions for businesses of all sizes. Our team of experienced developers and designers work closely with clients to understand their unique needs and deliver high-quality, scalable software that meets their requirements.",
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
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
