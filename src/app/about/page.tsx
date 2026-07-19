import Link from "next/link";

const DEPTS = [
  { t: "Audit & Assurance", d: "Statutory and internal audits, investigation and special audits — accurate, independent, standards-based assurance." },
  { t: "Tax Advisory Services", d: "Handles all tax matters, from FIRS and state tax to reviews, filings and revenue-authority liaison." },
  { t: "Management & Corporate Services", d: "Corporate routines in line with CAC and regulatory obligations, keeping your business in good standing." },
  { t: "Business Development", d: "Drives company development in engineering, forensics, studies, sustainability, advisory and related areas." },
  { t: "Information Technology", d: "IT systems, cloud tools, data integrity and technology-enabled delivery across every department." },
  { t: "Support Service Unit", d: "Administrative and back-office support that keeps the organisation running smoothly and reliably." },
];
const DeptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></svg>
);

export default function About() {
  return (
    <div>
      <section className="banner"><div className="wrap"><div className="crumb">Home <b>›</b> About Us</div><h1>About VOG Global</h1><p>More than just consultants — your dedicated partners in success, with over two decades of industry experience.</p></div></section>

      <section className="section"><div className="wrap prose-col">
        <p style={{ fontSize: "20px", color: "var(--ink)" }}>VOG Global is a consulting, tax audit and assurance firm helping organisations across Nigeria attain financial security and stay compliant with confidence.</p>
        <p>For over two decades we have partnered with businesses of every size — providing bookkeeping, auditing, tax, forensic accounting, risk management and advisory through specialised departments. We are certified by the relevant authorities and recognised by leading industry bodies, and we pride ourselves on transparent processes backed by regular updates and reports.</p>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "22px", color: "var(--green)", fontWeight: 600, borderLeft: "4px solid var(--green-accent)", paddingLeft: "18px" }}>Our mission: to support clients in attaining financial security by combining the latest technologies and methodologies with deep knowledge of Nigerian tax regulation.</p>
      </div></section>

      <section className="section soft"><div className="wrap">
        <div className="sec-head"><h2>Our departments</h2><p>Specialised teams delivering focused expertise across every engagement.</p></div>
        <div className="depts">
          {DEPTS.map((d) => (
            <div className="dept" key={d.t}><div className="ic"><DeptIcon /></div><h4>{d.t}</h4><p>{d.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="statband"><div className="wrap"><div className="g">
        <div><div className="n">5,000+</div><div className="l">Clients serviced</div></div>
        <div><div className="n">100%</div><div className="l">Satisfaction rate</div></div>
        <div><div className="n">10+</div><div className="l">Corporate partners</div></div>
        <div><div className="n">25+</div><div className="l">Years of experience</div></div>
      </div></div></section>

      <section className="section"><div className="wrap">
        <div className="sec-head"><h2>Industries we serve</h2><p>Trusted expertise across a broad range of sectors.</p></div>
        <div className="industries"><span>Oil &amp; Gas</span><span>Energy</span><span>Construction</span><span>Banking &amp; Finance</span><span>Agriculture</span><span>NGOs</span><span>Government Agencies</span><span>Shipping</span><span>Import &amp; Export</span><span>General Commerce</span></div>
      </div></section>

      <section className="section soft"><div className="wrap">
        <div className="sec-head"><h2>Trusted by leading organisations</h2><p>A few of the clients who count on VOG Global.</p></div>
        <div className="clients">
          <div className="c"><img src="/img/about/client.svg" alt="Family Health International" /></div>
          <div className="c"><img src="/img/about/client1.svg" alt="Julius Berger" /></div>
          <div className="c"><img src="/img/about/client3.svg" alt="NESPAK" /></div>
        </div>
      </div></section>

      <section className="section"><div className="wrap"><div className="ctaband"><h2>Let&apos;s lead your business to success</h2><p>Partner with a team that treats your compliance and growth as its own.</p><div className="cta-row"><Link href="/contact" className="btn btn-gold">Get Started</Link></div></div></div></section>
    </div>
  );
}
