import { ArrowDown, ArrowRight, BedDouble, Check, ChevronDown, Clock3, MapPin, ShieldCheck, Sparkles, Wifi, Zap, Utensils, Menu, Phone, Star, Users, Building2, WashingMachine, CookingPot } from "lucide-react";
import { amenities, rooms, site } from "@/lib/site";
import WhatsAppLink from "@/components/WhatsAppLink";
import RoomImage from "@/components/RoomImage";
import ReviewsSection from "@/components/ReviewsSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const iconMap = { wifi: Wifi, shield: ShieldCheck, zap: Zap, bed: BedDouble, "map-pin": MapPin, utensils: Utensils, "washing-machine": WashingMachine, "cooking-pot": CookingPot } as const;
const faqs = [
  { q: "Where is LP Savani PG located?", a: "We are located near LP Savani Circle in Adajan, Surat. Contact us on WhatsApp for the exact address and directions." },
  { q: "What room options are available?", a: "We have 2-sharing and 3-sharing options, with AC and non-AC plans. Availability can change, so message us for current vacancies." },
  { q: "What is the monthly rent?", a: "Listed plans start at ₹5,500 per month. The exact rent depends on room type and availability. Confirm the final amount before booking." },
  { q: "Is food included in the rent?", a: "Optional food service is available for a one-time charge of ₹1,500. It includes lunch and dinner only. Breakfast is not available." },
  { q: "Can I visit the PG before booking?", a: "Yes. Message us to arrange a visit and check the room before making your decision." },
  { q: "Who can enquire?", a: "Students and working professionals can contact us to discuss room availability and suitability." },
];

