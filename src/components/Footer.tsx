const NAV = [
  { label: "Oferta", href: "#oferta" },
  { label: "Proces", href: "#proces" },
  { label: "Zastosowania", href: "#zastosowania" },
  { label: "Pakiety", href: "#pakiety" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-vn-charcoal text-vn-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div>
            <p className="wordmark text-[1.6rem]">
              <em>vis</em>NEX
            </p>
            <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-vn-cream/55">
              Wizualizacje AI dla stron, ofert i reklam marek wnętrzarskich.
              AI pod kontrolą człowieka.
            </p>
          </div>

          <nav aria-label="Nawigacja w stopce" className="flex flex-col gap-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="spec text-vn-cream/60 transition-colors hover:text-vn-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="spec text-vn-cream/40">Kontakt</p>
            <a
              href="mailto:kontakt@visnex.pl"
              className="spec text-vn-cream/60 transition-colors hover:text-vn-cream"
            >
              kontakt@visnex.pl
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="spec text-vn-cream/35">
            © {new Date().getFullYear()} visNEX. Wszelkie prawa zastrzeżone.
          </p>
          <p className="spec text-vn-cream/35">
            wizualizacje sprzedażowe · realizm · kontrola jakości
          </p>
        </div>
      </div>
    </footer>
  );
}
