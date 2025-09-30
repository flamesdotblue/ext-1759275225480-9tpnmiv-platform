import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[2px]">
              <div className="h-full w-full rounded-md bg-black flex items-center justify-center">
                <Rocket className="h-4 w-4 text-cyan-300" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white">OnChain</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#protocol" className="hover:text-white transition">Protocol</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>

          <a
            href="#launch"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}
