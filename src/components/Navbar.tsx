import { useEffect, useState } from "react";

const LINKS = [
  { label: "Oferta", href: "#oferta" },
  { label: "Proces", href: "#proces" },
  { label: "Zastosowania", href: "#zastosowania" },
  { label: "Pakiety", href: "#pakiety" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        open
          ? "border-b border-white/10 bg-vn-charcoal"
          : scrolled
            ? "border-b border-vn-line/80 bg-vn-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Nawigacja główna"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10"
      >
        <a
          href="#top"
          aria-label="visNEX — początek strony"
          className={`wordmark text-[1.35rem] transition-colors duration-500 ${
            dark ? "text-vn-cream" : "text-vn-charcoal"
          }`}
          onClick={() => setOpen(false)}
        >
          <em>vis</em>NEX
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`spec transition-colors duration-300 ${
                dark
                  ? "text-vn-cream/70 hover:text-vn-cream"
                  : "text-vn-muted hover:text-vn-charcoal"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className={`btn !px-5 !py-3 ${dark ? "btn-cream" : "btn-charcoal"}`}
          >
            Zamów wizualizacje
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden ${
            dark ? "text-vn-cream" : "text-vn-charcoal"
          }`}
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] bg-vn-charcoal transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-12">
          <div className="flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl text-vn-cream"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#kontakt" onClick={() => setOpen(false)} className="btn btn-cream w-full">
            Zamów wizualizacje
          </a>
        </div>
      </div>
    </header>
  );
}
