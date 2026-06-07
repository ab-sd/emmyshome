// app/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import clientConfig from "@/client.config";

const { business, pages, home, about, services } = clientConfig;
const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi%2C%20I%27d%20like%20a%20quote.`;
const ctaLink = home.ctaLink || whatsappLink;

export default function HomePage() {
  return (
    <>
      <style>{`
        /* ===== ANIMATIONS ===== */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== HERO ===== */
        .hero {
          position: relative;
          background: ${home.heroImage ? `url(${home.heroImage}) center/cover no-repeat` : "var(--primary)"};
          color: var(--text-on-primary);
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          overflow: hidden;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0, ${home.heroOverlayOpacity || 0.65}); 
          z-index: 1;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 750px;
          padding-bottom: 60px; 
        }
        .hero__title {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          white-space: pre-line;
          animation: fadeUp 0.8s ease-out forwards;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 1);
        }
        .hero__subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.6;
          animation: fadeUp 0.8s ease-out 0.2s forwards;
          opacity: 0; 
          color: #ffffff;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
        }
        .hero__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--secondary);
          color: #fff;
          padding: 18px 40px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
          animation: fadeUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .hero__cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.6);
        }

        /* ===== FLOATING STATS BAR ===== */
        .stats {
          padding: 0 24px;
          margin-top: -60px; 
          position: relative;
          z-index: 10;
        }
        .stats__inner {
          background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
          padding: 48px;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(230, 126, 34, 0.35); 
          max-width: 1200px;
          margin: 0 auto;
        }
        .stats__grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 40px;
          text-align: center;
        }
        .stat__number {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff; 
          line-height: 1.2;
        }
        .stat__label {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff; 
          opacity: 0.95;
          margin-top: 8px;
          letter-spacing: 0.5px;
        }

        /* ===== SERVICES PREVIEW (BENTO GRID) ===== */
        .services-preview {
          padding: 120px 0 100px; 
          background: #fcfcfc; 
        }
        .section__heading {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--primary);
        }
        .section__subheading {
          text-align: center;
          font-size: 1.15rem;
          color: #666;
          margin-bottom: 64px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* The Bento Grid Container */
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 320px);
          gap: 24px;
          margin-bottom: 64px;
        }

        /* Dynamic Sizing for exactly 4 items */
        .preview-card:nth-child(1) { grid-column: span 2; } /* Top Left: Wide */
        .preview-card:nth-child(2) { grid-column: span 1; } /* Top Right: Square */
        .preview-card:nth-child(3) { grid-column: span 1; } /* Bottom Left: Square */
        .preview-card:nth-child(4) { grid-column: span 2; } /* Bottom Right: Wide */

        /* Card Styling */
        .preview-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          background-color: #1a1a1a; 
          transition: transform 0.4s ease;
        }
        .preview-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        /* Force image to fill container without weird cropping */
        .preview-card__img-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
          transition: transform 0.7s ease;
        }
        .preview-card:hover .preview-card__img-bg {
          transform: scale(1.08); /* Slow, premium zoom */
        }

        /* Dark Overlay so text is always readable */
        .preview-card__overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 100%);
        }
        .preview-card:hover .preview-card__overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(212, 175, 55, 0.2) 100%);
        }

        /* Text Content */
        .preview-card__content {
          position: relative;
          z-index: 3;
          color: #ffffff;
        }
        .preview-card__title { 
          font-size: 1.8rem; 
          font-weight: 800; 
          margin-bottom: 8px; 
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8); /* Bold shadow */
        }
        .preview-card__desc { 
          font-size: 1rem; 
          color: rgba(255, 255, 255, 0.9); /* Lighter, more readable grey */
          line-height: 1.5;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        }
        .preview-card__icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
          color: var(--secondary); /* Gold icon */
        }

        .services-preview__cta { text-align: center; }

        /* Mobile Layout */
        @media (max-width: 900px) {
          .preview-grid { 
            grid-template-columns: 1fr; 
            grid-auto-rows: 300px; 
          }
          .preview-card { grid-column: span 1 !important; }
        }

        /* ===== WHY CHOOSE US ===== */
        .why-us { 
          padding: 100px 0; 
          background: #fff; 
        }
        .why-us__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .why-us__img-wrapper {
          position: relative;
        }
        /* Creates an offset "frame" behind the image for a modern look */
        .why-us__img-wrapper::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(230, 126, 34, 0.05));
          z-index: 0;
        }
        .why-us__img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          position: relative;
          z-index: 1;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .why-us__checklist {
          list-style: none;
          margin-top: 40px;
          padding-left: 0;
        }
        .why-us__checklist li {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          font-size: 1.1rem;
          color: #444;
          line-height: 1.5;
        }
        .why-us__checklist li::before {
          content: "✔"; 
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(243, 156, 18, 0.15);
          border-radius: 50%;
          font-weight: 700;
          color: #E67E22;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ===== BOTTOM CTA ===== */
        .bottom-cta {
          background: linear-gradient(135deg, #111 0%, var(--primary) 100%);
          color: #fff;
          padding: 120px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bottom-cta h2 { 
          font-size: 2.8rem; 
          font-weight: 800; 
          margin-bottom: 24px; 
          position: relative;
          z-index: 2;
        }
        .bottom-cta p { 
          font-size: 1.2rem; 
          color: #ccc; 
          margin-bottom: 48px; 
          max-width: 600px; 
          margin-left: auto; 
          margin-right: auto;
          position: relative;
          z-index: 2;
        }
        .bottom-cta__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #F39C12;
          color: #fff;
          padding: 18px 48px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .bottom-cta__btn:hover {
          transform: scale(1.05);
          background: #E67E22;
          box-shadow: 0 10px 30px rgba(230, 126, 34, 0.4);
        }

        @media (max-width: 900px) {
          .why-us__inner { grid-template-columns: 1fr; gap: 56px; }
        }
        @media (max-width: 768px) {
          .hero { min-height: 80vh; }
          .stats { margin-top: -30px; }
          .stats__inner { padding: 32px 24px; }
          .section__heading { font-size: 2rem; }
          .bottom-cta h2 { font-size: 2.2rem; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{home.heroTitle}</h1>
          <p className="hero__subtitle">{home.heroSubtitle}</p>
          <a href={ctaLink} target="_blank" rel="noreferrer" className="hero__cta">
            💬 {home.ctaText}
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      {home.showStats && home.stats.length > 0 && (
        <div className="stats">
          <div className="stats__inner">  
            <div className="stats__grid">
              {home.stats.map((s, i) => (
                <div key={i}>
                  <div className="stat__number">{s.number}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SERVICES PREVIEW */}
      {pages.services && services.items.length > 0 && (
        <section className="services-preview">
          <div className="container">
            <h2 className="section__heading">What We Offer</h2>
            <p className="section__subheading">
              A few of our most popular services
            </p>

            <div className="preview-grid">
              {services.items.slice(0, 4).map((s, i) => (
                <div key={i} className="preview-card">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="preview-card__img-bg"
                    />
                  ) : (
                    <div className="preview-card__img-bg" />
                  )}

                  <div className="preview-card__overlay" />

                  <div className="preview-card__content">
                    {s.icon && (
                      <div className="preview-card__icon">
                        {s.icon}
                      </div>
                    )}

                    <h3 className="preview-card__title">
                      {s.title}
                    </h3>

                    <p className="preview-card__desc">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-preview__cta">
              <Link
                href="/services"
                className="btn btn--primary"
                style={{
                  padding: "16px 40px",
                  fontSize: "1.1rem",
                }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      {pages.about && about.paragraphs.length > 0 && (
        <section className="why-us">
          <div className="container">
            <div className="why-us__inner">
              <div>
                <h2 className="section__heading" style={{ textAlign: "left" }}>Why Choose Us</h2>
                <p style={{ marginTop: 16, fontSize: "1.1rem", color: "#555", lineHeight: 1.7 }}>
                  {about.paragraphs[0]}
                </p>
                {about.showFeatures && about.features.length > 0 && (
                  <ul className="why-us__checklist">
                    {about.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="why-us__img-wrapper">
                {about.image ? (
                  <img src={about.image} alt={about.imageAlt} className="why-us__img" />
                ) : (
                  <div style={{ background: "var(--light-bg)", height: 400, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <span style={{ opacity: 0.3 }}>Photo coming soon</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <div className="container">
          <h2>Ready for a cleaner, easier home?</h2>
          <p>Contact us today for a free chat. We’re available 24/7 across your area.</p>
          <a href={ctaLink} target="_blank" rel="noreferrer" className="bottom-cta__btn">
            💬 {home.ctaText}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}