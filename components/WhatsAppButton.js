import clientConfig from "@/client.config";

export default function WhatsAppButton() {
  const { business } = clientConfig;
  const link = `https://wa.me/${business.whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <>
      <style>{`
        .wa-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          width: 58px;
          height: 58px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          animation: wa-pulse 2.5s infinite;
        }
        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37,211,102,0.55);
          animation: none;
        }
        .wa-float svg { width: 30px; height: 30px; fill: #fff; }
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 4px 32px rgba(37,211,102,0.7); }
        }
      `}</style>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 2C8.27 2 2 8.27 2 16c0 2.45.64 4.76 1.77 6.78L2 30l7.42-1.74A13.9 13.9 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5c-2.2 0-4.27-.6-6.05-1.63l-.43-.26-4.4 1.04 1.05-4.32-.28-.44A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.3-8.57c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.75-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.56-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.35-1.2 1.17-1.2 2.85 0 1.68 1.22 3.31 1.4 3.54.17.23 2.4 3.66 5.81 5.14.81.35 1.44.56 1.94.71.81.26 1.55.22 2.14.13.65-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.08-.14-.32-.23-.67-.4z" />
        </svg>
      </a>
    </>
  );
}
