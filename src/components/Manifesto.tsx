import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="oferta" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-vn-muted">01 — Manifest</p>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]">
              Nie generujemy przypadkowych obrazów.{" "}
              <em className="text-vn-burgundy">
                Projektujemy wizualizacje pod sprzedaż.
              </em>
            </h2>
          </Reveal>

          <div className="space-y-6 text-[1.0625rem] leading-relaxed text-vn-muted lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p>
                AI potrafi stworzyć ładny obraz. Problem zaczyna się wtedy, gdy
                obraz ma pracować na stronie, w reklamie albo ofercie. Wtedy
                liczy się kadr, produkt, światło, spójność, realizm i cel.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                visNEX łączy prompt engineering, selekcję i kontrolę jakości,
                żeby dostarczyć wizualizacje gotowe do użycia w komunikacji
                marki.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
