import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import PlaylistSection from "@/components/playlistSection";
import MusicPlayer from "@/components/musicPlayer";

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
      <body>
        <div className="min-h-screen bg-gray-900 text-white flex">
          <div className="fixed w-1/5">
            <Sidebar />
          </div>
          <div className="w-3/5 bg-gray-800 mx-auto justify-center items-center ">
            <Header />
            <main className="px-6 py-2 flex-1">{children}</main>
          </div>
          <div className="fixed w-1/5 right-0">
            <PlaylistSection />
          </div>
          <MusicPlayer />
        </div>
      </body>
    </html>
  );
}
