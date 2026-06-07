// app/about/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";

const { about, business } = clientConfig;

export default function AboutPage() {
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
        .page-banner__sub {
          opacity: 0.7;
          font-size: 1rem;
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          padding: 80px 0;
        }
        .about-image {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          object-fit: cover;
          max-height: 450px;
        }
        .about-placeholder {
          background: var(--light-bg);
          border-radius: 16px;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--body-text);
          opacity: 0.5;
        }
        .about-content h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .about-content p {
          margin-bottom: 16px;
          line-height: 1.7;
          opacity: 0.8;
        }

        /* Features section with light background */
        .features-section {
          background: var(--light-bg);
          border-radius: 16px;
          padding: 48px;
          margin-top: 60px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .feature-item {
          background: #fff;
          border-radius: 10px;
          padding: 20px 24px;
          font-weight: 500;
          display: flex;
          align-items: baseline;
          gap: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .feature-item::before {
          content: "•";
          color: var(--secondary);
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 1;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr;
          }
          .features-section {
            padding: 32px 24px;
          }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">{about.heading}</h1>
          <p className="page-banner__sub">{about.subheading}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div>
              {about.image ? (
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  className="about-image"
                />
              ) : (
                <div className="about-placeholder">Photo coming soon</div>
              )}
            </div>
            <div className="about-content">
              <h2>Who We Are</h2>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {about.showFeatures && about.features.length > 0 && (
            <div className="features-section">
              <h2 style={{ marginBottom: 32 }}>Why Choose Emmy Home Helpers</h2>
              <div className="features-grid">
                {about.features.map((f, i) => (
                  <div key={i} className="feature-item">
                    {f}
                  </div>
                ))}
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