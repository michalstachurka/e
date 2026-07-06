import { Reveal } from "./Reveal";
import { FloatTitle } from "./FloatTitle";

const GROUPS = [
  {
    name: "Producenci i dystrybutorzy",
    text: "Gdy oferta jest dobra, ale brakuje jej spójnej oprawy wizualnej.",
  },
  {
    name: "Firmy wykonawcze",
    text: "Gdy realizacje są niespójne, a strona potrzebuje lepszych obrazów.",
  },
  {
    name: "Agencje www i marketingowe",
    text: "Gdy klient nie ma materiałów do strony, reklam albo landing page’a.",
  },
  {
    name: "Studia wnętrz i architekci",
    text: "Gdy potrzebna jest szybka seria koncepcyjnych, estetycznych kadrów.",
  },
];

export function Audience() {
  return (
    <section id="dla-kogo" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 pb-28 md:px-10 md:pb-40">
        <Reveal>
          <p className="eyebrow text-vn-muted">04 — Dla kogo</p>
        </Reveal>
        <FloatTitle
          text="Dla marek, które sprzedają *produkt obrazem.*"
          className="mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]"
        />

        <div className="mt-16 border-t hairline">
          {GROUPS.map((g, i) => (
            <Reveal key={g.name} delay={0.09 * i} y={26}>
              <div className="group grid gap-2 border-b hairline py-8 transition-colors duration-300 md:grid-cols-12 md:items-baseline md:py-10">
                <span className="spec text-vn-muted-light md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(1.4rem,2.4vw,2rem)] transition-colors duration-300 group-hover:text-vn-burgundy md:col-span-6">
                  {g.name}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-vn-muted md:col-span-4 md:col-start-9">
                  {g.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
