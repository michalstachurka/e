import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SpecPlate } from "./SpecPlate";

const PILLARS = [
  {
    no: "01",
    title: "Kierunek wizualny",
    text: "Ustalamy styl, kategorię, zastosowanie i to, co obraz ma sprzedać.",
    image: "/images/system-kierunek.webp",
    alt: "Loftowa kuchnia w graficie, dębie i cegle — przykład kierunku wizualnego",
    plate: ["VN—SYS/01 · kuchnie", "4:5 · direction"],
  },
  {
    no: "02",
    title: "Prompt engineering",
    text: "Tworzymy precyzyjne prompty pod scenę, materiał, światło, kadr i produkt.",
    image: "/images/system-prompt.webp",
    alt: "Sztukateria LED w dwukondygnacyjnym holu — kontrola światła i sceny",
    plate: ["VN—SYS/02 · sztukateria LED", "4:5 · generated"],
  },
  {
    no: "03",
    title: "Selekcja",
    text: "Odrzucamy obrazy, które wyglądają sztucznie, generycznie albo nie pokazują oferty.",
    image: "/images/system-selekcja.webp",
    alt: "Drzwi przesuwne w nowoczesnym domu — kadr wybrany w selekcji",
    plate: ["VN—SYS/03 · drzwi", "16:9 · selected"],
  },
  {
    no: "04",
    title: "Korekty",
    text: "Dopracowujemy perspektywę, proporcje, kolor, światło i detale.",
    image: "/images/system-korekty.webp",
    alt: "Podłoga w jodełkę — dopracowany finalny kadr",
    plate: ["VN—SYS/04 · podłogi", "16:9 · refined"],
  },
];

export function VisualSystem() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (i !== -1) setActive(i);
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="system" className="bg-vn-bg-warm">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Sticky rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow text-vn-muted">02 — System wizualizacji</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.14]">
                  System, który pilnuje obrazu od briefu do finalnego pliku.
                </h2>
              </Reveal>

              <ol className="mt-12 hidden lg:block" aria-label="Etapy systemu">
                {PILLARS.map((p, i) => (
                  <li
                    key={p.no}
                    className={`border-l-2 py-5 pl-7 transition-[border-color,opacity] duration-500 ${
                      active === i
                        ? "border-vn-burgundy opacity-100"
                        : "border-vn-line opacity-40"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`spec ${active === i ? "text-vn-burgundy" : "text-vn-muted"}`}
                      >
                        {p.no}
                      </span>
                      <h3 className="text-xl">{p.title}</h3>
                    </div>
                    <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed text-vn-muted">
                      {p.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Scrolling cards */}
          <div className="flex flex-col gap-14 lg:col-span-6 lg:col-start-7 lg:gap-28">
            {PILLARS.map((p, i) => (
              <div
                key={p.no}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              >
                {/* Pillar text inline on mobile, where the rail is hidden */}
                <div className="mb-5 lg:hidden">
                  <div className="flex items-baseline gap-4">
                    <span className="spec text-vn-burgundy">{p.no}</span>
                    <h3 className="text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-vn-muted">
                    {p.text}
                  </p>
                </div>

                <Reveal y={40}>
                  <figure className="border hairline bg-vn-bg p-3">
                    <div className="frame-img aspect-[4/5]">
                      <img src={p.image} alt={p.alt} loading="lazy" />
                    </div>
                    <figcaption className="px-1 pb-1 pt-3.5">
                      <SpecPlate left={p.plate[0]} right={p.plate[1]} />
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
