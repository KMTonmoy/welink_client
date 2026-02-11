import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Leftbar from "@/components/Layout/LeftBar/Leftbar";
import Rightbar from "@/components/Layout/RightBar/Rightbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "WeLink - Connect Better",
  description: "A modern social media platform for meaningful connections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased bg-gray-50">
        <Navbar />
        <div className="flex">
          <Leftbar />
          <main className="flex-1 min-h-screen px-4 py-6 md:px-6 lg:px-8">
            {children}
          </main>
          <Rightbar />
        </div>
      </body>
    </html>
  );
}
