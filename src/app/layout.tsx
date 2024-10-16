import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "My first project propulsed by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
        <ul  className="flex justify-center gap-6 py-4 rounded-lg bg-gray-300 my-4 mx-32 justify-items-center text-center text-black transition ease-in-out hover:text-gray-800 duration-200">
          <li><a href="/">Home</a></li>
          <li> | </li>
          <li><a href="/notes">Notes</a></li>
          <li> | </li>
          <li><a href="/notes/addnote">Add Note</a></li>
        </ul>
      </nav>
      <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
