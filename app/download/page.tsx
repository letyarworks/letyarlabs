import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letyar Rates — Download",
  description: "Download Letyar Rates for Android. Exchange rates and gold rates in one practical utility.",
};

const apkUrl =
  "https://github.com/letyarworks/letyar-rates/releases/download/v1.0.0/Letyar-Rates-v1.0.0.apk";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="/" className="font-bold tracking-tight text-slate-950">
            Letyar<span className="text-cyan-600">.</span>
          </a>
          <a href="/" className="text-sm font-medium text-slate-600 transition hover:text-cyan-700">
            Letyar Labs
          </a>
        </div>
      </header>

      <section className="grid-bg glow flex min-h-[calc(100vh-65px)] items-center">
        <div className="container-x w-full py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">
              Letyar Labs · Android
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-7xl">
              Letyar Rates
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              A practical rate utility for checking exchange rates and gold rates,
              built by Letyar.
            </p>

            <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-xl shadow-slate-200/60 sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-2xl font-bold text-slate-950">Android</p>
                  <p className="mt-2 text-sm text-slate-500">Latest release · v1.0.0</p>
                </div>
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-bold text-cyan-700">
                  APK
                </span>
              </div>

              <a
                href={apkUrl}
                className="mt-8 flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-700"
              >
                Download APK
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                The download is hosted by GitHub Releases.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span>Exchange Rates</span>
              <span className="text-amber-500">•</span>
              <span>Gold · 1 Kyattha</span>
              <span className="text-amber-500">•</span>
              <span>Built by Letyar</span>
            </div>

            <p className="mt-12 text-sm font-medium text-slate-500">
              Every build carries a fingerprint.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
