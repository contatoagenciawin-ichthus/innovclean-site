import { ImageResponse } from "next/og";

export const alt = "InnovClean Services — Commercial cleaning in London";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#073c35",
          color: "#ffffff",
          padding: "72px 78px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 800 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50% 50% 50% 5px", background: "#00db88", transform: "rotate(-20deg)" }} />
          InnovClean
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
          <div style={{ color: "#b1fd40", fontSize: 22, letterSpacing: 4, fontWeight: 800, marginBottom: 28 }}>
            COMMERCIAL CLEANING · LONDON & UK
          </div>
          <div style={{ fontSize: 86, lineHeight: 0.95, letterSpacing: -5, fontWeight: 800 }}>
            Cleaner spaces. Better days. Less impact.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,.65)", fontSize: 22 }}>
          <span>Tailored · Sustainable · Reliable</span>
          <span>innovclean.co.uk</span>
        </div>
      </div>
    ),
    size
  );
}
