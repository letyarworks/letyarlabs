const services = [
  ["01", "Web Software", "Fast, reliable web products built around real business needs.", "Web applications, dashboards, websites, APIs, and internal tools."],
  ["02", "Mobile Products", "Focused mobile experiences for useful products, not feature noise.", "Cross-platform apps, product MVPs, camera/media experiences, and mobile UX."],
  ["03", "AI Systems", "Practical AI features integrated where they create measurable value.", "AI APIs, assistants, automation, retrieval, and product intelligence."],
  ["04", "Product Engineering", "From product direction to shipping, iteration, and maintenance.", "Architecture, technical planning, implementation, launch, and ongoing improvement."],
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#16130f]">
      <header className="border-b border-[#ded8cc]">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-display font-semibold"><img src="/mark.svg" alt="Letyar" className="h-8 w-8" /><span>letyar<span className="text-[#b23a22]">.</span></span></a>
          <a href="/" className="text-sm text-[#7a736a] hover:text-[#b23a22]">← Home</a>
        </div>
      </header>
      <section className="container-x py-24 sm:py-32">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Services</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-7xl">Software that solves the actual problem.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#7a736a]">Letyar builds practical digital products from idea to shipped software, with the technical details kept visible.</p>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map(([num, title, text, detail]) => <article key={num} className="card rounded-2xl p-7 sm:p-9"><span className="font-mono text-xs text-[#b23a22]">{num}</span><h2 className="mt-12 font-display text-2xl font-semibold">{title}</h2><p className="mt-3 text-lg leading-8 text-[#16130f]">{text}</p><p className="mt-5 text-sm leading-7 text-[#7a736a]">{detail}</p></article>)}
        </div>
      </section>
    </main>
  );
}
