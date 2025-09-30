import React from 'react';
import { Shield, Globe, Zap, Link as LinkIcon } from 'lucide-react';

const features = [
  {
    title: 'Permissionless Security',
    desc: 'Validator-powered consensus with slashing and on-protocol incentives to keep the network honest and performant.',
    icon: Shield,
    color: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Global Interoperability',
    desc: 'Native bridges and IBC-style channels enable seamless asset and message transfers across ecosystems.',
    icon: Globe,
    color: 'from-cyan-400 to-blue-400',
  },
  {
    title: 'Lightning Performance',
    desc: 'Optimized mempool, parallel execution, and optimistic confirmations deliver sub-second finality at scale.',
    icon: Zap,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Composable Primitives',
    desc: 'Programmable liquidity, vaults, and intent-based order flow—compose DeFi like building blocks.',
    icon: LinkIcon,
    color: 'from-violet-400 to-fuchsia-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Built for builders, secured for everyone
          </h2>
          <p className="mt-3 text-white/70">
            OnChain is a modular L1/L2 architecture that prioritizes security, speed, and seamless composability across ecosystems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-black shadow-lg shadow-cyan-500/10`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div id="protocol" className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="text-lg font-semibold text-white">Consensus</h4>
            <p className="mt-2 text-sm text-white/70">
              Tendermint-inspired BFT with optimistic pipelining. Safety via stake-weighted voting and adaptive timeouts.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="text-lg font-semibold text-white">Execution</h4>
            <p className="mt-2 text-sm text-white/70">
              Parallel transaction execution with conflict detection. Deterministic outcomes and predictable gas.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="text-lg font-semibold text-white">Data & Availability</h4>
            <p className="mt-2 text-sm text-white/70">
              Data sharding and DA integrations ensure low-latency reads and resilient block propagation.
            </p>
          </div>
        </div>

        <div id="docs" className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-white/60">
            Dive deeper into the OnChain stack, SDKs, and validator economics.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#" className="rounded-md border border-white/15 bg-black/40 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Whitepaper
            </a>
            <a href="#" className="rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
              Developer Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
