import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FaHome } from 'react-icons/fa';
import { FaRegNoteSticky } from "react-icons/fa6";
import { RiStickyNoteAddLine } from "react-icons/ri";
import FooterThird from "./Footer";
import Dock from './components/ui/Dock';





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

const items = [
  {
    link: '/',
    Icon: <FaHome size={22} />,
    defaultBgColor: 'bg-white',
    hoverBgColor: 'bg-slate-300',
    tooltip: 'Home',
  },
  {
    link: '/notes',
    Icon: <FaRegNoteSticky size={22} />,
    defaultBgColor: 'bg-white',
    hoverBgColor: 'bg-slate-300',
    tooltip: 'Note',
  },
  {
    link: '/notes/addnote',
    Icon: <RiStickyNoteAddLine size={22} />,
    defaultBgColor: 'bg-white',
    hoverBgColor: 'bg-slate-300',
    tooltip: 'Add Note',
  },
];

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Dock position="top" items={items} />
      <Toaster position="top-right" />
      <div className="mt-16 flex flex-col h-auto">
        <div className="flex-grow">{children}</div>

        </div>
        <FooterThird />
      </body>

    </html>
  );
}
