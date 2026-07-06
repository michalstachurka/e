import { useEffect, useMemo, useState } from "react";
import { SmoothScroll } from "../components/SmoothScroll";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { SilkCanvas } from "../components/SilkCanvas";
import { SpecPlate } from "../components/SpecPlate";
import { PergolaCanvas, type PergolaParams } from "../components/PergolaCanvas";
import { asset } from "../lib/asset";

/* ---------- shared ---------- */

function VariantStack({
  images,
  active,
  alt,
  aspect = "aspect-[16/9]",
}: {
  images: string[];
  active: number;
  alt: string;
  aspect?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-vn-cream ${aspect}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={asset(src)}
          alt={i === active ? alt : ""}
          aria-hidden={i !== active}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function Swatch({
  color,
  label,
  active,
  onClick,
  dark = false,
}: {
  color: string;
  label: string;
  active: boolean;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group flex items-center gap-3 text-left"
    >
      <span
        style={{ background: color }}
        className={`block h-9 w-9 rounded-full border transition-shadow duration-300 ${
          active
            ? "border-vn-burgundy shadow-[0_0_0_3px_rgba(122,37,51,0.25)]"
            : dark
              ? "border-white/25"
              : "border-vn-line"
        }`}
      />
      <span
        className={`spec transition-colors ${
          active
            ? "text-vn-burgundy"
            : dark
              ? "text-vn-cream/60 group-hover:text-vn-cream"
              : "text-vn-muted group-hover:text-vn-charcoal"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

/* ---------- mobile options sheet ---------- */

function SheetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-charcoal absolute bottom-3 right-3 z-10 !px-4 !py-3 shadow-lg lg:hidden"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="1" y1="3.2" x2="13" y2="3.2" />
          <line x1="1" y1="10.8" x2="13" y2="10.8" />
          <circle cx="9.4" cy="3.2" r="1.9" fill="var(--vn-charcoal)" />
          <circle cx="4.6" cy="10.8" r="1.9" fill="var(--vn-charcoal)" />
        </g>
      </svg>
      Opcje
    </button>
  );
}

function OptionsSheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`lg:hidden ${open ? "" : "pointer-events-none"}`}>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[70] bg-vn-ink/55 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        data-lenis-prevent
        className={`fixed inset-x-0 bottom-0 z-[80] max-h-[78dvh] overflow-y-auto border-t-[3px] border-vn-burgundy bg-vn-bg px-5 pb-10 pt-5 text-vn-charcoal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="spec text-vn-muted">{title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij opcje"
            className="relative block h-9 w-9"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 rotate-45 bg-vn-charcoal" />
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -rotate-45 bg-vn-charcoal" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- 01: door colour (AI variant series) ---------- */

const DOOR_VARIANTS = [
  { id: "oliwka", label: "Oliwka", chip: "#a9a184" },
  { id: "grafit", label: "Grafit", chip: "#3f4142" },
  { id: "zielen", label: "Butelkowa zieleń", chip: "#5c6b4e" },
  { id: "terakota", label: "Terakota", chip: "#c08560" },
  { id: "krem", label: "Złamana biel", chip: "#e4ddcd" },
];

function DoorDemo() {
  const [active, setActive] = useState(0);
  const [sheet, setSheet] = useState(false);
  const controls = (
    <div className="flex flex-wrap gap-x-7 gap-y-4 lg:flex-col">
      {DOOR_VARIANTS.map((v, i) => (
        <Swatch
          key={v.id}
          color={v.chip}
          label={v.label}
          active={i === active}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );
  return (
    <section id="drzwi" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-8">
            <Reveal x={-120}>
              <div className="relative">
                <SheetButton onClick={() => setSheet(true)} />
                <VariantStack
                images={DOOR_VARIANTS.map((v) => `images/konfigurator/door-${v.id}.webp`)}
                active={active}
                alt={`Drzwi ukryte w kolorze: ${DOOR_VARIANTS[active].label}`}
                />
              </div>
              <div className="mt-3">
                <SpecPlate
                  left={`VN—KONF/01 · drzwi ukryte · ${DOOR_VARIANTS[active].label}`}
                  right="seria AI · 5 wariantów"
                />
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4">
            <Reveal x={120}>
              <p className="eyebrow text-vn-muted">K—01 · Warianty produktu</p>
              <h2 className="mt-6 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.12]">
                Kolor skrzydła w tej samej scenie.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-vn-muted">
                Ta sama kamera, to samo światło, ten sam kadr — zmienia się
                tylko produkt. Seria powstaje z wizualizacji AI, bez modeli 3D
                i bez sesji zdjęciowej.
              </p>
              <div className="mt-8 hidden lg:block">{controls}</div>
            </Reveal>
          </div>
        </div>
      </div>
      <OptionsSheet
        open={sheet}
        onClose={() => setSheet(false)}
        title="K—01 · Kolor skrzydła"
      >
        {controls}
      </OptionsSheet>
    </section>
  );
}

/* ---------- 02: LED colour temperature ---------- */

const LED_VARIANTS = [
  { id: "ciepla", label: "Ciepła", temp: "2700 K", chip: "#ffb46b" },
  { id: "neutralna", label: "Neutralna", temp: "4000 K", chip: "#f3ede2" },
  { id: "zimna", label: "Zimna", temp: "6500 K", chip: "#bcd2ff" },
];

function LedDemo() {
  const [active, setActive] = useState(0);
  const [sheet, setSheet] = useState(false);
  const controls = (
    <div className="flex flex-wrap gap-3">
      {LED_VARIANTS.map((v, i) => (
        <button
          key={v.id}
          type="button"
          onClick={() => setActive(i)}
          aria-pressed={i === active}
          className={`pill transition-colors duration-300 ${
            i === active
              ? "border-vn-burgundy text-current"
              : "opacity-55 hover:opacity-90"
          }`}
        >
          <span
            style={{ background: v.chip }}
            className="mr-2.5 inline-block h-3 w-3 rounded-full"
          />
          {v.label} · {v.temp}
        </button>
      ))}
    </div>
  );
  return (
    <section id="led" className="relative overflow-hidden bg-vn-charcoal-soft text-vn-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50%_45%_at_80%_10%,rgba(122,37,51,0.25),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:order-1 lg:col-span-4">
            <Reveal x={-120}>
              <p className="eyebrow text-vn-cream/55">K—02 · Sterowanie światłem</p>
              <h2 className="mt-6 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.12]">
                Barwa oświetlenia LED w kadrze.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-vn-cream/70">
                Klient wybiera temperaturę barwową, a scena reaguje — od
                ciepłego wieczornego światła po chłodną, galeryjną biel.
              </p>
              <div className="mt-8 hidden lg:block">{controls}</div>
            </Reveal>
          </div>

          <div className="lg:order-2 lg:col-span-8">
            <Reveal x={120}>
              <div className="relative">
                <SheetButton onClick={() => setSheet(true)} />
                <VariantStack
                images={LED_VARIANTS.map((v) => `images/konfigurator/led-${v.id}.webp`)}
                active={active}
                alt={`Sztukateria LED — barwa ${LED_VARIANTS[active].label.toLowerCase()} (${LED_VARIANTS[active].temp})`}
                />
              </div>
              <div className="mt-3">
                <SpecPlate
                  tone="dark"
                  left={`VN—KONF/02 · sztukateria LED · ${LED_VARIANTS[active].temp}`}
                  right="seria AI · 3 nastawy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <OptionsSheet
        open={sheet}
        onClose={() => setSheet(false)}
        title="K—02 · Barwa światła"
      >
        {controls}
      </OptionsSheet>
    </section>
  );
}

/* ---------- 03: parametric 3D pergola ---------- */

const PERGOLA_COLORS = [
  { id: "antracyt", label: "Antracyt", value: "#2b2d2e" },
  { id: "biel", label: "Biel", value: "#e8e6e0" },
  { id: "braz", label: "Brąz", value: "#4a3527" },
];

function PergolaDemo() {
  const [width, setWidth] = useState(4);
  const [depth, setDepth] = useState(3.2);
  const [height, setHeight] = useState(2.6);
  const [angle, setAngle] = useState(35);
  const [frame, setFrame] = useState(PERGOLA_COLORS[0]);
  const [slat, setSlat] = useState(PERGOLA_COLORS[0]);
  const params = useMemo<PergolaParams>(
    () => ({
      width,
      depth,
      height,
      slatAngle: angle,
      frameColor: frame.value,
      slatColor: slat.value,
    }),
    [width, depth, height, angle, frame, slat],
  );
  const [sheet, setSheet] = useState(false);

  const controls = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-1">
        <label className="block">
          <span className="spec text-vn-muted">Szerokość · {width.toFixed(1)} m</span>
          <input type="range" min={3} max={6} step={0.1} value={width}
            onChange={(e) => setWidth(Number(e.target.value))} className="range mt-3 w-full" />
        </label>
        <label className="block">
          <span className="spec text-vn-muted">Wysięg · {depth.toFixed(1)} m</span>
          <input type="range" min={2.5} max={4.5} step={0.1} value={depth}
            onChange={(e) => setDepth(Number(e.target.value))} className="range mt-3 w-full" />
        </label>
        <label className="block">
          <span className="spec text-vn-muted">Wysokość · {height.toFixed(1)} m</span>
          <input type="range" min={2.2} max={3.2} step={0.05} value={height}
            onChange={(e) => setHeight(Number(e.target.value))} className="range mt-3 w-full" />
        </label>
        <label className="block">
          <span className="spec text-vn-muted">Otwarcie lameli · {angle}°</span>
          <input type="range" min={0} max={120} step={1} value={angle}
            onChange={(e) => setAngle(Number(e.target.value))} className="range mt-3 w-full" />
        </label>
      </div>
      <div>
        <span className="spec text-vn-muted">Kolor konstrukcji</span>
        <div className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
          {PERGOLA_COLORS.map((c) => (
            <Swatch key={c.id} color={c.value} label={c.label}
              active={frame.id === c.id} onClick={() => setFrame(c)} />
          ))}
        </div>
      </div>
      <div>
        <span className="spec text-vn-muted">Kolor lameli</span>
        <div className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
          {PERGOLA_COLORS.map((c) => (
            <Swatch key={c.id} color={c.value} label={c.label}
              active={slat.id === c.id} onClick={() => setSlat(c)} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="pergola" className="bg-vn-bg-warm">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-8">
            <Reveal x={-120}>
              <div className="relative aspect-[4/3] w-full border hairline bg-[linear-gradient(180deg,#f6f3ee_0%,#e9e3d9_100%)] md:aspect-[16/10]">
                <SheetButton onClick={() => setSheet(true)} />
                <PergolaCanvas params={params} />
              </div>
              <div className="mt-3">
                <SpecPlate
                  left={`VN—KONF/03 · pergola · ${frame.label} / lamele ${slat.label}`}
                  right={`${width.toFixed(1)} × ${depth.toFixed(1)} × ${height.toFixed(1)} m · ${angle}°`}
                />
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4">
            <Reveal x={120}>
              <p className="eyebrow text-vn-muted">K—03 · Parametryczne 3D</p>
              <h2 className="mt-6 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.12]">
                Produkt w pełnym 3D, w przeglądarce.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-vn-muted">
                Model budowany parametrycznie w czasie rzeczywistym — wymiary,
                kąt lameli i kolor bez plików od grafika 3D. Obróć kadr
                przeciągnięciem.
              </p>

              <div className="mt-8 hidden lg:block">{controls}</div>
            </Reveal>
          </div>
        </div>
      </div>
      <OptionsSheet
        open={sheet}
        onClose={() => setSheet(false)}
        title="K—03 · Parametry pergoli"
      >
        {controls}
      </OptionsSheet>
    </section>
  );
}

/* ---------- page ---------- */

export function KonfiguratorPage() {
  return (
    <div className="grain">
      <SmoothScroll />
      <Navbar home={false} />
      <main>
        {/* Intro */}
        <section className="relative overflow-hidden bg-[#141112] text-vn-cream">
          <SilkCanvas />
          <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
            <Reveal>
              <p className="eyebrow text-vn-cream/60">Konfiguratory produktowe</p>
            </Reveal>
            <Reveal delay={0.1} y={-60}>
              <h1 className="mt-7 max-w-[950px] text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[1.06]">
                Klient nie ogląda oferty.{" "}
                <em>Klika i składa ją sam.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/72">
                Trzy podejścia do konfiguratora na stronę — od serii wariantów
                z wizualizacji AI po parametryczny model 3D. Wszystko poniżej
                jest interaktywne.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="spec mt-12 text-vn-cream/40">
                K—01 warianty produktu · K—02 sterowanie światłem · K—03 parametryczne 3D
              </p>
            </Reveal>
          </div>
        </section>

        <DoorDemo />
        <LedDemo />
        <PergolaDemo />

        {/* CTA */}
        <section className="bg-vn-burgundy-deep text-vn-cream">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <Reveal y={-50}>
              <h2 className="max-w-[820px] text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.12]">
                Konfigurator dla Twojego produktu?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[560px] text-[1rem] leading-relaxed text-vn-cream/75">
                Drzwi, podłogi, pergole, oświetlenie, meble — powiedz, co
                sprzedajesz, a zaproponujemy wariant, który najlepiej pokaże
                ofertę.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href="mailto:kontakt@visnex.pl?subject=Konfigurator%20%E2%80%94%20visNEX"
                className="btn btn-cream mt-9"
              >
                Porozmawiajmy o konfiguratorze
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
