// app/about/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";
import { FiCheckSquare } from "react-icons/fi";

const { about, business } = clientConfig;

export default function AboutPage() {
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* --- Page Hero with High Contrast Protection --- */
        .page-banner {
          position: relative;
          background: #112A2A; /* Solid dark base to combat light backgrounds */
          background: linear-gradient(135deg, #112A2A 0%, #1A3A3A 100%);
          color: #FFFFFF !important; /* Force pristine white text */
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

        /* Dark overlay card to isolate text from any surrounding bright light leakages */
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
        }

        .page-banner__content {
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

        /* --- About Content Layout --- */
        .about-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 96px 0;
        }

        /* --- Premium Image Framework --- */
        .about-image-wrapper {
          position: relative;
          padding: 12px;
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .about-image-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid var(--secondary);
          border-radius: 24px;
          opacity: 0.3;
          transform: translate(-12px, 12px);
          z-index: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-wrapper:hover::before {
          transform: translate(-6px, 6px);
        }

        .about-image {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          object-fit: cover;
          max-height: 480px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.02);
        }

        .about-placeholder {
          background: var(--light-bg);
          border-radius: 16px;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--body-text);
          opacity: 0.6;
          border: 2px dashed rgba(0,0,0,0.06);
        }

        /* --- Content Blocks --- */
        .about-content {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        .about-content__badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--secondary);
          margin-bottom: 12px;
        }

        .about-content h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 24px;
          color: var(--primary);
          letter-spacing: -0.5px;
        }

        .about-content p {
          margin-bottom: 20px;
          line-height: 1.75;
          opacity: 0.85;
          font-size: 1.05rem;
        }

        /* --- Premium Features Grid --- */
        .features-section {
          background: linear-gradient(180deg, #ffffff 0%, var(--light-bg) 100%);
          border-radius: 24px;
          padding: 64px;
          margin-top: 40px;
          margin-bottom: 96px;
          border: 1px solid rgba(0,0,0,0.02);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .features-section__heading {
          font-size: 1.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 40px;
          color: var(--primary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .feature-item {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          font-weight: 600;
          color: var(--primary);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          border-color: rgba(212,175,55,0.3);
        }

        .feature-icon {
          color: var(--secondary);
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* --- Responsive Shifts --- */
        @media (max-width: 992px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 64px 0;
          }
          .about-image-wrapper {
            max-width: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 40px 24px;
          }
          .features-section__heading {
            margin-bottom: 32px;
          }
          .page-banner__text-guard {
            padding: 24px 20px;
          }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container page-banner__content">
          <div className="page-banner__text-guard">
            <h1 className="page-banner__title">{about.heading}</h1>
            <p className="page-banner__sub">{about.subheading}</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-image-wrapper">
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
              <span className="about-content__badge">Our Identity</span>
              <h2>Who We Are</h2>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {about.showFeatures && about.features.length > 0 && (
            <div className="features-section">
              <h2 className="features-section__heading">Why Choose Emmy Home Helpers</h2>
              <div className="features-grid">
                {about.features.map((f, i) => (
                  <div key={i} className="feature-item">
                    <FiCheckSquare className="feature-icon" />
                    <span>{f}</span>
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