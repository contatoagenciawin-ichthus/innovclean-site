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
          background: "#F4F4F2",
          color: "#004A40",
          padding: "62px 70px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "72%", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Arial, sans-serif" }}>
            <div style={{ display: "flex", gap: 4, width: 58, height: 46 }}>
              <span style={{ width: 17, height: 38, background: "#BCD8D5", transform: "skewY(20deg)" }} />
              <span style={{ width: 17, height: 42, background: "#BCD8D5", transform: "translateY(3px) skewY(20deg)" }} />
              <span style={{ width: 17, height: 46, background: "#004A40", transform: "translateY(6px) skewY(20deg)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong style={{ fontFamily: "Arial, sans-serif", fontSize: 32, lineHeight: 1 }}>InnovClean</strong>
              <span style={{ marginTop: 4, fontSize: 12, letterSpacing: 3 }}>SERVICES LTD</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 17, letterSpacing: 4, fontWeight: 700, marginBottom: 24 }}>
              COMMERCIAL CLEANING · LONDON
            </div>
            <div style={{ fontSize: 70, lineHeight: 0.98, letterSpacing: -3, fontWeight: 700 }}>
              Commercial cleaning, shaped around your space.
            </div>
          </div>

          <div style={{ fontFamily: "Arial, sans-serif", fontSize: 18, color: "#55716C" }}>
            Quality · Reliability · Sustainability · Personal service
          </div>
        </div>

        <div style={{ position: "absolute", right: 0, top: 0, width: 350, height: 630, background: "#004A40" }} />
        <div style={{ position: "absolute", right: 245, bottom: 0, width: 120, height: 380, background: "#BCD8D5", transform: "skewY(-14deg)", opacity: .8 }} />
        <div style={{ position: "absolute", right: 90, bottom: 0, width: 110, height: 470, background: "#00DB88", transform: "skewY(12deg)", opacity: .35 }} />
        <div style={{ position: "absolute", right: 30, top: 65, width: 16, height: 16, background: "#B1FD40" }} />
      </div>
    ),
    size
  );
}
