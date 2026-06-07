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
          background: rgba(0,0,0, ${home.heroOverlayOpacity || 0.55});
          z-index: 1;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        .hero__title {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        .hero__subtitle {
          font-size: 1.1rem;
          opacity: 0.85;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero__cta {
          display: inline-block;
          background: var(--secondary);
          color: #fff;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          transition: background 0.2s;
        }
        .hero__cta:hover {
          background: var(--primary);
        }

        /* ===== STATS BAR ===== */
        .stats {
          background: #fff;
          padding: 48px 0;
          border-bottom: 1px solid #eee;
        }
        .stats__grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 48px;
          text-align: center;
        }
        .stat__number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
        }
        .stat__label {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-top: 4px;
        }

        /* ===== SERVICES PREVIEW ===== */
        .services-preview {
          padding: 80px 0;
          background: var(--light-bg);
        }
        .section__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .section__subheading {
          text-align: center;
          opacity: 0.6;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .preview-card {
          background: #fff;
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          text-align: center;
          transition: transform 0.2s;
        }
        .preview-card:hover { transform: translateY(-4px); }
        .preview-card__icon { font-size: 2rem; margin-bottom: 16px; }

        /* --- Fixed: service image now fits without cropping --- */
        .preview-card__img {
          width: 100%;
          height: 140px;
          object-fit: contain;
          background: #f4f4f4;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .preview-card__title { font-weight: 700; margin-bottom: 8px; }
        .preview-card__desc { font-size: 0.9rem; opacity: 0.65; line-height: 1.5; }

        .services-preview__cta {
          text-align: center;
        }

        /* ===== WHY CHOOSE US ===== */
        .why-us {
          padding: 80px 0;
          background: #fff;
        }
        .why-us__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .why-us__img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .why-us__checklist {
          list-style: none;
          margin-top: 24px;
          padding-left: 0;
        }
        .why-us__checklist li {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 0.95rem;
        }
        .why-us__checklist li::before {
          content: "•";
          font-weight: 700;
          color: var(--secondary);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* ===== BOTTOM CTA ===== */
        .bottom-cta {
          background: var(--primary);
          color: var(--text-on-primary);
          padding: 80px 24px;
          text-align: center;
        }
        .bottom-cta h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .bottom-cta p {
          opacity: 0.8;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .why-us__inner { grid-template-columns: 1fr; }
          .hero { min-height: 70vh; }
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
          <div className="container">
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

      {/* SERVICES PREVIEW – images now use .preview-card__img */}
      {pages.services && services.items.length > 0 && (
        <section className="services-preview">
          <div className="container">
            <h2 className="section__heading">What We Offer</h2>
            <p className="section__subheading">A few of our most popular services</p>
            <div className="preview-grid">
              {services.items.slice(0, 4).map((s, i) => (
                <div key={i} className="preview-card">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="preview-card__img"
                    />
                  ) : (
                    s.icon && <div className="preview-card__icon">{s.icon}</div>
                  )}
                  <div className="preview-card__title">{s.title}</div>
                  <p className="preview-card__desc">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="services-preview__cta">
              <Link href="/services" className="btn btn--primary">
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
                <p style={{ marginTop: 16, opacity: 0.7 }}>
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
              <div>
                {about.image ? (
                  <img src={about.image} alt={about.imageAlt} className="why-us__img" />
                ) : (
                  <div style={{ background: "var(--light-bg)", height: 300, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
          <p>Contact us today for a free chat. We’re available 24/7 across Cape Town.</p>
          <a href={ctaLink} target="_blank" rel="noreferrer" className="btn btn--primary">
            💬 {home.ctaText}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}