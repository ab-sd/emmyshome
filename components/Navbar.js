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
          background: var(--primary);
          color: var(--text-on-primary);
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;                         /* taller navbar */
          padding: 0 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        /* Logo container */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 100%;
          max-height: 60px;                    /* keeps logo within navbar */
        }
        .navbar__logo-img {
          position: relative;
          height: 52px;                        /* logo display height */
          width: ${brand.logoWidth}px;         /* width from config (e.g., 160px) */
          display: flex;
          align-items: center;
        }
        .navbar__logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text-on-primary);
        }
        .navbar__logo-text span.dot { color: var(--secondary); }

        /* Desktop nav links */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .navbar__links a {
          font-size: 0.92rem;
          font-weight: 500;
          opacity: 0.85;
          transition: opacity 0.2s, color 0.2s;
          letter-spacing: 0.3px;
        }
        .navbar__links a:hover { opacity: 1; color: var(--secondary); }
        .navbar__cta {
          background: var(--secondary);
          color: #fff !important;
          padding: 10px 22px;
          border-radius: 6px;
          opacity: 1 !important;
          font-weight: 600 !important;
          transition: background 0.2s;
        }
        .navbar__cta:hover { background: var(--primary); opacity: 1 !important; }

        /* Hamburger */
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-on-primary);
          border-radius: 2px;
          transition: all 0.3s;
        }
        /* Mobile menu */
        .mobile-menu {
          display: none;
          background: var(--primary);
          padding: 0 24px 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-menu a {
          display: block;
          padding: 12px 0;
          font-size: 1rem;
          font-weight: 500;
          opacity: 0.85;
          border-bottom: 1px solid rgba(255,255,255,0.08);
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
            {brand.logoImage ? (
              <div className="navbar__logo-img">
                <Image
                  src={brand.logoImage}
                  alt={business.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes={`${brand.logoWidth}px`}
                />
              </div>
            ) : (
              <span className="navbar__logo-text">
                {business.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="dot">{business.name.split(" ").slice(-1)}</span>
              </span>
            )}
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