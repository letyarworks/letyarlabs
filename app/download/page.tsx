import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letyar Rates — Download",
  description: "Download Letyar Rates for Android. Exchange rates and gold rates in one practical utility.",
};

const apkUrl =
  "https://github.com/letyarworks/letyar-rates/releases/download/v1.0.0/Letyar-Rates-v1.0.0.apk";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <header className="border-b border-white/8">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">
            Letyar<span className="text-[#25d9ff]">.</span>
          </a>
          <a
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Letyar Labs
          </a>
        </div>
      </header>

      <section className="grid-bg glow flex min-h-[calc(100vh-65px)] items-center">
        <div className="container-x w-full py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#25d9ff]">
              Letyar Labs · Android
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Letyar Rates
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              A practical rate utility for checking exchange rates and gold rates,
              built by Letyar.
            </p>

            <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-[#0b1728] p-7 text-left sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-2xl font-semibold">Android</p>
                  <p className="mt-2 text-sm text-slate-500">Latest release · v1.0.0</p>
                </div>
                <span className="rounded-full border border-[#25d9ff]/20 px-3 py-1 text-[11px] text-[#25d9ff]">
                  APK
                </span>
              </div>

              <a
                href={apkUrl}
                className="mt-8 flex items-center justify-center rounded-full bg-[#25d9ff] px-6 py-3.5 text-sm font-semibold text-[#07111f] transition hover:opacity-90"
              >
                Download APK
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                The download is hosted by GitHub Releases.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>Exchange Rates</span>
              <span className="text-[#f5b942]">•</span>
              <span>Gold · 1 Kyattha</span>
              <span className="text-[#f5b942]">•</span>
              <span>Built by Letyar</span>
            </div>

            <p className="mt-12 text-sm text-slate-600">
              Every build carries a fingerprint.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
