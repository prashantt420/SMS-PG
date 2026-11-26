import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LP Savani PG in Adajan, Surat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          background: "#f5f2ec",
          color: "#20211f",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", background: "#20211f", color: "#fff", borderRadius: 14, fontSize: 28, fontWeight: 800 }}>LP</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 22, fontWeight: 700, letterSpacing: 2 }}>
            <span>LP SAVANI</span><span style={{ fontSize: 12, letterSpacing: 3, marginTop: 5 }}>PAYING GUEST</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, fontWeight: 800, maxWidth: 930 }}>Comfortable PG rooms in Adajan, Surat</div>
          <div style={{ fontSize: 28, color: "#62645f" }}>AC & non-AC sharing options · Near LP Savani Circle</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22 }}>
          <span>Monthly plans from ₹5,500</span><span>Surat, Gujarat</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
