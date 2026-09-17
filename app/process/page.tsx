const steps = [
  ["01", "Discover", "Understand the problem, users, constraints, and useful outcome."],
  ["02", "Design", "Shape the product, interface, information architecture, and technical direction."],
  ["03", "Build", "Develop the core experience with practical engineering and continuous testing."],
  ["04", "Ship", "Launch, measure, improve, document, and maintain the product."],
];

export default function ProcessPage() {
  return <main className="min-h-screen bg-[#faf7f0] text-[#16130f]"><header className="border-b border-[#ded8cc]"><div className="container-x flex h-16 items-center justify-between"><a href="/" className="flex items-center gap-3 font-display font-semibold"><img src="/mark.svg" alt="Letyar" className="h-8 w-8" /><span>letyar<span className="text-[#b23a22]">.</span></span></a><a href="/" className="text-sm text-[#7a736a] hover:text-[#b23a22]">← Home</a></div></header><section className="container-x py-24 sm:py-32"><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#b23a22]">Process</p><h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-7xl">From a useful idea to shipped software.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#7a736a]">A straightforward product workflow designed to reduce wasted work and keep the outcome visible.</p><div className="mt-16 grid gap-4 md:grid-cols-4">{steps.map(([num,title,text])=><article key={num} className="rounded-2xl border border-[#ded8cc] bg-[#f5f0e6] p-7 sm:p-8"><span className="font-mono text-xs text-[#b23a22]">{num}</span><h2 className="mt-12 font-display text-2xl font-semibold">{title}</h2><p className="mt-4 text-sm leading-7 text-[#7a736a]">{text}</p></article>)}</div></section></main>;
}
