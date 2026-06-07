import clientConfig from "@/client.config";
import { Analytics } from "@vercel/analytics/next";

const { brand, seo, business } = clientConfig;

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RootLayout({ children }) {
  const fontName = brand.fontFamily.replace(/ /g, "+");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontName}:wght@300;400;500;600;700;800&display=swap`}
          rel="stylesheet"
        />
        <style>{`
          :root {
            --primary:       ${brand.primaryColor};
            --secondary:     ${brand.secondaryColor};
            --text-on-primary: ${brand.textOnPrimary};
            --light-bg:      ${brand.lightBg};
            --dark-bg:       ${brand.darkBg};
            --body-text:     ${brand.bodyText};
            --font:          '${brand.fontFamily}', sans-serif;
          }

          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: var(--font);
            color: var(--body-text);
            background: #fff;
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
          }

          a { text-decoration: none; color: inherit; }

          img { max-width: 100%; display: block; }

          .container {
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .section {
            padding: 80px 0;
          }

          .section--light { background: var(--light-bg); }
          .section--dark  { background: var(--dark-bg); color: var(--text-on-primary); }
          .section--primary { background: var(--primary); color: var(--text-on-primary); }

          .section-heading {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 8px;
          }

          .section-sub {
            font-size: 1rem;
            opacity: 0.65;
            margin-bottom: 48px;
          }

          .accent { color: var(--secondary); }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 32px;
            border-radius: 6px;
            font-family: var(--font);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: opacity 0.2s, transform 0.2s;
          }
          .btn:hover { opacity: 0.88; transform: translateY(-1px); }
          .btn--primary { background: var(--secondary); color: #fff; }
          .btn--outline { background: transparent; border: 2px solid var(--secondary); color: var(--secondary); }
          .btn--outline-white { background: transparent; border: 2px solid #fff; color: #fff; }

          @media (max-width: 768px) {
            .section { padding: 56px 0; }
          }
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
