// components/Footer.js
import Link from "next/link";
import clientConfig from "@/client.config";

const { business, brand, social, pages } = clientConfig;
const whatsappLink = `https://wa.me/${business.whatsappNumber}`;

const emails = business.email
  ? business.email.split(",").map((e) => e.trim())
  : [];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #1A1A1A; /* Softer, premium dark gray instead of harsh #111 */
          color: rgba(255,255,255,0.7);
          padding: 80px 0 24px; /* Added breathing room at the top */
          font-size: 0.95rem;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr; /* Adjusted column weighting */
          gap: 64px;
          margin-bottom: 60px;
        }
        .footer__brand-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .footer__brand-name span { color: var(--secondary); }
        .footer__tagline {
          opacity: 0.8;
          line-height: 1.7;
          margin-bottom: 24px;
          font-size: 0.95rem;
          max-width: 350px;
        }
        .footer__heading {
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .footer__links { list-style: none; }
        .footer__links li { margin-bottom: 14px; }
        .footer__links a { transition: color 0.2s, padding-left 0.2s; }
        .footer__links a:hover { color: var(--secondary); padding-left: 4px; } /* Tiny nudge on hover */
        
        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .footer__contact-icon { font-size: 1.1rem; flex-shrink: 0; color: var(--secondary); } /* Icons match accent color */
        .footer__email-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer__email-list a {
          word-break: break-all;
          transition: color 0.2s;
        }
        .footer__email-list a:hover { color: var(--secondary); }
        .footer__social {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        .footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          font-size: 0.95rem;
          transition: background 0.3s, transform 0.3s;
        }
        .footer__social a:hover { 
          background: var(--secondary); 
          color: #fff;
          transform: translateY(-3px);
        }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.85rem;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .footer__grid { grid-template-columns: 1fr; gap: 48px; }
          .footer { padding: 60px 0 24px; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <div className="footer__brand-name">
                {business.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span>{business.name.split(" ").slice(-1)}</span>
              </div>
              <p className="footer__tagline">{clientConfig.business.tagline}</p>
              {(social.facebook || social.instagram || social.tiktok || social.twitter) && (
                <div className="footer__social">
                  {social.facebook  && <a href={social.facebook}  target="_blank" rel="noreferrer">f</a>}
                  {social.instagram && <a href={social.instagram} target="_blank" rel="noreferrer">ig</a>}
                  {social.tiktok    && <a href={social.tiktok}    target="_blank" rel="noreferrer">tt</a>}
                  {social.twitter   && <a href={social.twitter}   target="_blank" rel="noreferrer">𝕏</a>}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <p className="footer__heading">Quick Links</p>
              <ul className="footer__links">
                {pages.home     && <li><Link href="/">Home</Link></li>}
                {pages.about    && <li><Link href="/about">About</Link></li>}
                {pages.services && <li><Link href="/services">Services</Link></li>}
                {pages.gallery  && <li><Link href="/gallery">Gallery</Link></li>}
                {pages.contact  && <li><Link href="/contact">Contact</Link></li>}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="footer__heading">Contact</p>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">💬</span>
                <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <div className="footer__email-list">
                  {emails.map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`}>{email}</a>
                  ))}
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>{business.address}</span>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
            <span>Website by Abdul Web Design</span>
          </div>
        </div>
      </footer>
    </>
  );
}