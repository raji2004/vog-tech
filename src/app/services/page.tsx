import Link from "next/link";

const SERVICES = [
  { t: "Technology-Enabled Bookkeeping", d: "Cloud-based recording of daily transactions — sales, purchases, receipts and payments — so your financial data is accurate, up-to-date and accessible anywhere." },
  { t: "Tax Preparation & Filing", d: "Aligned with Nigerian tax law and international regulations. Our technology-driven process ensures compliance while helping you maximise deductions and credits." },
  { t: "Auditing Services", d: "Compliant with IFRS and local auditing standards. Advanced tools ensure the accuracy of your financial statements and full regulatory compliance." },
  { t: "Financial Statement Preparation", d: "Balance sheets, income statements and cash-flow reports following Nigerian regulatory requirements and global accounting principles." },
  { t: "Tech-Integrated Payroll Services", d: "Advanced payroll software managing wage calculations, tax withholdings and employee payments efficiently, accurately and compliantly." },
  { t: "Tax Planning & Advisory", d: "Strategies that comply with Nigerian tax policy while incorporating global best practice to minimise liabilities and support long-term financial health." },
  { t: "Consulting & Advisory Services", d: "Data-driven insight and industry best practice to guide mergers, acquisitions, restructuring and investment decisions." },
  { t: "Internal Controls & Risk Management", d: "Technology-driven controls that adhere to Nigeria's financial regulations and global standards, safeguarding your assets and operations." },
  { t: "Forensic Accounting", d: "Advanced data analytics to investigate discrepancies and fraud, offering expert insight and legal support as needed." },
  { t: "Business Valuation", d: "Cutting-edge financial modelling for accurate assessments in mergers, acquisitions or legal proceedings, guided by international valuation standards." },
  { t: "Budgeting & Financial Forecasting", d: "Predictive analytics to project financial trends and help your business manage cash flow effectively for future growth." },
  { t: "Compliance & Regulatory Support", d: "Real-time compliance tracking that simplifies government reporting and meets Nigerian and global regulatory standards." },
  { t: "Business Research & Re-engineering", d: "Data analytics and process optimisation to help your business improve efficiency, reduce costs and drive profitability." },
  { t: "Training & Development", d: "E-learning platforms and customised training solutions to enhance your staff's skills and business acumen." },
  { t: "Staff Outsourcing", d: "Top-tier talent matched to your business needs through advanced HR management systems — compliant and operationally efficient." },
];
const SvcIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></svg>
);

export default function Services() {
  return (
    <div>
      <section className="banner"><div className="wrap"><div className="crumb">Home <b>›</b> Our Services</div><h1>Our Services</h1><p>A full spectrum of technology-enabled audit, tax, accounting and advisory services — compliant with Nigerian and international standards.</p></div></section>

      <section className="section"><div className="wrap">
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.t}><div className="ic"><SvcIcon /></div><h3>{s.t}</h3><p>{s.d}</p><Link href="/contact" className="lk">Enquire →</Link></div>
          ))}
        </div>
      </div></section>

      <section className="section soft"><div className="wrap">
        <div className="sec-head"><h2>How we work</h2><p>A clear, collaborative process from first conversation to final report.</p></div>
        <div className="pillars" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          <div className="pillar"><div className="top"><span className="ck">1</span><h4>Discover</h4></div><p>We learn your business, risks and goals.</p></div>
          <div className="pillar"><div className="top"><span className="ck">2</span><h4>Assess</h4></div><p>Thorough audit and review against standards.</p></div>
          <div className="pillar"><div className="top"><span className="ck">3</span><h4>Advise</h4></div><p>Clear findings and practical recommendations.</p></div>
          <div className="pillar"><div className="top"><span className="ck">4</span><h4>Support</h4></div><p>Ongoing guidance, updates and reporting.</p></div>
        </div>
      </div></section>

      <section className="section"><div className="wrap"><div className="ctaband"><h2>Not sure which service you need?</h2><p>Tell us about your business and we&apos;ll recommend the right engagement.</p><div className="cta-row"><Link href="/contact" className="btn btn-gold">Talk to our team</Link></div></div></div></section>
    </div>
  );
}
