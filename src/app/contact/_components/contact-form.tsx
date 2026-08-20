"use client";
import { useState } from "react";

const SERVICES = [
  "Auditing Services", "Tax Preparation & Filing", "Technology-Enabled Bookkeeping",
  "Financial Statement Preparation", "Tax Planning & Advisory", "Forensic Accounting",
  "Consulting & Advisory Services", "Business Valuation", "Compliance & Regulatory Support",
  "General enquiry",
];

// FormSubmit delivers submissions straight to this inbox — no server/API key needed.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@vog.global";
const CC_EMAIL = "vogglobal@yahoo.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.success === "false") {
        throw new Error(json?.message || "We couldn't send your message. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form className="cform" onSubmit={onSubmit}>
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New enquiry from vogglobal.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_cc" value={CC_EMAIL} />
      {/* honeypot — bots fill this, humans never see it */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="row">
        <div className="field"><label htmlFor="firstName">First name</label>
          <input id="firstName" name="First name" required placeholder="Okey" disabled={sending} />
        </div>
        <div className="field"><label htmlFor="lastName">Last name</label>
          <input id="lastName" name="Last name" required placeholder="Udo" disabled={sending} />
        </div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" disabled={sending} />
        </div>
        <div className="field"><label htmlFor="phone">Phone</label>
          <input id="phone" name="Phone" placeholder="+234 ..." disabled={sending} />
        </div>
      </div>
      <div className="field"><label htmlFor="service">Service of interest</label>
        <select id="service" name="Service of interest" disabled={sending}>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field"><label htmlFor="message">Message</label>
        <textarea id="message" name="Message" required placeholder="Tell us a little about your business and what you need..." disabled={sending} />
      </div>
      <button
        type="submit"
        className="btn btn-green"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={sending}
      >
        {sending ? "Sending..." : "Send message →"}
      </button>

      {status === "sent" && (
        <p style={{ marginTop: "14px", textAlign: "center", color: "var(--green-accent)", fontWeight: 600 }}>
          Thanks — your message is on its way. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "14px", textAlign: "center", color: "#c0392b", fontWeight: 600 }}>
          {error} You can also email us directly at{" "}
          <a href="mailto:info@vog.global" style={{ textDecoration: "underline" }}>info@vog.global</a>{" "}
          or call <a href="tel:+2348072323237" style={{ textDecoration: "underline" }}>0807 232 3237</a>.
        </p>
      )}
    </form>
  );
}
