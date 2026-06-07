import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clientConfig from "@/client.config";
import Image from "next/image";

const { gallery } = clientConfig;

export default function GalleryPage() {
  return (
    <>
      <style>{`
        .page-banner {
          background: var(--primary);
          color: var(--text-on-primary);
          padding: 64px 0 48px;
          text-align: center;
        }
        .page-banner__title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800; margin-bottom: 10px; }
        .page-banner__sub { opacity: 0.7; font-size: 1rem; }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          border-radius: 12px;
          overflow: hidden;
          background: var(--light-bg);
          aspect-ratio: 4/3;
          position: relative;
        }
        .gallery-item img { object-fit: cover; width: 100%; height: 100%; transition: transform 0.3s; }
        .gallery-item:hover img { transform: scale(1.04); }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.55);
          color: #fff;
          padding: 10px 14px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .gallery-empty {
          text-align: center;
          padding: 80px 24px;
          background: var(--light-bg);
          border-radius: 16px;
          color: #aaa;
        }
        .gallery-empty p { margin-top: 12px; font-size: 0.9rem; }
      `}</style>

      <Navbar />

      <div className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">{gallery.heading}</h1>
          <p className="page-banner__sub">{gallery.subheading}</p>
        </div>
      </div>

      <section className="section section--light">
        <div className="container">
          {gallery.images.length === 0 ? (
            <div className="gallery-empty">
              <div style={{ fontSize: "3rem" }}>📷</div>
              <p>Add photos in <code>gallery.images</code> inside <code>client.config.js</code></p>
              <p>Put image files in <code>/public/images/gallery/</code></p>
            </div>
          ) : (
            <div className="gallery-grid">
              {gallery.images.map((img, i) => (
                <div key={i} className="gallery-item">
                  <Image
                    src={img.src}
                    alt={img.caption || `Gallery image ${i + 1}`}
                    fill
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
