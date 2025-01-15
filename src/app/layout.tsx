import type { Metadata } from "next";
import {Lato,Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import store from "@/store/store";

export const metadata: Metadata = {
  title: "Komo",
  description: "Social media app built with Next.js",
};

const lato = Lato({
  weight: ['400', '700'], // Adjust as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={lato.className}>
          <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              <Navbar />
          </div>
          <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </div>
        </body>
      </html>
    </Provider>
  );
}