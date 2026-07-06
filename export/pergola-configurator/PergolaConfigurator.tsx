import { useMemo, useState, type CSSProperties } from "react";
import { PergolaCanvas, type PergolaParams } from "./PergolaCanvas";

/**
 * Self-contained pergola configurator (UI + 3D canvas).
 * No CSS framework required — styling via inline styles and the
 * optional `accent` / `text` / `muted` colour props.
 */
const COLORS = [
  { id: "antracyt", label: "Antracyt", value: "#2b2d2e" },
  { id: "bialy", label: "Biały", value: "#e8e6e0" },
  { id: "czarny", label: "Czarny", value: "#0e0f10" },
  { id: "braz", label: "Brąz", value: "#4a3527" },
];

export function PergolaConfigurator({
  accent = "#7a2533",
  text = "#171717",
  muted = "#6f6a63",
  frameBackground = "linear-gradient(180deg,#f6f3ee 0%,#e9e3d9 100%)",
}: {
  accent?: string;
  text?: string;
  muted?: string;
  frameBackground?: string;
}) {
  const [widths, setWidths] = useState<number[]>([4]);
  const [depth, setDepth] = useState(3.2);
  const [height, setHeight] = useState(2.6);
  const [angle, setAngle] = useState(35);
  const [frame, setFrame] = useState(COLORS[0]);
  const [slat, setSlat] = useState(COLORS[0]);
  const [ledLinear, setLedLinear] = useState(false);
  const [ledSpots, setLedSpots] = useState(false);
  const [spin, setSpin] = useState(true);

  const modules = widths.length;
  const setModules = (m: number) =>
    setWidths((w) => (m === w.length ? w : m > w.length ? [...w, 4] : w.slice(0, m)));
  const setWidthAt = (i: number, v: number) =>
    setWidths((w) => w.map((x, j) => (j === i ? v : x)));

  const params = useMemo<PergolaParams>(
    () => ({
      widths, depth, height, slatAngle: angle,
      frameColor: frame.value, slatColor: slat.value,
      ledLinear, ledSpots, spin,
    }),
    [widths, depth, height, angle, frame, slat, ledLinear, ledSpots, spin],
  );

  const label: CSSProperties = {
    fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
    color: muted, display: "block", marginBottom: 8,
  };
  const pill = (active: boolean): CSSProperties => ({
    padding: "9px 16px", borderRadius: 999, fontSize: 12,
    letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
    border: `1px solid ${active ? accent : "#d9d4cb"}`,
    color: active ? accent : muted, background: "transparent",
  });
  const group: CSSProperties = { marginBottom: 22 };

  const slider = (lab: string, val: number, min: number, max: number, step: number, on: (v: number) => void) => (
    <label style={{ ...group, display: "block" }}>
      <span style={label}>{lab}</span>
      <input type="range" min={min} max={max} step={step} value={val}
        onChange={(e) => on(Number(e.target.value))}
        style={{ width: "100%", accentColor: accent }} />
    </label>
  );

  const swatches = (sel: typeof COLORS[number], set: (c: typeof COLORS[number]) => void) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
      {COLORS.map((c) => (
        <button key={c.id} type="button" onClick={() => set(c)} aria-pressed={sel.id === c.id}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <span style={{
            width: 30, height: 30, borderRadius: "50%", background: c.value,
            border: sel.id === c.id ? `2px solid ${accent}` : "1px solid #d9d4cb",
            boxShadow: sel.id === c.id ? `0 0 0 3px ${accent}33` : "none",
          }} />
          <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: sel.id === c.id ? accent : muted }}>
            {c.label}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ display: "grid", gap: 32, gridTemplateColumns: "minmax(0,2fr) minmax(280px,1fr)", color: text }}>
      <div>
        <div style={{ aspectRatio: "16/10", width: "100%", background: frameBackground, border: "1px solid #e4ded6" }}>
          <PergolaCanvas params={params} />
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <button type="button" onClick={() => setSpin(!spin)} aria-pressed={spin} style={pill(spin)}>
            {spin ? "✓ " : ""}Animacja ruchu
          </button>
          <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: muted }}>
            {widths.map((w) => w.toFixed(1)).join(" + ")} × {depth.toFixed(1)} × {height.toFixed(1)} m · {angle}°
          </span>
        </div>
      </div>

      <div>
        <div style={group}>
          <span style={label}>Moduły</span>
          <div style={{ display: "flex", gap: 10 }}>
            {[1, 2].map((m) => (
              <button key={m} type="button" onClick={() => setModules(m)} style={pill(modules === m)}>
                {m} {m === 1 ? "moduł" : "moduły"}
              </button>
            ))}
          </div>
        </div>
        {widths.map((w, i) =>
          slider(`${modules === 1 ? "Szerokość" : `Moduł ${i + 1} · szerokość`} · ${w.toFixed(1)} m`, w, 2, 6, 0.1, (v) => setWidthAt(i, v)),
        )}
        {slider(`Wysięg · ${depth.toFixed(1)} m`, depth, 2.5, 4.5, 0.1, setDepth)}
        {slider(`Wysokość · ${height.toFixed(1)} m`, height, 2.2, 3.2, 0.05, setHeight)}
        {slider(`Otwarcie lameli · ${angle}°`, angle, 0, 120, 1, setAngle)}
        <div style={group}>
          <span style={label}>Kolor konstrukcji</span>
          {swatches(frame, setFrame)}
        </div>
        <div style={group}>
          <span style={label}>Kolor lameli</span>
          {swatches(slat, setSlat)}
        </div>
        <div style={group}>
          <span style={label}>Oświetlenie LED · można łączyć</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button type="button" onClick={() => setLedLinear(!ledLinear)} style={pill(ledLinear)}>
              {ledLinear ? "✓ " : ""}Liniowe · rynny
            </button>
            <button type="button" onClick={() => setLedSpots(!ledSpots)} style={pill(ledSpots)}>
              {ledSpots ? "✓ " : ""}Punktowe · lamele
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
