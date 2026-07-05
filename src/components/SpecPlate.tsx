export function SpecPlate({
  left,
  right,
  tone = "light",
}: {
  left: string;
  right: string;
  tone?: "light" | "dark";
}) {
  const color =
    tone === "light" ? "text-vn-muted" : "text-vn-cream/55";
  return (
    <div className={`spec flex items-baseline justify-between gap-4 ${color}`}>
      <span>{left}</span>
      <span className="text-right">{right}</span>
    </div>
  );
}
