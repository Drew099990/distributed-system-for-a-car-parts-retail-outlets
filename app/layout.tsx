import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GiAutoRepair } from "react-icons/gi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WWAP",
  description: "you one stop shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
    className="bg-blue-100"  >

        <header className="bg-[#2f406b] z-20 w-full fixed top-0 border-b-2 border-blue-400 p-4 items-center-safe space-x-3 flex justify-end h-[5rem]" >
          <a href="login"
          style={{fontFamily:"cursive"}}
           className="border-2 px-5 py-0.5 rounded-2xl border-blue-100 text-blue-100">login</a>
          <a href="register"
           className="border-2 px-5 py-0.5 rounded-2xl border-blue-100 text-blue-100"
          style={{fontFamily:"cursive"}}
          >create account</a>

          <div className="fixed  origin-left m-5 left-2.5 border-2 rounded-[30%] p-2 text-3xl border-blue-100 text-blue-100 flex-row flex spacing-x-4"><GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  WWAP </div>
        </header>
        {children}
        <footer className="bg-blue-100 border-t-2 border-blue-400 text-blue-700 h-[5rem] flex justify-center items-center"><h1>All rights reserved © {new Date().getFullYear() == 2025 ? 2025: "2025 - "+ new Date().getFullYear()}</h1></footer>
        </body>
     
    </html>
  );
}
