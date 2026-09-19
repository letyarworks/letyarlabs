"use client";

import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Work", "/work"],
  ["Process", "/process"],
  ["Labs", "/labs"],
  ["Founder", "/founder"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-10 w-10 place-items-center rounded-full border border-[#ded8cc] text-[#16130f] hover:border-[#b23a22] hover:text-[#b23a22]"
      >
        <span className="relative block h-4 w-5">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-16 border-b border-[#ded8cc] bg-[#faf7f0]">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-[#ded8cc] py-4 text-base font-medium last:border-b-0 hover:text-[#b23a22]"
              >
                {label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-[#b23a22] px-5 py-3 text-sm font-semibold text-white"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
