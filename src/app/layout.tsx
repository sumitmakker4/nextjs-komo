'use client'

import {Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import ClientProvider from "@/components/ClientProvider";
import { usePathname } from 'next/navigation';

const lato = Lato({
  weight: ['400', '700'], // Adjust as needed
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  const pathname = usePathname();
  const hideNavbarPaths = ['/signup', '/login'];
  const shouldRenderNavbar = !hideNavbarPaths.includes(pathname);

  return (
    <html lang="en">
        <body className={lato.className}>
          <ClientProvider>
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {shouldRenderNavbar && <Navbar />}
            </div>
            <div className="bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
          </ClientProvider>
        </body>
      </html>
  );
}