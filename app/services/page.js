// app/services/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";
import { FiMessageSquare } from "react-icons/fi";

const { services, business } = clientConfig;
const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;

export default function ServicesPage() {
  const ctaLink = services.ctaLink || whatsappLink;

  return (
    <>
      <style>{`
        /* --- Premium Animations --- */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- Page Hero with Contrast Guard --- */
        .page-banner {
          position: relative;
          background: #112A2A; 
          background: linear-gradient(135deg, #112A2A 0%, #1A3A3A 100%);
          color: #FFFFFF !important;
          padding: 88px 0 72px;
          text-align: center;
          overflow: hidden;
        }
        
        .page-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .page-banner__text-guard {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 32px 40px;
          border-radius: 24px;
          display: inline-block;
          max-width: 750px;
          width: 90%;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 2;
        }

        .page-banner__title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
          color: #FFFFFF !important;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .page-banner__sub {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1.1rem;
          line-height: 1.5;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* --- Services Grid Frame --- */
        .services-section {
          background: var(--light-bg);
          padding: 96px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        /* --- Premium Cards --- */
        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          border: 1px solid rgba(0,0,0,0.04);
          border-top: 4px solid var(--secondary);
          display: flex;
          flex-direction: column;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: rgba(212,175,55,0.2);
        }

        .service-card__img-container {
          width: 100%;
          height: 180px;
          background: linear-gradient(135deg, rgba(244,244,244,0.6) 0%, rgba(230,235,235,0.6) 100%);
          border-radius: 12px;
          margin-bottom: 20px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .service-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Beautiful bleed instead of boxed padding holes */
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .service-card__img {
          transform: scale(1.05);
        }

        .service-card__icon {
          font-size: 2.8rem;
          margin-bottom: 20px;
          display: inline-block;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));
        }

        .service-card__title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--primary);
          letter-spacing: -0.3px;
        }

        .service-card__desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--body-text);
          opacity: 0.8;
          margin: 0;
        }

        /* --- Elegant Immersive CTA --- */
        .services-cta-box {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 80px 40px;
          background: linear-gradient(135deg, var(--primary) 0%, #1a3a3a 100%);
          color: var(--text-on-primary);
          border-radius: 24px;
          margin-top: 80px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .services-cta-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at bottom left, rgba(212,175,55,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .services-cta-box__content {
          position: relative;
          z-index: 1;
          max-width: 580px;
          margin: 0 auto;
        }

        .services-cta-box h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
          color: #FFF;
        }

        .services-cta-box p { 
          opacity: 0.85; 
          margin-bottom: 32px; 
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .services-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--secondary);
          color: #1A1A1A;
          padding: 14px 32px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(212,175,55,0.25);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .services-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(212,175,55,0.4);
        }

        .services-cta-icon {
          font-size: 1.15rem;
        }

        @media (max-width: 768px) {
          .services-section { padding: 64px 0; }
          .services-cta-box { padding: 56px 24px; margin-top: 60px; }
          .page-banner__text-guard { padding: 24px 20px; }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner__text-guard">
            <h1 className="page-banner__title">{services.heading}</h1>
            <p className="page-banner__sub">{services.subheading}</p>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.items.map((s, i) => (
              <div key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                {s.image ? (
                  <div className="service-card__img-container">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="service-card__img"
                    />
                  </div>
                ) : (
                  s.icon && <div className="service-card__icon">{s.icon}</div>
                )}
                <div className="service-card__title">{s.title}</div>
                <p className="service-card__desc">{s.description}</p>
              </div>
            ))}
          </div>

          {services.showCTA && (
            <div className="services-cta-box">
              <div className="services-cta-box__content">
                <h3>{services.ctaHeading}</h3>
                <p>Get in touch and we&apos;ll discuss exactly what you need to support your home.</p>
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="services-cta-btn"
                >
                  <FiMessageSquare className="services-cta-icon" />
                  <span>{services.ctaText}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}