import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostsQueryResult } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

const SERVICES = [
  { t: "Auditing Services", d: "Compliant with IFRS and local standards. Advanced tools ensure the accuracy of your financial statements and full regulatory compliance." },
  { t: "Tax Preparation & Filing", d: "Aligned with Nigerian tax law and international regulations, with technology-driven filing that maximises deductions and stays compliant." },
  { t: "Technology-Enabled Bookkeeping", d: "Cloud-based recording of daily transactions so your financial data is accurate, up-to-date and accessible anywhere." },
  { t: "Financial Statement Preparation", d: "Balance sheets, income statements and cash-flow reports following Nigerian and global accounting principles." },
  { t: "Tax Planning & Advisory", d: "Strategies that comply with Nigerian policy and global best practice to minimise liabilities and support long-term health." },
  { t: "Forensic Accounting", d: "Advanced analytics to investigate discrepancies and fraud, with expert insight and legal support as needed." },
];
const PILLARS = [
  { t: "Personalized Solutions", d: "We take time to understand your specific needs, challenges and goals, tailoring our services to drive your business forward." },
  { t: "Expert Guidance", d: "Our professionals combine deep knowledge with practical insight to help you make informed decisions." },
  { t: "Proactive Risk Management", d: "We identify and mitigate potential risks before they become issues, keeping your business compliant and resilient." },
  { t: "Transparent Communication", d: "Open, clear communication with regular updates and detailed reports so you are always aware of our progress and findings." },
  { t: "Modern Technology", d: "Current tools and platforms that speed up the work and give you real-time insight." },
  { t: "Continuous Improvement", d: "Our methodologies and training are regularly updated to reflect the latest best practices and regulatory changes." },
  { t: "Collaborative Partnership", d: "We work closely with your team, offering support, guidance and expertise every step of the way." },
  { t: "Measurable Results", d: "A results-driven approach delivering measurable improvements in compliance, efficiency and financial performance." },
  { t: "Unwavering Integrity", d: "High standards of ethics and professionalism, so the work we hand you is dependable." },
];
const TEAM = [
  { img: "/img/home/meettheteam5.jpeg", name: "Dr. Okey Okoro Udo", cred: "PhD, FCTI, CPA, CNA, FIIAS, MNIM", pos: "Managing Consultant, VOG Global", bio: "A finance, taxation and management professional with over 25 years of multidisciplinary experience across economics, taxation, forensic audit and strategic advisory." },
  { img: "/img/home/meettheteam1.svg", name: "Angela Adamu", cred: "BSc, ACA", pos: "Head, Audit & Accounting Services", bio: "An associate member of ICAN with in-depth knowledge of accounting systems, leading the Audit and Accounting Service Department." },
  { img: "/img/home/meettheteam2.svg", name: "Ajayi Oluwaniyi Moses", cred: "MBA, ACA, CISA, CAMS, CFLT", pos: "Manager, Corporate Services & Business Development", bio: "A dynamic, result-oriented professional with extensive banking, audit-compliance and business-development expertise." },
  { img: "/img/home/meettheteam3.svg", name: "Idika Kalu Ibe", cred: "FCIIN, MPA, BSc, CILRM", pos: "Head, Insurance & Risk Assessment", bio: "An insurance loss adjuster and management expert with over 20 years in insurance, assurance and risk management." },
  { img: "/img/home/meettheteam.svg", name: "Kalu Uche Eme", cred: "NSA, MPA, HND", pos: "Head of Actuary", bio: "An astute statistician and NSA associate with over 22 years of experience, having worked with the British Council and UNODC." },
  { img: "/img/home/meettheteam4.svg", name: "Benedict O. Uwaokhonye", cred: "BSc, MSc, ACIHRM", pos: "Admin Officer & Head of ICT", bio: "A graduate of Applied Mathematics with a Master’s in Financial Mathematics and an ACIHRM associate, finalising ICAN membership." },
];
const FAQ = [
  { q: "What services do you offer?", a: "Business consulting, tax audit, assurance and more, each tailored to what your business actually needs." },
  { q: "How do I get started?", a: "Contact us to schedule a consultation. Our team will work through your needs and put together a plan to meet your objectives." },
  { q: "What industries do you specialize in?", a: "We work across manufacturing, retail, healthcare, technology, oil & gas, banking, construction and more, with services suited to each industry." },
  { q: "How can VOG Global help my business?", a: "By working closely with you to reduce risk, improve compliance and support growth, with guidance suited to your business rather than a template." },
];
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></svg>
);

