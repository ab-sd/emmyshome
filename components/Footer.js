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
          background: #111;                    /* ← changed to black */
          color: rgba(255,255,255,0.75);
          padding: 56px 0 24px;
          font-size: 0.9rem;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }
        .footer__brand-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }
        .footer__brand-name span { color: var(--secondary); }
        .footer__tagline {
          opacity: 0.6;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.88rem;
        }
        .footer__heading {
          color: #fff;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .footer__links { list-style: none; }
        .footer__links li { margin-bottom: 10px; }
        .footer__links a { transition: color 0.2s; }
        .footer__links a:hover { color: var(--secondary); }
        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }
        .footer__contact-icon { font-size: 1rem; margin-top: 2px; flex-shrink: 0; }
        .footer__email-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 12px;
        }
        .footer__email-list a {
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        .footer__social {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          font-size: 0.85rem;
          transition: background 0.2s;
        }
        .footer__social a:hover { background: var(--secondary); }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.8rem;
          opacity: 0.5;
        }
        @media (max-width: 768px) {
          .footer__grid { grid-template-columns: 1fr; gap: 32px; }
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