const services = [
  ["01", "Web Software", "Fast, reliable web products built around real business needs."],
  ["02", "Mobile Products", "Focused mobile experiences for useful products, not feature noise."],
  ["03", "AI Systems", "Practical AI features, APIs, and automation integrated into products."],
  ["04", "Product Engineering", "From product direction to shipping, iteration, and maintenance."],
];

const work = [
  ["MeeNyo", "Privacy-first social mobile product", "Building"],
  ["Letyar Rates", "Exchange-rate utility product", "Building"],
  ["Pyaw", "Chat and communication product", "Building"],
  ["SXOPOP", "Intelligent digital product ecosystem", "Building"],
];

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Letyar<span className="text-[#25d9ff]">.</span></a>
          <nav className="hidden gap-7 text-sm text-slate-400 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="mailto:hello@letyarlabs.com" className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium hover:border-[#25d9ff]/60 hover:text-[#25d9ff]">Start a project</a>
        </div>
      </header>

      <section id="top" className="grid-bg glow flex min-h-[760px] items-center pt-24">
        <div className="container-x py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-[#25d9ff]">Letyar Labs · Web Software & Product</p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              Build useful things.<br />Ship them well.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We build practical web software, mobile products, AI systems, and digital tools from Myanmar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-[#25d9ff] px-6 py-3 text-sm font-semibold text-[#07111f] hover:opacity-90">View selected work</a>
              <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/30">Talk to Letyar</a>
            </div>
          </div>
          <div className="mt-24 flex items-center gap-4 text-sm text-slate-500">
            <span className="h-px w-12 bg-[#f5b942]" />
            Every build carries a fingerprint.
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/8 py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#f5b942]">What we build</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Engineering with a product mindset.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(([num, title, text]) => (
              <article key={num} className="card rounded-2xl p-7 sm:p-8">
                <span className="text-xs text-slate-600">{num}</span>
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/8 bg-[#091523] py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#25d9ff]">Selected work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Products in motion.</h2>
            </div>
            <span className="text-sm text-slate-500">More projects coming soon.</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {work.map(([name, description, status]) => (
              <article key={name} className="group rounded-2xl border border-white/8 bg-[#07111f] p-7 transition hover:-translate-y-1 hover:border-white/15 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <span className="rounded-full border border-[#25d9ff]/20 px-3 py-1 text-[11px] text-[#25d9ff]">{status}</span>
                </div>
                <p className="mt-16 text-sm text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/8 py-24 sm:py-32">
        <div className="container-x">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5b942]">Process</p>
          <div className="mt-12 grid gap-0 md:grid-cols-4">
            {[["01", "Discover"], ["02", "Design"], ["03", "Build"], ["04", "Ship"]].map(([num, title]) => (
              <div key={num} className="border-l border-white/10 py-5 pl-6 md:min-h-40 md:border-t md:pl-5 md:pt-7">
                <span className="text-xs text-slate-600">{num}</span>
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/8 py-24 sm:py-32">
        <div className="container-x">
          <div className="rounded-3xl border border-white/10 bg-[#0b1728] p-8 sm:p-14">
            <p className="text-sm uppercase tracking-[0.2em] text-[#25d9ff]">Start a project</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Have something worth building?</h2>
            <p className="mt-6 max-w-xl leading-7 text-slate-400">Tell us what you are trying to build, improve, or ship.</p>
            <a href="mailto:hello@letyarlabs.com" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07111f]">hello@letyarlabs.com</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-8">
        <div className="container-x flex flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Letyar Labs. Every build carries a fingerprint.</div>
          <div className="flex gap-5">
            <a href="https://github.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://x.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href="https://www.linkedin.com/in/letyarworks" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://t.me/letyarworks" target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
