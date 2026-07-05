import { Reveal } from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Brief",
    text: "Opisujesz branżę, ofertę, styl, formaty i zastosowanie obrazów.",
  },
  {
    no: "02",
    title: "Kierunek",
    text: "Ustalamy estetykę, typ kadrów, ton marki i zasady wizualne.",
  },
  {
    no: "03",
    title: "Produkcja",
    text: "Tworzymy warianty, selekcjonujemy najlepsze i odrzucamy słabe ujęcia.",
  },
  {
    no: "04",
    title: "Finalizacja",
    text: "Dopracowujemy wybrane obrazy i przygotowujemy pliki do publikacji.",
  },
];

export function Process() {
  return (
    <section id="proces" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">06 — Proces</p>
        </Reveal>
        <Reveal delay={0.08} mask>
          <h2 className="mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
            Proces prosty dla klienta.{" "}
            <em className="text-vn-burgundy">Precyzyjny po naszej stronie.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={0.08 * i} y={28}>
              <div className="border-t-2 border-vn-charcoal pt-6">
                <span className="font-display text-[2.6rem] leading-none text-vn-burgundy">
                  {s.no}
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-vn-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
