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
      <body className=" bg-white  " >
        <div className=" bg-transparent overflow-x-hidden">

          <NavBar />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
