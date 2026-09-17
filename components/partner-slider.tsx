"use client";

import { useEffect, useState } from "react";

// Replace these entries with confirmed partner/collaborator logos as partnerships are established.
const partners = [
  { name: "Partner One", mark: "P1" },
  { name: "Partner Two", mark: "P2" },
  { name: "Partner Three", mark: "P3" },
  { name: "Partner Four", mark: "P4" },
];

export default function PartnerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % partners.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const visible = [0, 1, 2].map((offset) => partners[(index + offset) % partners.length]);

  return (
    <section className="border-t border-[#ded8cc] bg-[#f5f0e6] py-14" aria-label="Partners and collaborators">
      <div className="container-x">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#7a736a]">Partners & collaborators</p>
          <div className="flex gap-2" aria-hidden="true">
            {partners.map((partner, itemIndex) => (
              <span key={partner.name} className={`h-1.5 rounded-full ${itemIndex === index ? "w-8 bg-[#b23a22]" : "w-4 bg-[#ded8cc]"}`} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#ded8cc] bg-[#faf7f0] sm:grid-cols-3">
          {visible.map((partner) => (
            <div key={partner.name} className="flex min-h-24 items-center gap-4 border-b border-[#ded8cc] px-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9a441] font-mono text-xs font-semibold text-[#b23a22]">{partner.mark}</span>
              <span className="font-display text-sm font-semibold text-[#16130f]">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
