import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img className="foot-logo" src="/icon/logo.svg" alt="VOG Global" />
            <p className="desc">
              More than just consultants — your dedicated partners in success, with over two
              decades of industry experience.
            </p>
            <div style={{ fontSize: "13px" }}>
              Divisions: VOG Global Consult · VOG Global Investment Ltd · VOG Global Farms
            </div>
          </div>
          <div className="foot-col">
            <h6>Services</h6>
            <Link href="/services">Auditing Services</Link>
            <Link href="/services">Tax Preparation &amp; Filing</Link>
            <Link href="/services">Forensic Accounting</Link>
            <Link href="/services">Consulting &amp; Advisory</Link>
          </div>
          <div className="foot-col">
            <h6>Company</h6>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="foot-col">
            <h6>Contact</h6>
            <a href="mailto:info@vog.global">info@vog.global</a>
            <a href="mailto:vogglobal@yahoo.com">vogglobal@yahoo.com</a>
            <a href="tel:+2348072323237">0807 232 3237</a>
            <a href="tel:+2348092147147">0809 214 7147</a>
          </div>
          <div className="foot-col news">
            <h6>Newsletter</h6>
            <p className="desc" style={{ marginBottom: "12px" }}>
              Get new insights from Dr. Okey Okoro Udo in your inbox.
            </p>
            <input type="email" placeholder="Your email address" />
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 VOG Global. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};
