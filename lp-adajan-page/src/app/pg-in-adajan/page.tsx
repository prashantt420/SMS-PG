import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const SITE_URL = "https://sms-pg-adajan.vercel.app";
const PAGE_URL = `${SITE_URL}/pg-in-adajan`;
const PHONE_DISPLAY = "+91 93138 42276";
const PHONE_E164 = "+919313842276";
const WHATSAPP_URL = "https://wa.me/919313842276";
const ADDRESS = "C1, Vaibhav Laxmi Row House, Ugat Canal Road, Adajan, Surat, Gujarat 395009, India";

export const metadata: Metadata = {
  title: "Boys PG in Adajan, Surat | LP Savani PG Rooms & Rent",
  description:
    "Looking for a boys PG in Adajan, Surat? Explore AC and non-AC 2-sharing and 3-sharing rooms at LP Savani PG, with monthly rents from ₹5,500. Enquire for availability.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Boys PG in Adajan, Surat | LP Savani PG",
    description:
      "Explore boys' shared accommodation at LP Savani PG in Adajan, Surat. Compare room options, listed monthly rents and facilities.",
    siteName: "LP Savani PG",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boys PG in Adajan, Surat | LP Savani PG",
    description:
      "AC and non-AC shared room options for boys in Adajan, Surat. Enquire about current availability.",
  },
};

const rooms = [
  { name: "2 Sharing AC", price: "₹8,000", note: "Per person, per month" },
  { name: "3 Sharing AC", price: "₹7,500", note: "Per person, per month" },
  { name: "2 Sharing Non-AC", price: "₹7,000", note: "Per person, per month" },
  { name: "3 Sharing Non-AC", price: "₹5,500", note: "Per person, per month" },
];

const facilities = [
  ["Wi-Fi", "Stay connected for study, work and everyday use."],
  ["CCTV security", "Security cameras are installed in common areas."],
  ["Power backup", "Added convenience during power cuts."],
  ["Laundry facilities", "Laundry facilities are available for residents."],
  ["Kitchen access", "Residents have access to a fully equipped kitchen."],
  ["Comfortable shared rooms", "Choose a room configuration that fits your budget."],
];

const faqs = [
  {
    q: "Is LP Savani PG for boys?",
    a: "Yes. LP Savani PG is for boys. Contact the management to discuss suitability, current room availability and the booking process.",
  },
  {
    q: "Where is LP Savani PG located?",
    a: `The public address is ${ADDRESS}. Contact the management if you need help with directions or want to arrange a visit.`,
  },
  {
    q: "What are the room options and monthly rents?",
    a: "The listed options are 2 Sharing AC at ₹8,000, 3 Sharing AC at ₹7,500, 2 Sharing Non-AC at ₹7,000 and 3 Sharing Non-AC at ₹5,500 per person per month. Confirm the final rent and availability before booking.",
  },
  {
    q: "Is food included in the rent?",
    a: "Optional food service is available for a one-time charge of ₹1,500. It covers lunch and dinner only. Breakfast is not available. Confirm the current arrangement with management.",
  },
  {
    q: "Can I visit the PG before booking?",
    a: "Yes. Contact the management to arrange a visit and check the room before making a decision.",
  },
  {
    q: "How can I check current vacancies?",
    a: "Room availability can change. Call or WhatsApp LP Savani PG to confirm which room types are currently available.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "LP Savani PG",
      url: SITE_URL,
      telephone: PHONE_E164,
      description:
        "Boys paying guest accommodation in Adajan, Surat, with AC and non-AC shared room options.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "C1, Vaibhav Laxmi Row House, Ugat Canal Road",
        addressLocality: "Adajan, Surat",
        addressRegion: "Gujarat",
        postalCode: "395009",
        addressCountry: "IN",
      },
      priceRange: "₹5,500–₹8,000 per person per month",
      amenityFeature: facilities.map(([name]) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Boys PG in Adajan, Surat | LP Savani PG",
      description:
        "Room options, monthly rents, facilities and contact details for LP Savani PG in Adajan, Surat.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Boys PG in Adajan", item: PAGE_URL },
      ],
    },
  ],
};

