const items = [
  "Rated #1 Law Firm 2024",
  "ABA Certified",
  "Forbes Legal Elite",
  "600+ 5-Star Reviews",
  "Licensed in 12 States",
  "Chambers Ranked",
  "Super Lawyers 2025",
];

export function TrustBar() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-gold/20 bg-bg-secondary py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-accent text-[11px] uppercase text-gold/60 tracking-[0.25em]"
          >
            {item}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
