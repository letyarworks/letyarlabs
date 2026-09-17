export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#16130f]">
      <header className="border-b border-[#ded8cc]">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-display font-semibold" aria-label="Letyar Labs home">
            <img src="/mark.svg" alt="Letyar" className="h-8 w-8" />
            <span>letyar<span className="text-[#b23a22]">.</span></span>
          </a>
          <a href="/" className="text-sm text-[#7a736a] hover:text-[#b23a22]">← Home</a>
        </div>
      </header>

      <section className="container-x py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Founder</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-7xl">Aung Bo Bo Kyaw</h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-[#7a736a] sm:text-3xl">Building practical digital products from Myanmar.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-[#ded8cc] pt-12 md:grid-cols-[1.15fr_.85fr]">
          <div className="text-lg leading-8 text-[#7a736a]">
            <p>Letyar is built around a simple idea: every build carries a fingerprint.</p>
            <p className="mt-6">The work spans web software, mobile products, AI systems, and product engineering — with a focus on useful interfaces, clear technical decisions, and products that can keep evolving after launch.</p>
          </div>
          <div className="border border-[#ded8cc] bg-[#f5f0e6] p-7">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Letyar</p>
            <p className="mt-5 font-display text-2xl font-semibold">Web Software<br />& Product Engineering</p>
            <p className="mt-5 text-sm leading-6 text-[#7a736a]">Yangon, Myanmar</p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="https://github.com/letyarworks" target="_blank" rel="noreferrer" className="rounded-full border border-[#ded8cc] bg-[#f5f0e6] px-5 py-3 text-sm font-semibold hover:border-[#b23a22] hover:text-[#b23a22]">GitHub</a>
          <a href="/contact" className="rounded-full bg-[#b23a22] px-5 py-3 text-sm font-semibold text-white">Work with Letyar</a>
        </div>
      </section>
    </main>
  );
}