export default function Home() {
  return <main>
    <div className="announcement"><span className="announcement-dot" /> Rooms near LP Savani Circle, Adajan <span className="announcement-sep">·</span> Enquire for current availability</div>
    <header className="nav-wrap"><nav className="nav container">
      <a href="#home" className="brand"><span className="brand-mark">LP</span><span>LP SAVANI <small>PAYING GUEST</small></span></a>
      <div className="nav-links"><a href="#rooms">Rooms & Pricing</a><a href="#amenities">Amenities</a><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#faq">FAQs</a></div>
      <WhatsAppLink className="button button-dark nav-cta">Enquire now <ArrowRight size={16}/></WhatsAppLink>
      <a className="mobile-menu" href="#rooms" aria-label="Jump to rooms"><Menu size={23}/></a>
    </nav></header>

    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line"/> COMFORTABLE · AFFORDABLE · STUDENT-FRIENDLY</div>
        <h1>A place to stay.<br/><em>A space to grow.</em></h1>
        <p className="hero-lead">Find comfortable shared accommodation near LP Savani Circle, Adajan. A convenient place for students and working professionals to feel settled.</p>
        <div className="hero-actions"><WhatsAppLink className="button button-orange" message="Hi, I am interested in staying at LP Savani PG. Please share current room availability.">Check room availability <ArrowRight size={17}/></WhatsAppLink><a className="text-link" href="#rooms">Explore room options <ArrowDown size={16}/></a></div>
        <div className="hero-proof"><div className="proof-icon"><MapPin size={18}/></div><div><strong>LP Savani Circle, Adajan</strong><span>Surat, Gujarat</span></div><div className="proof-divider"/><div className="proof-icon"><Users size={18}/></div><div><strong>For everyday living</strong><span>Students & professionals</span></div></div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame"><RoomImage src="/images/hero-room.png" alt="LP Savani PG building exterior" className="hero-image"/><div className="image-label"><span className="label-dot"/> YOUR SPACE IN ADAJAN</div></div>
        <div className="floating-price"><span>MONTHLY RENT FROM</span><strong>₹5,500</strong><small>Room plans available</small></div>
        <div className="hero-side-note">A little more comfort<br/>in your everyday routine.</div>
      </div>
    </section>

    <section className="trust-strip"><div className="container trust-inner"><div><MapPin/><span>Convenient Adajan location</span></div><div><BedDouble/><span>Multiple room configurations</span></div><div><ShieldCheck/><span>Practical everyday amenities</span></div><div><WhatsAppIcon size={22} className="whatsapp-brand-icon"/><span>Easy WhatsApp enquiries</span></div></div></section>

    <section className="section container why-section" id="about"><div className="section-intro"><div className="eyebrow"><span className="eyebrow-line"/> THE LP SAVANI PG EXPERIENCE</div><h2>Make room for<br/><em>what matters.</em></h2></div><div className="why-content"><p className="section-lead">A good place to stay should make everyday life simpler. LP Savani PG offers shared room options in Adajan, with practical amenities and plans for different budgets.</p><div className="benefit-grid"><article><span className="benefit-number">01</span><h3>Room for your routine</h3><p>Choose a sharing arrangement that fits your comfort and budget.</p></article><article><span className="benefit-number">02</span><h3>Stay connected</h3><p>Wi-Fi and useful everyday facilities for study and work.</p></article><article><span className="benefit-number">03</span><h3>Location that works</h3><p>Stay around the LP Savani Circle area in Adajan, Surat.</p></article></div></div></section>

    <section className="rooms-section" id="rooms"><div className="container"><div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-line"/> FIND YOUR ROOM</div><h2>Room options &<br/><em>monthly pricing.</em></h2></div><p>Choose from AC and non-AC sharing options. Message us to confirm current availability and final charges.</p></div>
      <div className="room-grid">{rooms.map((room, i) => <article className={`room-card ${i === 1 ? "room-card-featured" : ""}`} key={room.name}><div className="room-photo-wrap"><RoomImage src={room.image} alt={`${room.name} at LP Savani PG`} className="room-photo"/><span className="room-tag">{room.tag}</span></div><div className="room-card-body"><div className="room-title-row"><h3>{room.name}</h3><span className="room-index">0{i + 1}</span></div><p>{room.detail}</p><div className="room-price"><strong>₹{room.price.toLocaleString("en-IN")}</strong><span>/ person / month*</span></div><WhatsAppLink className="room-link" message={`Hi, I want to enquire about the ${room.name} option at LP Savani PG. Is it currently available?`}>Enquire about this room <ArrowRight size={16}/></WhatsAppLink></div></article>)}</div>
      <p className="pricing-note">*Starting/listed monthly rents. Final rent, deposit, electricity, food and other charges must be confirmed with management before booking.</p>
    </div></section>

    <section className="section container amenities-section" id="amenities"><div className="amenities-heading"><div className="eyebrow"><span className="eyebrow-line"/> THE EVERYDAY ESSENTIALS</div><h2>Thoughtful basics.<br/><em>Comfortable living.</em></h2><p>Laundry facilities and access to a fully equipped kitchen are included in the rent. Optional food service is available for ₹1,500 one-time, covering lunch and dinner only. Breakfast is not available.</p></div><div className="amenities-grid">{amenities.map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <article className="amenity" key={item.title}><div className="amenity-icon"><Icon size={21}/></div><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div></section>

    <section className="gallery-section" id="gallery"><div className="container"><div className="section-heading-row gallery-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> TAKE A CLOSER LOOK</div><h2>Your next place<br/><em>starts here.</em></h2></div><p>Take a look at the rooms and shared spaces. Explore actual photographs of the rooms and shared spaces at the property.</p></div><div className="gallery-grid"><div className="gallery-main"><RoomImage src="/images/gallery-room-1.png" alt="LP Savani PG bedroom"/><span>ROOMS</span></div><div className="gallery-small"><RoomImage src="/images/gallery-room-2.jpeg" alt="LP Savani PG kitchen"/><span>SHARED LIVING</span></div><div className="gallery-small"><RoomImage src="/images/room-3-sharing-ac.png" alt="LP Savani PG three-sharing AC room"/><span>AC ROOM</span></div></div></div></section>

    <section className="location-section" id="location"><div className="container location-layout"><div className="location-copy"><div className="eyebrow"><span className="eyebrow-line"/> THE NEIGHBOURHOOD</div><h2>Live close to<br/><em>your everyday.</em></h2><p>Located near LP Savani Circle in Adajan, Surat. Get in touch for the exact property location, directions and to arrange a visit.</p><div className="location-address"><div className="location-pin"><MapPin size={22}/></div><div><strong>LP Savani PG</strong><span>{site.location}</span></div></div><WhatsAppLink className="button button-dark" message="Hi, please share the exact location of LP Savani PG and directions for a visit.">Get directions on WhatsApp <ArrowRight size={17}/></WhatsAppLink></div><div className="map-card">
        <iframe
          src="https://www.google.com/maps?q=21.2057925,72.7773745&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="LP Savani PG location"
        />
      </div></div></section>

    <ReviewsSection />

    <section className="faq-section" id="faq"><div className="container faq-layout"><div><div className="eyebrow"><span className="eyebrow-line"/> GOOD TO KNOW</div><h2>Questions?<br/><em>Answered.</em></h2><p className="faq-intro">A few details to help you make your decision. If you need anything else, just message us.</p><WhatsAppLink className="text-link" message="Hi, I have a question about LP Savani PG.">Ask us on WhatsApp <ArrowRight size={16}/></WhatsAppLink></div><div className="faq-list">{faqs.map((faq, i) => <details className="faq-item" key={faq.q} open={i === 0}><summary>{faq.q}<ChevronDown size={18}/></summary><p>{faq.a}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><div className="cta-orbit orbit-one"/><div className="cta-orbit orbit-two"/><div className="eyebrow"><span className="eyebrow-line"/> YOUR NEXT CHAPTER STARTS HERE</div><h2>Found a place<br/>that feels <em>right?</em></h2><p>Ask about room availability, get the details and plan a visit to LP Savani PG.</p><WhatsAppLink className="button button-light" message="Hi, I am interested in booking a room at LP Savani PG. Please guide me with availability and a visit.">Talk to us on WhatsApp <ArrowRight size={17}/></WhatsAppLink><span className="cta-footnote">No pressure. Come see the place before you decide.</span></div></section>

    <footer className="footer"><div className="container"><div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-mark">LP</span><span>LP SAVANI <small>PAYING GUEST</small></span></a><p>Comfortable. Affordable. Student-friendly.<br/>A convenient shared stay in Adajan, Surat.</p><div className="footer-contact"><span>ENQUIRIES & VISITS</span><WhatsAppLink className="footer-whatsapp">Chat with us <ArrowRight size={15}/></WhatsAppLink></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LP Savani PG. All rights reserved.</span><div><a href="#rooms">Rooms</a><a href="#amenities">Amenities</a><a href="#faq">FAQs</a></div><span>Adajan, Surat, Gujarat</span></div></div></footer>
    <WhatsAppLink className="floating-whatsapp" message="Hi, I want to enquire about LP Savani PG room availability."><WhatsAppIcon size={30} /> <span>WhatsApp enquiry</span></WhatsAppLink>
  </main>;
}
