import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 512, height: 512 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          color: "#c8a448",
          fontSize: 360,
          fontWeight: 900,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: -12,
        }}
      >
        W
      </div>
    ),
    size
  );
}
