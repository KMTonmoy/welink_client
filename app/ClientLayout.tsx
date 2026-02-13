"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Leftbar from "@/components/Layout/LeftBar/Leftbar";
import Rightbar from "@/components/Layout/RightBar/Rightbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/auth";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div className={!isAuthPage ? "flex" : ""}>
        {!isAuthPage && <Leftbar />}
        <main
          className={
            !isAuthPage
              ? "flex-1 min-h-screen px-4 py-6 md:px-6 lg:px-8"
              : "w-full min-h-screen"
          }
        >
          {children}
        </main>
        {!isAuthPage && <Rightbar />}
      </div>
    </>
  );
}
