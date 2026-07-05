const ITEMS = [
  "drzwi",
  "podłogi",
  "kuchnie",
  "sztukateria",
  "oświetlenie LED",
  "blaty i kamień",
  "listwy",
  "remonty",
  "home improvement",
];

function Row() {
  return (
    <span className="marquee-row">
      {ITEMS.map((item) => (
        <span key={item} className="inline-flex items-center gap-8">
          <span className="font-display text-[1.35rem] italic">{item}</span>
          <span aria-hidden="true" className="block h-[6px] w-[6px] bg-vn-burgundy" />
        </span>
      ))}
    </span>
  );
}

/** Slow editorial ticker with the industries visNEX works for. */
export function Marquee() {
  return (
    <div
      aria-label={`Branże: ${ITEMS.join(", ")}`}
      className="marquee border-y hairline bg-vn-bg py-5 text-vn-charcoal/80"
    >
      <div className="marquee-track">
        <Row />
        <span aria-hidden="true">
          <Row />
        </span>
      </div>
    </div>
  );
}
