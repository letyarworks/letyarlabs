const projects = [
  ["MeeNyo", "Privacy-first social mobile product", "Mobile · Social", "A focused social experience built around temporary Stories, creator expression, and privacy-first interaction."],
  ["Letyar Rates", "Exchange-rate utility product", "Mobile · Utility", "A practical rate utility for everyday reference, designed for fast access to useful market information."],
  ["Pyaw", "Chat and communication product", "Mobile · Communication", "A communication product exploring simple, useful conversations without unnecessary interface noise."],
  ["SXOPOP", "Intelligent digital product ecosystem", "Web · AI", "A broader product ecosystem connecting intelligent tools, content, and digital experiences."],
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#16130f]">
      <header className="border-b border-[#ded8cc]"><div className="container-x flex h-16 items-center justify-between"><a href="/" className="flex items-center gap-3 font-display font-semibold"><img src="/mark.svg" alt="Letyar" className="h-8 w-8" /><span>letyar<span className="text-[#b23a22]">.</span></span></a><a href="/" className="text-sm text-[#7a736a] hover:text-[#b23a22]">← Home</a></div></header>
      <section className="container-x py-24 sm:py-32">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Selected work</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-7xl">Products in motion.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#7a736a]">A selection of products and experiments being designed, built, shipped, and refined by Letyar.</p>
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {projects.map(([name, desc, type, detail]) => <article key={name} className="group rounded-2xl border border-[#ded8cc] bg-[#f5f0e6] p-7 transition hover:-translate-y-1 hover:border-[#b23a22] sm:p-9"><div className="flex items-start justify-between gap-4"><h2 className="font-display text-2xl font-semibold">{name}</h2><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#b23a22]">Building</span></div><p className="mt-14 text-sm font-medium text-[#16130f]">{type}</p><p className="mt-3 text-lg leading-8">{desc}</p><p className="mt-4 text-sm leading-7 text-[#7a736a]">{detail}</p></article>)}
        </div>
      </section>
    </main>
  );
}
