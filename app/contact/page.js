// app/contact/page.js
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiCheckCircle } from "react-icons/fi";

const { contact, business } = clientConfig;
const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;
const emails = business.email
  ? business.email.split(",").map((e) => e.trim())
  : [];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
    try {
      await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please WhatsApp us directly.");
    }
    setLoading(false);
  }

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

        /* --- Main Contact Layout --- */
        .contact-section {
          background: #ffffff;
          padding: 96px 0;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }

        /* --- Info Stack Elements --- */
        .contact-info h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 32px;
          color: var(--primary);
          letter-spacing: -0.3px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .contact-item:last-child { border-bottom: none; }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(212,175,55,0.12);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--secondary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, color 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.05);
          background: var(--secondary);
          color: #1A1A1A;
        }

        .contact-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary);
          opacity: 0.4;
          margin-bottom: 6px;
        }

        .contact-value { 
          font-weight: 600; 
          font-size: 1.05rem; 
          color: var(--primary);
          line-height: 1.5;
        }
        .contact-value a { transition: color 0.2s ease; text-decoration: none; color: inherit;}
        .contact-value a:hover { color: var(--secondary); }

        .email-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .email-list a {
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        /* --- Premium Container Form --- */
        .contact-form {
          background: linear-gradient(180deg, #ffffff 0%, var(--light-bg) 100%);
          border-radius: 24px;
          padding: 44px;
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.03);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
        }

        .contact-form h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 28px;
          color: var(--primary);
          letter-spacing: -0.3px;
        }

        .form-group { margin-bottom: 22px; }
        
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--primary);
          opacity: 0.8;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 14px 16px;
          border: 1.5px solid rgba(0,0,0,0.08);
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.95rem;
          background: #ffffff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
          color: var(--primary);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--secondary);
          box-shadow: 0 0 0 4px rgba(212,175,55,0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 140px;
        }

        .form-submit-btn { 
          width: 100%; 
          padding: 16px;
          background: var(--primary);
          color: var(--text-on-primary);
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s;
        }

        .form-submit-btn:hover {
          background: #1a3a3a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .form-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* Success Card UI */
        .form-success {
          text-align: center;
          padding: 48px 24px;
        }

        .form-success__icon { 
          font-size: 3.5rem; 
          color: var(--secondary);
          margin-bottom: 20px; 
          display: inline-flex;
        }

        .form-success h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--primary);
        }

        .form-success p { 
          opacity: 0.8; 
          font-size: 1rem;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto 32px;
          color: var(--body-text);
        }

        .success-whatsapp-btn {
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
          box-shadow: 0 8px 20px rgba(212,175,55,0.2);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .success-whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(212,175,55,0.35);
        }

        /* --- Interactive map framework --- */
        .map-container {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0,0,0,0.06);
          margin-top: 80px;
          border: 1px solid rgba(0,0,0,0.04);
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        
        .map-container iframe {
          display: block;
          border: 0;
          width: 100%;
          height: 420px;
        }

        @media (max-width: 992px) {
          .contact-layout { grid-template-columns: 1fr; gap: 56px; }
          .contact-section { padding: 64px 0; }
          .contact-form { padding: 32px 24px; }
          .map-container { margin-top: 56px; }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner__text-guard">
            <h1 className="page-banner__title">{contact.heading}</h1>
            <p className="page-banner__sub">{contact.subheading}</p>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            
            {/* CONTACT INFO */}
            <div className="contact-info">
              <h3>Get In Touch</h3>

              {contact.showWhatsApp && (
                <div className="contact-item" style={{ animationDelay: "0.05s" }}>
                  <div className="contact-icon"><FiMessageCircle /></div>
                  <div>
                    <div className="contact-label">WhatsApp</div>
                    <div className="contact-value">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">
                        {business.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {contact.showPhone && (
                <div className="contact-item" style={{ animationDelay: "0.1s" }}>
                  <div className="contact-icon"><FiPhone /></div>
                  <div>
                    <div className="contact-label">Phone Call</div>
                    <div className="contact-value">
                      <a href={`tel:${business.phone.replace(/\s/g, "")}`}>
                        {business.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {contact.showEmail && emails.length > 0 && (
                <div className="contact-item" style={{ animationDelay: "0.15s" }}>
                  <div className="contact-icon"><FiMail /></div>
                  <div>
                    <div className="contact-label">Email Address</div>
                    <div className="contact-value email-list">
                      {emails.map((email, idx) => (
                        <a key={idx} href={`mailto:${email}`}>
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {contact.showAddress && (
                <div className="contact-item" style={{ animationDelay: "0.2s" }}>
                  <div className="contact-icon"><FiMapPin /></div>
                  <div>
                    <div className="contact-label">Service Area</div>
                    <div className="contact-value">{business.address}</div>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT FORM */}
            {contact.showForm && (
              <div className="contact-form">
                {submitted ? (
                  <div className="form-success">
                    <div className="form-success__icon">
                      <FiCheckCircle />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>
                      We&apos;ll get back to you shortly. Need immediate help? Tap below to connect instantly.
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="success-whatsapp-btn"
                    >
                      <FiMessageCircle style={{ fontSize: "1.15rem" }} />
                      <span>WhatsApp Us Directly</span>
                    </a>
                  </div>
                ) : (
                  <>
                    <h3>Send us a message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone / WhatsApp</label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="071 000 0000"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email (optional)</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          placeholder="Tell us what you need..."
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="form-submit-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}
          </div>

          {/* GOOGLE MAP */}
          {contact.showMap && contact.mapEmbedUrl && (
            <div className="map-container">
              <iframe
                src={contact.mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business location"
              />
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}