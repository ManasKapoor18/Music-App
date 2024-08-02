import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import PlaylistSection from "@/components/playlistSection";
import MusicPlayer from "@/components/musicPlayer";
import MobileHeader from "@/components/mobileHeader";

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
        <div className="min-h-screen bg-gray-800 text-white flex">
          <div className="fixed md:w-1/5 md:block hidden">
            <Sidebar visible={true} />
          </div>
          <div className="md:w-3/5 w-full bg-gray-800 mx-auto justify-center items-center">
            <Header />
            <MobileHeader />
            <main className="px-6 py-2 flex-1">{children}</main>
          </div>
          <div className="fixed md:w-1/5 md:block hidden right-0">
            <PlaylistSection visible={true} />
          </div>
          <MusicPlayer />
        </div>
      </body>
    </html>
  );
}
