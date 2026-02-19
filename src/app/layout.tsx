import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DURKKAS | AI-Powered Multi-Tenant Enterprise OS",
  description: "DURKKAS is a comprehensive multi-tenant operating system built in India for global scale. Manage CRM, HRMS, Payroll, and EMS with infinite scalability.",
  keywords: ["SaaS", "Multi-tenant", "ERP", "CRM", "HRMS", "Enterprise Software", "Indian Tech", "OS for Business"],
  openGraph: {
    title: "DURKKAS | AI-Powered Multi-Tenant Enterprise OS",
    description: "The comprehensive product suite built to manage every aspect of your business.",
    type: "website",
    locale: "en_US",
    siteName: "DURKKAS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased font-sans min-h-screen flex flex-col`}>
        <Preloader />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