function WhatsAppButton({ children }: { children: ReactNode }) {
  return (
    <a
      className={styles.primaryButton}
      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I am looking for a boys PG in Adajan. Please share current room availability and booking details.")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function PgInAdajanPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className={styles.topbar}>
        <div className={styles.shell}>
          <Link href="/" className={styles.brand} aria-label="LP Savani PG home">
            <span className={styles.brandMark}>LP</span>
            <span>LP SAVANI <small>PAYING GUEST</small></span>
          </Link>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#rooms">Rooms & rent</a>
            <a href="#facilities">Facilities</a>
            <a href="#location">Location</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className={styles.navCall} href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.shell + " " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>BOYS PG · ADAJAN · SURAT</p>
            <h1>Looking for a boys PG in <em>Adajan, Surat?</em></h1>
            <p className={styles.heroLead}>
              Explore shared room options at LP Savani PG, with AC and non-AC plans for different budgets. Check the listed rents and contact the management for current availability.
            </p>
            <div className={styles.actions}>
              <WhatsAppButton>Check room availability <span aria-hidden="true">↗</span></WhatsAppButton>
              <a className={styles.secondaryButton} href="#rooms">Explore room options</a>
            </div>
            <div className={styles.heroFacts}>
              <span>For boys</span><span>2 & 3 sharing</span><span>From ₹5,500/month</span>
            </div>
          </div>
          <aside className={styles.heroCard} aria-label="LP Savani PG key information">
            <div className={styles.cardTop}><span>LP SAVANI PG</span><span className={styles.liveDot}>● ENQUIRIES OPEN</span></div>
            <div className={styles.cardIllustration} aria-hidden="true">
              <div className={styles.window}><i /><i /><i /><i /></div>
              <div className={styles.bed}><div className={styles.pillow} /><div className={styles.blanket} /></div>
              <div className={styles.plant}><i /><i /><i /><b /></div>
              <div className={styles.floorLine} />
            </div>
            <div className={styles.cardBottom}><div><small>LISTED MONTHLY RENT FROM</small><strong>₹5,500</strong></div><span>Per person<br/>subject to confirmation</span></div>
          </aside>
        </div>
      </section>

      <section className={styles.trustBand}>
        <div className={styles.shell + " " + styles.trustGrid}>
          <div><b>01</b><span>AC & non-AC<br/>room choices</span></div>
          <div><b>02</b><span>2-sharing &<br/>3-sharing plans</span></div>
          <div><b>03</b><span>Everyday<br/>facilities</span></div>
          <div><b>04</b><span>Adajan, Surat<br/>public address</span></div>
        </div>
      </section>

      <section className={styles.section} id="rooms">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.kicker}>ROOMS & MONTHLY RENT</p><h2>Choose a room that<br/><em>fits your budget.</em></h2></div>
            <p>Compare the listed room configurations below. Rates are per person per month; confirm the final amount, deposit, additional charges and current vacancies with management.</p>
          </div>
          <div className={styles.roomGrid}>
            {rooms.map((room, index) => (
              <article className={styles.roomCard} key={room.name}>
                <div className={styles.roomNumber}>0{index + 1}</div>
                <p className={styles.roomType}>{room.name.includes("AC") ? "AIR-CONDITIONED" : "NON AIR-CONDITIONED"}</p>
                <h3>{room.name}</h3>
                <div className={styles.roomPrice}>{room.price}<small> / person / month</small></div>
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I want to enquire about the ${room.name} room at LP Savani PG. Please confirm availability and final charges.`)}`} target="_blank" rel="noopener noreferrer">Enquire about this room <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className={styles.finePrint}>Listed monthly rents are indicative. Final rent, deposit, electricity, food and any other charges must be confirmed with management before booking.</p>
        </div>
      </section>

      <section className={styles.featureSection} id="facilities">
        <div className={styles.shell + " " + styles.featureGrid}>
          <div className={styles.featureIntro}>
            <p className={styles.kicker}>EVERYDAY FACILITIES</p>
            <h2>Practical essentials<br/><em>for daily living.</em></h2>
            <p>LP Savani PG lists facilities intended to support residents' everyday routines. Contact the management if you need to confirm how a particular facility is provided.</p>
            <Link href="/#amenities" className={styles.inlineLink}>See all details on the main website ↗</Link>
          </div>
          <div className={styles.featureList}>
            {facilities.map(([name, detail], i) => <article key={name}><span>0{i + 1}</span><div><h3>{name}</h3><p>{detail}</p></div></article>)}
          </div>
        </div>
        <div className={styles.shell}>
          <div className={styles.foodNote}><div><p className={styles.kicker}>OPTIONAL FOOD SERVICE</p><h3>Lunch and dinner option</h3><p>Optional food service is listed at a one-time charge of ₹1,500. It covers lunch and dinner only; breakfast is not available. Confirm the current arrangement with management.</p></div><strong>₹1,500 <small>one-time</small></strong></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell + " " + styles.audienceGrid}>
          <div><p className={styles.kicker}>WHO THIS PG IS FOR</p><h2>Shared accommodation<br/><em>for boys in Adajan.</em></h2></div>
          <div><p>LP Savani PG is intended for boys looking for shared accommodation in Adajan, Surat. The listed plans include 2-sharing and 3-sharing rooms, with AC and non-AC choices.</p><p>Whether you are studying or working nearby, speak with the management about room suitability, house rules, current vacancies and the terms of stay before making a decision.</p><WhatsAppButton>Ask about staying at LP Savani PG <span aria-hidden="true">↗</span></WhatsAppButton></div>
        </div>
      </section>

      <section className={styles.locationSection} id="location">
        <div className={styles.shell + " " + styles.locationGrid}>
          <div><p className={styles.kicker}>FIND LP SAVANI PG</p><h2>Located in<br/><em>Adajan, Surat.</em></h2><p className={styles.address}>{ADDRESS}</p><p>Contact the management to confirm directions and arrange a property visit before booking.</p><div className={styles.locationActions}><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Open directions in Google Maps ↗</a><a href={`tel:${PHONE_E164}`} className={styles.inlineLink}>Call {PHONE_DISPLAY}</a></div></div>
          <div className={styles.mapFrame}><iframe title="Map showing LP Savani PG public address in Adajan, Surat" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className={styles.section} id="faq">
        <div className={styles.shell + " " + styles.faqGrid}>
          <div><p className={styles.kicker}>GOOD TO KNOW</p><h2>Questions,<br/><em>answered.</em></h2><p>Need a detail that is not covered here? Contact the management directly.</p><WhatsAppButton>Ask a question on WhatsApp <span aria-hidden="true">↗</span></WhatsAppButton></div>
          <div className={styles.faqList}>{faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.shell + " " + styles.ctaInner}>
          <p className={styles.kicker}>YOUR NEXT STEP</p>
          <h2>Want to check a room<br/><em>before deciding?</em></h2>
          <p>Ask about current vacancies, confirm the charges and arrange a visit to LP Savani PG.</p>
          <div className={styles.actions}><WhatsAppButton>Enquire on WhatsApp <span aria-hidden="true">↗</span></WhatsAppButton><a className={styles.ctaPhone} href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell + " " + styles.footerInner}>
          <div><Link href="/" className={styles.brand}><span className={styles.brandMark}>LP</span><span>LP SAVANI <small>PAYING GUEST</small></span></Link><p>Boys shared accommodation in Adajan, Surat.</p></div>
          <div className={styles.footerLinks}><Link href="/">Home</Link><Link href="/#rooms">Rooms & pricing</Link><Link href="/#amenities">Amenities</Link><Link href="/#location">Main website location</Link></div>
          <div><strong>Contact</strong><a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a><span>{ADDRESS}</span></div>
        </div>
        <div className={styles.shell + " " + styles.footerBottom}><span>© {new Date().getFullYear()} LP Savani PG</span><Link href="/">Back to main website</Link></div>
      </footer>
    </main>
  );
}
