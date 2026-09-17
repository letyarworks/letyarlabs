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

const process = [
  ["01", "Discover", "Understand the problem, users, and useful outcome."],
  ["02", "Design", "Shape the product, interface, and technical direction."],
  ["03", "Build", "Develop the core experience with practical engineering."],
  ["04", "Ship", "Launch, measure, improve, and maintain the product."],
];

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-slate-900">
            Letyar<span className="text-cyan-600">.</span>
          </a>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-cyan-700">Services</a>
            <a href="#work" className="hover:text-cyan-700">Work</a>
            <a href="#process" className="hover:text-cyan-700">Process</a>
            <a href="#contact" className="hover:text-cyan-700">Contact</a>
          </nav>
          <a href="mailto:hello@letyarlabs.com" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 hover:border-cyan-500 hover:text-cyan-700">
            Start a project
          </a>
        </div>
      </header>

      <section id="top" className="grid-bg glow flex min-h-[760px] items-center border-b border-slate-200 pt-24">
        <div className="container-x py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">Letyar Labs · Web Software & Product</p>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-7xl lg:text-8xl">
              Build useful things.<br /><span className="text-cyan-700">Ship them well.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              We build practical web software, mobile products, AI systems, and digital tools from Myanmar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-700">View selected work</a>
              <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:border-slate-400">Talk to Letyar</a>
            </div>
          </div>
          <div className="mt-24 flex items-center gap-4 text-sm font-medium text-slate-500">
            <span className="h-px w-12 bg-amber-500" />
            Every build carries a fingerprint.
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-slate-200 py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What we build</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Engineering with a product mindset.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(([num, title, text]) => (
              <article key={num} className="card rounded-2xl p-7 sm:p-8">
                <span className="text-xs font-bold text-cyan-700">{num}</span>
                <h3 className="mt-10 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-slate-200 bg-slate-50 py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Selected work</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Products in motion.</h2>
            </div>
            <span className="text-sm text-slate-500">More projects coming soon.</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {work.map(([name, description, status]) => (
              <article key={name} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-950">{name}</h3>
                  <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700">{status}</span>
                </div>
                <p className="mt-16 text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-slate-200 py-24 sm:py-32">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Process</p>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {process.map(([num, title, text]) => (
              <div key={num} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-xs font-bold text-cyan-700">{num}</span>
                <h3 className="mt-7 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="container-x">
          <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8 sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Start a project</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Have something worth building?</h2>
            <p className="mt-6 max-w-xl leading-7 text-slate-600">Tell us what you are trying to build, improve, or ship.</p>
            <a href="mailto:hello@letyarlabs.com" className="mt-8 inline-block rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-700">hello@letyarlabs.com</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="container-x flex flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Letyar Labs. Every build carries a fingerprint.</div>
          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-cyan-700">GitHub</a>
            <a href="https://x.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-cyan-700">X</a>
            <a href="https://www.linkedin.com/in/letyarworks" target="_blank" rel="noreferrer" className="hover:text-cyan-700">LinkedIn</a>
            <a href="https://t.me/letyarworks" target="_blank" rel="noreferrer" className="hover:text-cyan-700">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
