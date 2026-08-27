import type { Metadata } from "next";
import './globals.css';
import './redesign.css';
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.vog.global"),
  title: {
    default: "VOG Global: Expert Tax Auditing & Business Consulting in Nigeria",
    template: "%s | VOG Global",
  },
  description:
    "VOG Global provides consulting, tax audit and assurance services to businesses in Nigeria and beyond, with over two decades of experience in audit, tax, forensic accounting and advisory.",
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
    title: "VOG Global: Expert Tax Auditing & Business Consulting in Nigeria",
    description:
      "Audit, tax and advisory for businesses in Nigeria and beyond, backed by more than two decades of experience.",
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
      <head>
        {/* Organization details for Google's knowledge panel and local results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "VOG Global",
              url: "https://www.vog.global",
              logo: "https://www.vog.global/icon/logo.svg",
              description:
                "Audit, tax and advisory services for businesses in Nigeria, with over two decades of industry experience.",
              email: "info@vog.global",
              telephone: ["+2348072323237", "+2348092147147"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite 060 to 061, Orago Complex, Area 10, Garki",
                addressLocality: "Abuja",
                addressCountry: "NG",
              },
              areaServed: "NG",
              founder: { "@type": "Person", name: "Dr. Okey Okoro Udo" },
              knowsAbout: [
                "Tax advisory",
                "Audit and assurance",
                "Forensic accounting",
                "Business valuation",
                "Regulatory compliance",
              ],
            }),
          }}
        />
      </head>
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
