import { ImageResponse } from "next/og";
import { person } from "./content";

export const alt = `${person.name}, ${person.postNominals} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#FAFAF8",
          color: "#0F0F0E",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 44 }}>
          miss
          <div style={{ width: 8, height: 8, background: "#0F0F0E", margin: "0 3px 9px" }} />
          <span style={{ fontStyle: "italic" }}>a</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 80, letterSpacing: -3, lineHeight: 1.02 }}>{person.name}</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#5E5D5A" }}>
          {`${person.postNominals} · ${person.role} · ${person.location}`}
        </div>
      </div>
    ),
    size,
  );
}
