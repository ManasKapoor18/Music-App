import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Nextjs Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white flex">
        <Sidebar />
        <div className="bg-gray-800 mx-12 justify-center items-center">
          <Header />
          <main className="px-6 py-2 flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
