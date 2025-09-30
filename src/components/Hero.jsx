import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle overlays for readability; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Mainnet Ready • Audited • Non-Custodial
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Launch the future of finance with OnChain
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
          A high-performance, modular blockchain protocol designed for real-time settlement, programmable liquidity, and interoperable assets.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#launch"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            Launch OnChain
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#docs"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Read the docs
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
          {[
            ['0.8s', 'Finality'],
            ['30k+', 'TPS'],
            ['<1¢', 'Fees'],
            ['100%', 'Uptime*'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-white/40">* Uptime based on last quarter validator set metrics.</p>
      </div>
    </section>
  );
}
