// app/services/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";

const { services, business } = clientConfig;
const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;

export default function ServicesPage() {
  const ctaLink = services.ctaLink || whatsappLink;

  return (
    <>
      <style>{`
        .page-banner {
          background: var(--primary);
          color: var(--text-on-primary);
          padding: 64px 0 48px;
          text-align: center;
        }
        .page-banner__title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 10px;
        }
        .page-banner__sub { opacity: 0.7; font-size: 1rem; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }
        .service-card {
          background: #fff;
          border-radius: 14px;
          padding: 36px 28px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          border-top: 4px solid var(--secondary);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.12);
        }
        .service-card__icon {
          font-size: 2.6rem;
          margin-bottom: 16px;
        }
        /* ----- CHANGED: image now fits without cropping ----- */
        .service-card__img {
          width: 100%;
          height: 160px;                     /* keep a fixed box for consistency */
          object-fit: contain;               /* show whole image, no cropping */
          background: #f4f4f4;               /* subtle background behind the image */
          border-radius: 8px;
          margin-bottom: 16px;
        }
        .service-card__title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--primary);
        }
        .service-card__desc {
          font-size: 0.92rem;
          line-height: 1.7;
          opacity: 0.7;
        }

        .services-cta-box {
          text-align: center;
          padding: 64px 24px;
          background: var(--primary);
          color: var(--text-on-primary);
          border-radius: 16px;
          margin-top: 64px;
        }
        .services-cta-box h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .services-cta-box p { opacity: 0.75; margin-bottom: 28px; }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">{services.heading}</h1>
          <p className="page-banner__sub">{services.subheading}</p>
        </div>
      </div>

      <section className="section section--light">
        <div className="container">
          <div className="services-grid">
            {services.items.map((s, i) => (
              <div key={i} className="service-card">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="service-card__img"
                  />
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
              <h3>{services.ctaHeading}</h3>
              <p>Get in touch and we&apos;ll discuss what you need.</p>
              <a
                href={ctaLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                💬 {services.ctaText}
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}