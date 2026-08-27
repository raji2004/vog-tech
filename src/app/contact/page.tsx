import { ContactForm } from "./_components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to VOG Global about audit, tax and advisory work. Call 0807 232 3237 or 0809 214 7147, or email info@vog.global. Orago Complex, Area 10, Garki, Abuja.",
  alternates: { canonical: "https://www.vog.global/contact" },
};

export default function Contact() {
  return (
    <div>
      <section className="banner"><div className="wrap"><div className="crumb">Home <b>›</b> Contact Us</div><h1>Let&apos;s talk</h1><p>Tell us about your business and we&apos;ll get back to you with the right way forward.</p></div></section>

      <section className="section"><div className="wrap contact-grid">
        <div className="cinfo">
          <span className="eyebrow">Get in touch</span>
          <h2 className="serif" style={{ fontSize: "28px", color: "var(--ink)", marginBottom: "20px", lineHeight: 1.2 }}>We&apos;d love to hear from you</h2>
          <div className="item"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16v16H4z" /><path d="M4 6l8 6 8-6" /></svg></div><div><h4>Email</h4><p><a href="mailto:info@vog.global" style={{ color: "var(--green-accent)", fontWeight: 600 }}>info@vog.global</a></p><p><a href="mailto:vogglobal@yahoo.com" style={{ color: "var(--green-accent)", fontWeight: 600 }}>vogglobal@yahoo.com</a></p></div></div>
          <div className="item"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg></div><div><h4>Phone</h4><p><a href="tel:+2348072323237" style={{ color: "var(--green-accent)", fontWeight: 600 }}>0807 232 3237</a></p><p><a href="tel:+2348092147147" style={{ color: "var(--green-accent)", fontWeight: 600 }}>0809 214 7147</a></p></div></div>
          <div className="item"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><h4>Office</h4><p>Orago Complex, Nigeria</p></div></div>
          <img className="illus" src="/img/contact/contact1.svg" alt="Contact us" />
        </div>
        <ContactForm />
      </div></section>
    </div>
  );
}
