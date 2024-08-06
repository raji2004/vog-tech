import type { Metadata } from "next";
import './globals.css';
import { NavBar } from "@/components/nav";



export const metadata: Metadata = {
  title: "Vog tech",
  description: "start up",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        {children}
        </body>
    </html>
  );
}
