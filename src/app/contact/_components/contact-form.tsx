"use client";
import { useState } from "react";

const SERVICES = [
  "Auditing Services", "Tax Preparation & Filing", "Technology-Enabled Bookkeeping",
  "Financial Statement Preparation", "Tax Planning & Advisory", "Forensic Accounting",
  "Consulting & Advisory Services", "Business Valuation", "Compliance & Regulatory Support",
  "General enquiry",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to your email/CRM or an API route to actually receive messages.
    setSent(true);
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="row">
        <div className="field"><label>First name</label><input required placeholder="Okey" /></div>
        <div className="field"><label>Last name</label><input required placeholder="Udo" /></div>
      </div>
      <div className="row">
        <div className="field"><label>Email</label><input type="email" required placeholder="you@company.com" /></div>
        <div className="field"><label>Phone</label><input placeholder="+234 ..." /></div>
      </div>
      <div className="field"><label>Service of interest</label>
        <select>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <div className="field"><label>Message</label><textarea required placeholder="Tell us a little about your business and what you need..." /></div>
      <button type="submit" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>Send message →</button>
      {sent && (
        <p style={{ marginTop: "14px", textAlign: "center", color: "var(--green-accent)", fontWeight: 600 }}>
          Thanks — we&apos;ll be in touch shortly. (Connect this form to your email/CRM to receive messages.)
        </p>
      )}
    </form>
  );
}
