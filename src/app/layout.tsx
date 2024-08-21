import type { Metadata } from "next";
import './globals.css';
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";



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
      <body className=" md:bg-hero bg-50% bg-center  bg-white " >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
