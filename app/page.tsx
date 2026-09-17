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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded8cc] bg-[#faf7f0]/95 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight text-[#16130f]">
            letyar<span className="text-[#b23a22]">.</span>
          </a>
          <nav className="hidden gap-7 text-sm text-[#7a736a] md:flex">
            <a href="#services" className="transition hover:text-[#b23a22]">Services</a>
            <a href="#work" className="transition hover:text-[#b23a22]">Work</a>
            <a href="#process" className="transition hover:text-[#b23a22]">Process</a>
            <a href="#contact" className="transition hover:text-[#b23a22]">Contact</a>
          </nav>
          <a href="mailto:hello@letyarlabs.com" className="rounded-full border border-[#b23a22] px-4 py-2 text-xs font-semibold text-[#b23a22] transition hover:bg-[#b23a22] hover:text-white">
            Start a project
          </a>
        </div>
      </header>

      <section id="top" className="grid-bg glow flex min-h-[760px] items-center border-b border-[#ded8cc] pt-24">
        <div className="container-x py-24">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Letyar Labs · Web Software & Product</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#16130f] sm:text-7xl lg:text-8xl">
              Build useful things.<br /><span className="text-[#b23a22]">Ship them well.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#7a736a] sm:text-xl">
              We build practical web software, mobile products, AI systems, and digital tools from Myanmar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-[#b23a22] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8f2e1b]">View selected work</a>
              <a href="#contact" className="rounded-full border border-[#ded8cc] bg-[#f5f0e6] px-6 py-3 text-sm font-semibold text-[#16130f] transition hover:border-[#b23a22] hover:text-[#b23a22]">Talk to Letyar</a>
            </div>
          </div>
          <div className="mt-24 flex items-center gap-4 text-sm font-medium text-[#7a736a]">
            <span className="h-px w-12 bg-[#d9a441]" />
            Every build carries a fingerprint.
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[#ded8cc] py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">What we build</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-[#16130f] sm:text-5xl">Engineering with a product mindset.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(([num, title, text]) => (
              <article key={num} className="card rounded-2xl p-7 sm:p-8">
                <span className="font-mono text-xs font-medium text-[#b23a22]">{num}</span>
                <h3 className="mt-10 font-display text-xl font-semibold text-[#16130f]">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-[#7a736a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[#ded8cc] bg-[#f5f0e6] py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Selected work</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-[#16130f] sm:text-5xl">Products in motion.</h2>
            </div>
            <span className="text-sm text-[#7a736a]">More projects coming soon.</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {work.map(([name, description, status]) => (
              <article key={name} className="group rounded-2xl border border-[#ded8cc] bg-[#faf7f0] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#b23a22] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-[#16130f]">{name}</h3>
                  <span className="rounded-full border border-[#d9a441] bg-[#faf7f0] px-3 py-1 font-mono text-[10px] font-medium text-[#16130f]">{status}</span>
                </div>
                <p className="mt-16 text-sm text-[#7a736a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-[#ded8cc] py-24 sm:py-32">
        <div className="container-x">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Process</p>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {process.map(([num, title, text]) => (
              <div key={num} className="rounded-2xl border border-[#ded8cc] bg-[#f5f0e6] p-6">
                <span className="font-mono text-xs font-medium text-[#b23a22]">{num}</span>
                <h3 className="mt-7 font-display text-lg font-semibold text-[#16130f]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7a736a]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="container-x">
          <div className="rounded-3xl border border-[#ded8cc] bg-[#f5f0e6] p-8 sm:p-14">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#b23a22]">Start a project</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.02em] text-[#16130f] sm:text-6xl">Have something worth building?</h2>
            <p className="mt-6 max-w-xl leading-7 text-[#7a736a]">Tell us what you are trying to build, improve, or ship.</p>
            <a href="mailto:hello@letyarlabs.com" className="mt-8 inline-block rounded-full bg-[#b23a22] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8f2e1b]">hello@letyarlabs.com</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ded8cc] py-8">
        <div className="container-x flex flex-col gap-5 text-sm text-[#7a736a] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Letyar Labs. Every build carries a fingerprint.</div>
          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-[#b23a22]">GitHub</a>
            <a href="https://x.com/letyarworks" target="_blank" rel="noreferrer" className="hover:text-[#b23a22]">X</a>
            <a href="https://www.linkedin.com/in/letyarworks" target="_blank" rel="noreferrer" className="hover:text-[#b23a22]">LinkedIn</a>
            <a href="https://t.me/letyarworks" target="_blank" rel="noreferrer" className="hover:text-[#b23a22]">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
