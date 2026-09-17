"use client";

import { useEffect, useState } from "react";

const slides = [
  { name: "MeeNyo", type: "Mobile · Social", text: "Privacy-first social product with temporary Stories and focused creator experiences.", label: "01" },
  { name: "Letyar Rates", type: "Mobile · Utility", text: "A practical rate utility designed for fast everyday reference and clean information.", label: "02" },
  { name: "Pyaw", type: "Mobile · Communication", text: "A communication product exploring simple, useful conversations without interface noise.", label: "03" },
  { name: "SXOPOP", type: "Web · AI", text: "An intelligent digital product ecosystem connecting tools, content, and useful experiences.", label: "04" },
];

export default function WorkSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div className="mt-12">
      <div className="relative overflow-hidden rounded-3xl border border-[#ded8cc] bg-[#faf7f0]">
        <div className="grid min-h-[360px] md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between border-b border-[#ded8cc] p-7 md:border-b-0 md:border-r md:p-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-medium text-[#b23a22]">{slide.label} / 04</span>
              <span className="rounded-full border border-[#d9a441] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em]">Building</span>
            </div>
            <div className="mt-16 md:mt-0">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7a736a]">{slide.type}</p>
              <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">{slide.name}</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between p-7 md:p-10">
            <div className="flex justify-end">
              <img src="/mark.svg" alt="" aria-hidden="true" className="h-14 w-14 opacity-80" />
            </div>
            <div>
              <p className="max-w-xl text-lg leading-8 text-[#7a736a] sm:text-xl">{slide.text}</p>
              <a href={`/work#${slide.name.toLowerCase().replaceAll(" ", "-")}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b23a22]">View project <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Selected work slides">
          {slides.map((item, itemIndex) => (
            <button key={item.name} type="button" role="tab" aria-selected={itemIndex === index} aria-label={`Show ${item.name}`} onClick={() => setIndex(itemIndex)} className={`h-1.5 rounded-full transition-all ${itemIndex === index ? "w-10 bg-[#b23a22]" : "w-5 bg-[#ded8cc]"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Previous project" className="grid h-10 w-10 place-items-center rounded-full border border-[#ded8cc] text-[#16130f] hover:border-[#b23a22] hover:text-[#b23a22]">←</button>
          <button type="button" onClick={() => setIndex((index + 1) % slides.length)} aria-label="Next project" className="grid h-10 w-10 place-items-center rounded-full border border-[#ded8cc] text-[#16130f] hover:border-[#b23a22] hover:text-[#b23a22]">→</button>
        </div>
      </div>
    </div>
  );
}
