// app/gallery/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";
import Image from "next/image";
import { FiImage } from "react-icons/fi";

const { gallery } = clientConfig;

export default function GalleryPage() {
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

        /* --- Gallery Content Wrapper --- */
        .gallery-section {
          background: var(--light-bg);
          padding: 96px 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        /* --- Interactive Photo Framework --- */
        .gallery-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          aspect-ratio: 4/3;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.03);
          cursor: pointer;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Deep overlay transition */
        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
          opacity: 0.6;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .gallery-item:hover::after {
          opacity: 0.85;
        }

        .gallery-item img { 
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important; 
        }

        .gallery-item:hover img { 
          transform: scale(1.06); 
        }

        /* Sliding Premium Captions */
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: #ffffff;
          padding: 24px;
          font-size: 1rem;
          font-weight: 600;
          z-index: 2;
          transform: translateY(4px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          letter-spacing: -0.2px;
        }

        @media(hover: hover) {
          .gallery-caption {
            opacity: 0.8;
            transform: translateY(8px);
          }
          .gallery-item:hover .gallery-caption {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- Empty State Overhaul --- */
        .gallery-empty {
          text-align: center;
          padding: 80px 40px;
          background: #ffffff;
          border-radius: 24px;
          border: 2px dashed rgba(0,0,0,0.06);
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.01);
        }

        .gallery-empty__icon {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 20px;
          display: inline-flex;
        }

        .gallery-empty h3 {
          font-size: 1.3rem;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .gallery-empty p { 
          margin: 6px 0; 
          font-size: 0.95rem; 
          color: var(--body-text);
          opacity: 0.7; 
          line-height: 1.5;
        }

        .gallery-empty code {
          background: var(--light-bg);
          padding: 2px 6px;
          border-radius: 6px;
          font-family: monospace;
          color: #e06c75;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .gallery-section { padding: 64px 0; }
          .page-banner__text-guard { padding: 24px 20px; }
          .gallery-grid { gap: 20px; }
        }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner__text-guard">
            <h1 className="page-banner__title">{gallery.heading}</h1>
            <p className="page-banner__sub">{gallery.subheading}</p>
          </div>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          {gallery.images.length === 0 ? (
            <div className="gallery-empty">
              <div className="gallery-empty__icon">
                <FiImage />
              </div>
              <h3>No Images Found</h3>
              <p>Add photos in <code>gallery.images</code> inside <code>client.config.js</code></p>
              <p>Put image files in <code>/public/images/gallery/</code></p>
            </div>
          ) : (
            <div className="gallery-grid">
              {gallery.images.map((img, i) => (
                <div 
                  key={i} 
                  className="gallery-item" 
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption || `Gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 4}
                    style={{ objectFit: "cover" }}
                  />
                  {img.caption && <div className="gallery-caption">{img.caption}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}