// app/contact/page.js
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";

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

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: start;
        }
        .contact-info h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .contact-item:last-child { border-bottom: none; }
        .contact-icon {
          width: 46px;
          height: 46px;
          background: var(--secondary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .contact-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.55;
          margin-bottom: 4px;
        }
        .contact-value { font-weight: 600; font-size: 1rem; }
        .contact-value a { transition: color 0.2s; }
        .contact-value a:hover { color: var(--secondary); }

        /* Multiple emails */
        .email-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 12px;
        }
        .email-list a {
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        /* FORM */
        .contact-form {
          background: var(--light-bg);
          border-radius: 16px;
          padding: 36px;
        }
        .contact-form h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .form-group { margin-bottom: 18px; }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #e0e0e0;
          border-radius: 8px;
          font-family: var(--font);
          font-size: 0.95rem;
          background: #fff;
          transition: border-color 0.2s;
          outline: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--secondary);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-submit { width: 100%; padding: 14px; }
        .form-success {
          text-align: center;
          padding: 40px 24px;
        }
        .form-success__icon { font-size: 3rem; margin-bottom: 16px; }
        .form-success h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .form-success p { opacity: 0.7; }

        /* MAP */
        .map-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          margin-top: 64px;
        }
        .map-container iframe {
          display: block;
          border: 0;
          width: 100%;
          height: 380px;
        }

        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">{contact.heading}</h1>
          <p className="page-banner__sub">{contact.subheading}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* CONTACT INFO */}
            <div className="contact-info">
              <h3>Get In Touch</h3>

              {contact.showWhatsApp && (
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
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
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">
                      <a href={`tel:${business.phone.replace(/\s/g, "")}`}>
                        {business.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {contact.showEmail && emails.length > 0 && (
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-label">Email</div>
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
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Address</div>
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
                    <div className="form-success__icon">✅</div>
                    <h3>Message Sent!</h3>
                    <p>
                      We&apos;ll get back to you as soon as possible. Or
                      WhatsApp us for a faster reply.
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--primary"
                      style={{ marginTop: 20 }}
                    >
                      💬 WhatsApp Us
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
                        className="btn btn--primary form-submit"
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

          {/* GOOGLE MAP (disabled for now) */}
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