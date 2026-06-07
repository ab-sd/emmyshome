// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clientConfig from "@/client.config";

const { business, brand, pages } = clientConfig;

const navLinks = [
  { label: "Home",     href: "/",         show: pages.home },
  { label: "About",    href: "/about",    show: pages.about },
  { label: "Services", href: "/services", show: pages.services },
  { label: "Gallery",  href: "/gallery",  show: pages.gallery },
  { label: "Contact",  href: "/contact",  show: pages.contact },
].filter((l) => l.show);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(9,96,40,.95);
  backdrop-filter: blur(12px);
  color: var(--text-on-primary);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 10px 30px rgba(0,0,0,.15);
}
        .navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 0 28px;
  max-width: 1280px;
  margin: 0 auto;
}
        /* Logo container */
        .navbar__logo {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
}

.navbar__logo-img {
  position: relative;
  height: 95px;
  width: 95px;
  transition: transform 0.3s ease;
}
  .navbar__logo:hover .navbar__logo-img {
  transform: scale(1.05);
}

        .navbar__logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text-on-primary);
        }
        .navbar__logo-text span.dot { color: var(--secondary); }

        /* Desktop nav links - Animated */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }
        .navbar__links a {
          font-size: 0.95rem;
          font-weight: 500;
          opacity: 0.9;
          transition: opacity 0.3s;
          letter-spacing: 0.3px;
          position: relative;
          padding-bottom: 4px;
        }
        /* The sliding gold underline effect */
        .navbar__links a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--secondary);
          transition: width 0.3s ease;
        }
        .navbar__links a:hover::after { width: 100%; }
        .navbar__links a:hover { opacity: 1; color: var(--text-on-primary); }
        


        .navbar__brand {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
}

.navbar__brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
}

.navbar__brand-subtitle {
  font-size: 0.8rem;
  color: rgba(255,255,255,.75);
  margin-top: 4px;
}


        .navbar__cta {
          /* Centering fixes */
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          padding: 12px 24px !important; /* Overrides the animated link padding */
          line-height: 1;
          
          /* Existing styles */
          background: var(--secondary);
          color: #fff !important;
          border-radius: 8px;
          opacity: 1 !important;
          font-weight: 600 !important;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3); /* Gold glow */
        }
        .navbar__cta::after { display: none; } /* Remove underline from button */
        .navbar__cta:hover { 
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 6px;
        }
        .hamburger span {
          display: block;
          width: 26px;
          height: 2px;
          background: var(--text-on-primary);
          border-radius: 2px;
          transition: all 0.3s;
        }
        /* Mobile menu */
        .mobile-menu {
          display: none;
          background: var(--dark-bg);
          padding: 0 24px 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-menu a {
          display: block;
          padding: 14px 0;
          font-size: 1.05rem;
          font-weight: 500;
          opacity: 0.85;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: var(--text-on-primary);
        }
        .mobile-menu a:last-child { border-bottom: none; }

        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu.is-open { display: block; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar__inner">
          {/* LOGO */}
         <Link href="/" className="navbar__logo">
  {brand.logoImage && (
    <div className="navbar__logo-img">
      <Image
        src={brand.logoImage}
        alt={business.name}
        fill
        style={{ objectFit: "contain" }}
        sizes="82px"
      />
    </div>
  )}

  <div className="navbar__brand">
    <div className="navbar__brand-title">
      Emmy Home Helpers
    </div>
    <div className="navbar__brand-subtitle">
      Trusted Home Support
    </div>
  </div>
</Link>

          {/* DESKTOP NAV */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={link.label === "Contact" ? "navbar__cta" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}