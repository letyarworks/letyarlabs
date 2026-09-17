const names = ["MeeNyo", "Letyar Rates", "Pyaw", "SXOPOP", "Letyar Labs", "Web Software", "Product Engineering", "AI Systems"];

export default function PartnerSlider() {
  const items = [...names, ...names];

  return (
    <section className="overflow-hidden border-t border-[#ded8cc] bg-[#f5f0e6] py-10" aria-label="Letyar ecosystem">
      <div className="container-x mb-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#7a736a]">Letyar ecosystem</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center">
          {items.map((name, index) => (
            <div key={`${name}-${index}`} className="flex items-center">
              <div className="mx-5 flex items-center gap-3 whitespace-nowrap sm:mx-8">
                <img src="/mark.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0" />
                <span className="font-display text-sm font-semibold tracking-tight text-[#16130f] sm:text-base">{name}</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-[#d9a441]" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } @media (prefers-reduced-motion: reduce) { .animate-\[marquee_28s_linear_infinite\] { animation-play-state: paused; } }`}</style>
    </section>
  );
}
