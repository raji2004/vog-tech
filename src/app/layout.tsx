import type { Metadata } from "next";
import './globals.css';
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";



export const metadata: Metadata = {
  title: "Vog Global",
  description: `At VOG Global, we are more than just consultants; we are your
                            dedicated partners in success. With over two decades of industry experience,
                            our team of seasoned professionals is committed to delivering tailored solutions that drive growth,
                            ensure compliance, and foster long-term success
                            .`,

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
