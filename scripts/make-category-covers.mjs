// Renders one 1200x630 cover image per blog category, in VOG Global brand colours.
// Run: node scripts/make-category-covers.mjs
//
// Note: the cover set currently in public/img/blog was rendered from this same
// design but drawn with the canvas API in a browser, so re-running this script
// will produce visually equivalent images whose typography may differ slightly
// depending on the fonts installed on the machine that runs it.
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const GREEN = "#264E26";
const GREEN_DEEP = "#16301a";
const TEAL = "#024D52";
const GOLD = "#c9a86a";

// Each motif is inline SVG drawn large and faint on the right-hand side.
const MOTIFS = {
  "world-tax-watch": `
    <circle cx="300" cy="300" r="250" fill="none" stroke="${GOLD}" stroke-width="3"/>
    <ellipse cx="300" cy="300" rx="120" ry="250" fill="none" stroke="${GOLD}" stroke-width="3"/>
    <ellipse cx="300" cy="300" rx="220" ry="250" fill="none" stroke="${GOLD}" stroke-width="2"/>
    <line x1="50" y1="300" x2="550" y2="300" stroke="${GOLD}" stroke-width="3"/>
    <line x1="90" y1="185" x2="510" y2="185" stroke="${GOLD}" stroke-width="2"/>
    <line x1="90" y1="415" x2="510" y2="415" stroke="${GOLD}" stroke-width="2"/>`,
  taxation: `
    <rect x="130" y="70" width="340" height="440" rx="14" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <line x1="185" y1="165" x2="415" y2="165" stroke="${GOLD}" stroke-width="10" stroke-linecap="round"/>
    <line x1="185" y1="235" x2="415" y2="235" stroke="${GOLD}" stroke-width="10" stroke-linecap="round"/>
    <line x1="185" y1="305" x2="330" y2="305" stroke="${GOLD}" stroke-width="10" stroke-linecap="round"/>
    <line x1="185" y1="400" x2="415" y2="400" stroke="${GOLD}" stroke-width="4"/>
    <text x="300" y="465" font-size="64" font-weight="700" fill="${GOLD}" text-anchor="middle" font-family="Georgia, serif">%</text>`,
  policy: `
    <rect x="120" y="180" width="60" height="270" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="270" y="180" width="60" height="270" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="420" y="180" width="60" height="270" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <polygon points="300,80 530,170 70,170" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="60" y="465" width="480" height="26" fill="none" stroke="${GOLD}" stroke-width="4"/>`,
  "public-finance": `
    <line x1="90" y1="500" x2="530" y2="500" stroke="${GOLD}" stroke-width="4"/>
    <rect x="130" y="330" width="70" height="170" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="235" y="240" width="70" height="260" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="340" y="150" width="70" height="350" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <rect x="445" y="90" width="70" height="410" fill="none" stroke="${GOLD}" stroke-width="4"/>`,
  "global-economy": `
    <circle cx="200" cy="200" r="86" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <circle cx="410" cy="180" r="60" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <circle cx="180" cy="430" r="62" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <circle cx="420" cy="420" r="92" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <line x1="284" y1="192" x2="352" y2="184" stroke="${GOLD}" stroke-width="3"/>
    <line x1="196" y1="288" x2="182" y2="366" stroke="${GOLD}" stroke-width="3"/>
    <line x1="252" y1="252" x2="360" y2="360" stroke="${GOLD}" stroke-width="3"/>
    <line x1="418" y1="242" x2="420" y2="326" stroke="${GOLD}" stroke-width="3"/>`,
  leadership: `
    <circle cx="300" cy="300" r="90" fill="none" stroke="${GOLD}" stroke-width="5"/>
    <circle cx="300" cy="300" r="160" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <circle cx="300" cy="300" r="230" fill="none" stroke="${GOLD}" stroke-width="3"/>
    <circle cx="300" cy="300" r="22" fill="${GOLD}"/>`,
};

const CATEGORIES = [
  { slug: "world-tax-watch", label: "World Tax Watch", kicker: "Insight" },
  { slug: "taxation", label: "Taxation", kicker: "Insight" },
  { slug: "policy", label: "Policy", kicker: "Insight" },
  { slug: "public-finance", label: "Public Finance", kicker: "Insight" },
  { slug: "global-economy", label: "Global Economy", kicker: "Insight" },
  { slug: "leadership", label: "Leadership", kicker: "Insight" },
  { slug: "default", label: "VOG Global Insight", kicker: "Insight", motif: "world-tax-watch" },
];

function page(cat) {
  const motif = MOTIFS[cat.motif || cat.slug];
  const size = cat.label.length > 16 ? 62 : 76;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1200px;height:630px;overflow:hidden;
      font-family:"DejaVu Sans","Liberation Sans",Arial,Helvetica,sans-serif;
      background:linear-gradient(125deg, ${GREEN} 0%, ${GREEN_DEEP} 62%, ${TEAL} 100%);
      position:relative;color:#fff}
    .motif{position:absolute;right:-40px;top:15px;opacity:.20}
    .bar{position:absolute;left:0;top:0;width:14px;height:100%;background:${GOLD}}
    .inner{position:absolute;left:86px;top:0;height:100%;display:flex;flex-direction:column;justify-content:center;width:700px}
    .brand{font-size:20px;letter-spacing:.32em;text-transform:uppercase;color:${GOLD};font-weight:700;margin-bottom:26px}
    h1{font-size:${size}px;line-height:1.1;font-weight:700;letter-spacing:-.5px}
    .rule{width:120px;height:5px;background:${GOLD};margin:30px 0 22px;border-radius:3px}
    .foot{font-size:22px;color:rgba(255,255,255,.72);letter-spacing:.02em}
  </style></head><body>
    <div class="bar"></div>
    <svg class="motif" width="600" height="600" viewBox="0 0 600 600">${motif}</svg>
    <div class="inner">
      <div class="brand">VOG Global</div>
      <h1>${cat.label}</h1>
      <div class="rule"></div>
      <div class="foot">Audit, tax and advisory insight &nbsp;·&nbsp; vog.global</div>
    </div>
  </body></html>`;
}

const outDir = "public/img/blog";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const cat of CATEGORIES) {
  await p.setContent(page(cat), { waitUntil: "load" });
  await p.screenshot({ path: `${outDir}/${cat.slug}.jpg`, type: "jpeg", quality: 88 });
  console.log("wrote", `${outDir}/${cat.slug}.jpg`);
}
await browser.close();
