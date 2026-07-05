import { Reveal } from "./Reveal";

const ITEMS = [
  {
    q: "Czy to są zwykłe obrazy z AI?",
    a: "Nie. AI jest narzędziem, ale finalny efekt przechodzi przez brief, kierunek wizualny, selekcję i kontrolę jakości.",
  },
  {
    q: "Czy mogę używać tych wizualizacji komercyjnie?",
    a: "Tak, obrazy są przygotowywane z myślą o użyciu w komunikacji marki. Szczegóły wykorzystania określa oferta i regulamin współpracy.",
  },
  {
    q: "Czy potrzebuję własnych zdjęć?",
    a: "Nie zawsze. Możemy pracować na briefie, przykładach stylu, zdjęciach produktu lub materiałach referencyjnych.",
  },
  {
    q: "Czy to zastępuje sesję zdjęciową?",
    a: "Nie zawsze. To alternatywa lub uzupełnienie wtedy, gdy potrzebujesz spójnych materiałów szybciej, szerzej albo dla scen, których jeszcze nie masz.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Zależnie od pakietu i liczby poprawek. Małe pakiety zwykle są możliwe do realizacji szybciej niż pełne serie na stronę.",
  },
  {
    q: "Co jeśli obraz wygląda zbyt sztucznie?",
    a: "Właśnie dlatego proces obejmuje selekcję i poprawki. Słabe, generyczne obrazy są odrzucane.",
  },
  {
    q: "Czy pracujesz z agencjami?",
    a: "Tak. visNEX może wspierać agencje jako zaplecze do tworzenia wizualizacji dla klientów.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-vn-bg">
      <div className="mx-auto max-w-[1400px] px-5 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-vn-muted">09 — FAQ</p>
            </Reveal>
            <Reveal delay={0.08} mask>
              <h2 className="mt-8 text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.14]">
                Realne pytania przed pierwszym pakietem.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1} x={110}>
              <div className="border-t hairline">
                {ITEMS.map((item) => (
                  <details key={item.q} className="group border-b hairline">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[1.15rem] leading-snug">{item.q}</h3>
                      <span
                        aria-hidden="true"
                        className="relative block h-4 w-4 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-vn-charcoal" />
                        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-vn-charcoal transition-transform duration-300 group-open:scale-y-0" />
                      </span>
                    </summary>
                    <p className="max-w-[62ch] pb-7 text-[0.9375rem] leading-relaxed text-vn-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
