// components/Footer.js
import Link from "next/link";
import clientConfig from "@/client.config";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMessageCircle, FiMail, FiMapPin } from "react-icons/fi";

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
          position: relative;
          overflow: hidden;
          background: #1A1A1A; 
          border-top: 3px solid var(--secondary);
          color: rgba(255,255,255,0.7);
          padding: 56px 0 24px; 
          font-size: 0.95rem;
        }
        
        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(212,175,55,.05),
            transparent 40%
          );
          pointer-events: none;
        }

        .footer .container {
          position: relative;
          z-index: 1;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr; 
          gap: 48px; 
          margin-bottom: 40px; 
        }

        .footer__trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px; 
          border-radius: 999px;
          background: rgba(212,175,55,.12);
          color: var(--secondary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 16px; 
          border: 1px solid rgba(212,175,55,.2);
        }

        .footer__brand-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px; 
        }
        .footer__brand-name span { color: var(--secondary); }
        
        .footer__tagline {
          opacity: 0.8;
          line-height: 1.5; 
          margin-bottom: 12px;
          font-size: 0.95rem;
          max-width: 350px;
        }

        .footer__coverage {
          color: rgba(255,255,255,.55);
          line-height: 1.5; 
          max-width: 400px;
          margin-bottom: 16px; 
        }

        .footer__heading {
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px; 
        }
        
        .footer__links { list-style: none; }
        .footer__links li { margin-bottom: 10px; } 
        .footer__links a { transition: color 0.2s, padding-left 0.2s; }
        .footer__links a:hover { color: var(--secondary); padding-left: 4px; } 
        
        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px; /* Slightly widened to make room for vector icons */
          margin-bottom: 8px; 
          line-height: 1.5;
          background: rgba(255,255,255,.03);
          padding: 12px 14px; 
          border-radius: 12px;
          transition: all .25s ease;
        }
        .footer__contact-item:hover {
          background: rgba(255,255,255,.06);
        }
        .footer__contact-icon { 
          font-size: 1.1rem; 
          flex-shrink: 0; 
          color: var(--secondary); 
          display: flex;
          align-items: center;
          margin-top: 2px;
        } 
        
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
          margin-top: 12px; 
        }
        .footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; 
          height: 36px; 
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          font-size: 1rem;
          transition: background 0.3s, transform 0.3s;
        }
        .footer__social a:hover { 
          background: var(--secondary); 
          color: #fff;
          transform: translateY(-3px);
        }
        
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 20px; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.85rem;
          opacity: 0.6;
        }

        .footer__credit {
          opacity: .4;
          font-size: .8rem;
        }

        @media (max-width: 768px) {
          .footer__grid { grid-template-columns: 1fr; gap: 40px; }
          .footer { padding: 48px 0 24px; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <div className="footer__trust">
                ✓ Trusted Home Support Across Cape Town
              </div>

              <div className="footer__brand-name">
                {business.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span>{business.name.split(" ").slice(-1)}</span>
              </div>
              
              <p className="footer__tagline">{clientConfig.business.tagline}</p>
              
              <p className="footer__coverage">
                Serving Cape Town, Southern Suburbs, Northern Suburbs,
                CBD and surrounding Western Cape areas.
              </p>

              {(social.facebook || social.instagram || social.tiktok || social.twitter) && (
                <div className="footer__social">
                  {social.facebook  && <a href={social.facebook}  target="_blank" rel="noreferrer"><FaFacebookF /></a>}
                  {social.instagram && <a href={social.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>}
                  {social.tiktok    && <a href={social.tiktok}    target="_blank" rel="noreferrer"><FaTiktok /></a>}
                  {social.twitter   && <a href={social.twitter}   target="_blank" rel="noreferrer"><FaXTwitter /></a>}
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
                <span className="footer__contact-icon"><FiPhone /></span>
                <a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>
              </div>
              
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><FiMessageCircle /></span>
                <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
              
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><FiMail /></span>
                <div className="footer__email-list">
                  {emails.map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`}>{email}</a>
                  ))}
                </div>
              </div>
              
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><FiMapPin /></span>
                <span>{business.address}</span>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
            <span>Available 24/7 • Call or WhatsApp Anytime</span>
            <span className="footer__credit">Website by Abdul Web Design</span>
          </div>
        </div>
      </footer>
    </>
  );
}