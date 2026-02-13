import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