function excerpt(body: PostsQueryResult[number]["body"]): string {
  if (!Array.isArray(body)) return "";
  const t = body.map((b) => (b._type === "block" ? b.children?.map((c) => c.text).join("") ?? "" : "")).join(" ");
  return t.length > 120 ? t.slice(0, 120).trimEnd() + "…" : t;
}

export default async function Home() {
  const posts = await sanityFetch<PostsQueryResult>({ query: POSTS_QUERY, revalidate: 30 });
  const latest = (Array.isArray(posts) ? posts : []).slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="wrap inner">
          <div>
            <span className="eyebrow light">Building Rewarding Partnerships</span>
            <h1>Expert Tax Auditing &amp; <span className="u">Business Consulting</span> in Nigeria.</h1>
            <p className="lead">Twenty-five years of getting businesses through their numbers, in Nigeria and beyond. We build audit, tax and advisory work around how your company actually operates, so you stay compliant and keep growing.</p>
            <div className="cta-row">
              <Link href="/contact" className="btn btn-gold">Get Started →</Link>
              <Link href="/services" className="btn btn-ghost">See all our services</Link>
            </div>
            <div className="trust">
              <span><b>500+</b> businesses audited</span>
              <span><b>5,000+</b> clients served</span>
              <span><b>100%</b> satisfaction</span>
            </div>
          </div>
          <div className="hero-visual">
            <img className="photo" src="/img/home/team-hero.jpg" alt="The VOG Global team" />
            <div className="badge"><span className="n">25+</span><span className="l">Years of multidisciplinary experience</span></div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip"><div className="wrap row">
        <span className="t">Trusted across industries:</span>
        <span>Oil &amp; Gas</span><span>Banking &amp; Finance</span><span>Construction</span><span>Agriculture</span><span>Government &amp; NGOs</span><span>Shipping</span>
      </div></div>

      {/* SERVICES PREVIEW */}
      <section className="section"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>Our Services</span><h2>Financial services built around your business</h2><p>From audit and assurance to tax, forensic accounting and technology, we cover the full range of compliance and advisory needs.</p></div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.t}><div className="ic"><CheckIcon /></div><h3>{s.t}</h3><p>{s.d}</p><Link href="/contact" className="lk">Enquire →</Link></div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "38px" }}><Link href="/services" className="btn btn-green">Explore all services →</Link></div>
      </div></section>

      {/* APPROACH */}
      <section className="section soft"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>Our Approach</span><h2>Enjoy the ease that financial assurance brings</h2><p>Nine principles guide every engagement, and they are why clients stay with us.</p></div>
        <div className="pillars">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.t}><div className="top"><span className="ck">✓</span><h4>{p.t}</h4></div><p>{p.d}</p></div>
          ))}
        </div>
      </div></section>

      {/* STATS */}
      <section className="statband"><div className="wrap"><div className="g">
        <div><div className="n">500+</div><div className="l">Businesses audited</div></div>
        <div><div className="n">5,000+</div><div className="l">Clients serviced</div></div>
        <div><div className="n">100%</div><div className="l">Client satisfaction</div></div>
        <div><div className="n">25+</div><div className="l">Years of experience</div></div>
      </div></div></section>

      {/* WHY CHOOSE */}
      <section className="section"><div className="wrap split">
        <div className="visual"><img src="/img/home/team-training.jpg" alt="The VOG Global team at work" /><div className="badge"><span className="n">100%</span><span className="l">Client satisfaction, with compliance and assurance you can trust.</span></div></div>
        <div>
          <span className="eyebrow">Why VOG Global?</span>
          <h2>The best choice for your business</h2>
          <p className="lead">We combine deep regulatory knowledge of Nigerian tax law with modern tools and methodologies, so your business stays compliant, efficient and ready to grow.</p>
          <div className="checklist">
            <div className="it"><span className="d">✓</span><span><b>Expert guidance</b>: certified professionals recognised by leading industry bodies.</span></div>
            <div className="it"><span className="d">✓</span><span><b>Proactive risk management</b>: issues identified before they become problems.</span></div>
            <div className="it"><span className="d">✓</span><span><b>Modern technology</b>: cloud-based tools for accuracy, speed and transparency.</span></div>
            <div className="it"><span className="d">✓</span><span><b>Unwavering integrity</b>: transparent processes with regular updates and reports.</span></div>
          </div>
          <Link href="/about" className="btn btn-green">More about us →</Link>
        </div>
      </div></section>

      {/* DIVISIONS */}
      <section className="section soft"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>The VOG Group</span><h2>One group, specialised strengths</h2><p>Our divisions bring focused expertise across consulting, investment and agribusiness.</p></div>
        <div className="subs">
          <div className="sub"><div className="badge"><span className="dot">VC</span>VOG Global Consult</div><p>Strategic consulting, tax audit and assurance that turns complex regulation into clear, actionable business decisions.</p></div>
          <div className="sub"><div className="badge"><span className="dot">VI</span>VOG Global Investment Ltd</div><p>Investment and financial services that help organisations and individuals grow and protect their wealth.</p></div>
          <div className="sub"><div className="badge"><span className="dot">VF</span>VOG Global Farms</div><p>Agriculture and agribusiness: sustainable farming ventures under the VOG Global group.</p></div>
        </div>
      </div></section>

      {/* TEAM */}
      <section className="section"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>Our Team</span><h2>Innovative problem solvers</h2><p>Led by professionals who bring clarity to complex compliance work.</p></div>
        <div className="team">
          {TEAM.map((m) => (
            <div className="tm" key={m.name}>
              <div className="ph-wrap"><img className="ph" src={m.img} alt={m.name} /></div>
              <div className="info"><h4>{m.name}</h4><div className="cred">{m.cred}</div><div className="pos">{m.pos}</div><p className="bio">{m.bio}</p></div>
            </div>
          ))}
        </div>
      </div></section>

      {/* LATEST POSTS */}
      <section className="section"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>From the Blog</span><h2>Latest insights</h2><p>Clear analysis of tax, public finance and policy from Dr. Okey Okoro Udo.</p></div>
        <div className="posts">
          {latest.map((post, i) => (
            <Link href={`/blog/${post.slug.current}`} className="card" key={post._id} style={{ textDecoration: "none" }}>
              <div className={`ph ${["g1", "g2", "g3"][i % 3]}`} style={post.mainImage?.asset?._ref ? { backgroundImage: `url(${urlFor(post.mainImage.asset._ref).width(700).height(400).url()})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}>
                {post.categories?.[0]?.title ? <span className="tag">{post.categories[0].title}</span> : null}
              </div>
              <div className="cbody">
                <div className="date">{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
                <h3>{post.title}</h3>
                <p>{excerpt(post.body)}</p>
                <div className="foot"><div className="author"><span className="avatar">OU</span><span>{post.author?.name ?? "VOG Global"}</span></div><span className="readmore">Read More →</span></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "38px" }}><Link href="/blog" className="btn btn-green">Read the blog →</Link></div>
      </div></section>

      {/* FAQ */}
      <section className="section soft"><div className="wrap">
        <div className="sec-head"><span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span><h2>Frequently asked questions</h2></div>
        <div className="faq">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}><summary>{f.q}</summary><div className="ans">{f.a}</div></details>
          ))}
        </div>
      </div></section>

      {/* CTA */}
      <section className="section"><div className="wrap"><div className="ctaband">
        <h2>Ready to change your business?</h2>
        <p>Let&apos;s build a rewarding partnership. Talk to our team about audit, tax and advisory tailored to your organisation.</p>
        <div className="cta-row"><Link href="/contact" className="btn btn-gold">Get Started</Link><Link href="/services" className="btn btn-ghost">See our services</Link></div>
      </div></div></section>
    </main>
  );
}
