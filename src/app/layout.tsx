import type { Metadata } from "next";
import './globals.css';
import './redesign.css';
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.vog.global"),
  title: {
    default: "VOG Global — Expert Tax Auditing & Business Consulting in Nigeria",
    template: "%s | VOG Global",
  },
  description:
    "VOG Global is a leading provider of consulting, tax audit and assurance services in Nigeria — more than just consultants, your dedicated partners in success, with over two decades of industry experience.",
  applicationName: "VOG Global",
  keywords: [
    "VOG Global",
    "tax audit Nigeria",
    "business consulting Nigeria",
    "accounting firm",
    "assurance services",
    "forensic accounting",
    "tax advisory",
    "Dr. Okey Okoro Udo",
  ],
  openGraph: {
    title: "VOG Global — Expert Tax Auditing & Business Consulting in Nigeria",
    description:
      "More than just consultants — your dedicated partners in success. Audit, tax and advisory services across Nigeria.",
    url: "https://www.vog.global",
    siteName: "VOG Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOG Global",
    description: "Expert tax auditing and business consulting in Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-white  " >
        <div className=" bg-transparent overflow-x-clip">

          <NavBar />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
