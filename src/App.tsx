/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShoppingBag,
  Vault,
  Store,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Lock,
  Layers,
  CheckCircle2,
  RefreshCw,
  Search,
  MessageSquare
} from 'lucide-react';

interface PortalCard {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  role: string;
  url: string;
  icon: React.ElementType;
  description: string;
  accentColor: string;
  features: string[];
}

export default function App() {
  const [quickSearch, setQuickSearch] = useState('');

  const portals: PortalCard[] = [
    {
      id: 'hub',
      name: 'ViraForce Marketplace Hub',
      badge: 'Public Discovery',
      badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/50',
      role: 'Buyer Discovery & Paystack Checkout',
      url: 'hub.html',
      icon: ShoppingBag,
      description: 'Global storefront with real-time listings, multi-filter keyword query support, instant Paystack checkout, and automatic escrow locking.',
      accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/30 hover:border-cyan-400',
      features: [
        'Global Product Search with URL Parameter Hydration (?query=)',
        'Direct Paystack Modal & Escrow Ingestion',
        'Multi-Item Shopping Cart & Instant Purchase Engine'
      ]
    },
    {
      id: 'order',
      name: 'Client Terminal & Asset Vault',
      badge: 'Buyer Portal',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50',
      role: 'Acquisitions, Decrypted Vault & Comms',
      url: 'order.html',
      icon: Vault,
      description: 'Track orders in real time. Access the Decoupled Digital Vault immediately upon vendor dispatch, confirm receipt with idempotent balance clearance, and message sellers via WhatsApp clone.',
      accentColor: 'from-emerald-500/20 via-green-500/10 to-transparent border-emerald-500/30 hover:border-emerald-400',
      features: [
        'Decoupled Vault: View Credentials, Documents, URLs & Proofs',
        'Idempotent Delivery Confirmation: Moves Processing to Cleared',
        'Real-Time WhatsApp Clone Chat Engine with Typing Indicators',
        'Independent Dispute & Refund Reporting'
      ]
    },
    {
      id: 'vendor',
      name: 'ViraForce Seller Central',
      badge: 'Merchant Console',
      badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-800/50',
      role: 'Product Deliverables, Orders & Payouts',
      url: 'vendor.html',
      icon: Store,
      description: 'Vendor operational engine. Equip listings with multi-type vault deliverables (passwords, PDFs, documents, URLs), dispatch physical/service orders, track 3-stage payout ledger with 18% fee calculation, and launch WhatsApp dispute appeals.',
      accentColor: 'from-amber-500/20 via-yellow-500/10 to-transparent border-amber-500/30 hover:border-amber-400',
      features: [
        'Vault Deliverable Manager: Text Credentials, Documents, URLs, Images',
        'Real-Time 3-Stage Payout Ledger (Pending -> Processing -> Completed)',
        '18% Fee Calculation & 4-Digit Security PIN Verification',
        'Formal Dispute Appeals with WhatsApp Support Bridge'
      ]
    },
    {
      id: 'admin',
      name: 'Nexus Command Elite Admin',
      badge: 'Super Admin',
      badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-800/50',
      role: 'Arbitration Chamber & Settlement Engine',
      url: 'admin.html',
      icon: ShieldAlert,
      description: 'Super Admin control deck. Monitor total platform escrow and cleared member balances, advance 3-stage payout settlements, arbitrate contested orders and counter-appeals, and broadcast global marquee announcements.',
      accentColor: 'from-purple-500/20 via-fuchsia-500/10 to-transparent border-purple-500/30 hover:border-purple-400',
      features: [
        '3-Stage Settlement Advancement & Receipt Generation',
        'Live Dispute Arbitration Queue & Appeal Rebuttal Inspection',
        'Global Marquee Announcement Broadcasting',
        'Bank Directory Addition Approvals'
      ]
    }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      window.location.href = `hub.html?query=${encodeURIComponent(quickSearch.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#03040B] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,229,255,0.12),transparent_70%)]" />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950/50 via-purple-950/40 to-emerald-950/50 border-b border-white/5 py-2.5 px-4 text-center text-xs text-slate-400">
        <span className="font-mono text-cyan-400 font-bold mr-2">ViraForce Enterprise:</span>
        Connected 4-Portal Ecosystem with Live Firebase Firestore Synchronization
      </div>

      {/* Header */}
      <header className="border-b border-white/5 bg-[#050810]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.25)]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tight text-white flex items-center gap-2">
                VIRAFORCE <span className="text-cyan-400 text-xs font-mono uppercase px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">PORTAL NETWORK</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Unified Marketplace, Client Terminal, Seller Central & Nexus Command</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex relative items-center">
              <Search className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="Search products or PID..."
                className="bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 w-52 transition-all font-mono"
              />
            </form>
            <a
              href="hub.html"
              className="bg-cyan-500 hover:bg-white text-black font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center gap-1.5"
            >
              Open Hub Market <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" /> All 4 Interconnected Portals Fully Operational
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Select Your Operating Portal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The ViraForce architecture connects buyers, sellers, and super administrators through a shared Firestore data pipeline with automated escrow locking, vault deliverable decrypting, and 3-stage settlements.
          </p>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <div
                key={portal.id}
                className={`group relative rounded-3xl p-8 bg-gradient-to-br ${portal.accentColor} border backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-cyan-300" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${portal.badgeColor}`}>
                      {portal.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {portal.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">
                      {portal.role}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {portal.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Key System Connections:
                    </p>
                    <ul className="space-y-1.5">
                      {portal.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={portal.url}
                    className="w-full bg-white/5 hover:bg-cyan-500 text-white hover:text-black font-black py-4 px-6 rounded-2xl text-xs uppercase tracking-widest border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                  >
                    Launch {portal.name.split(' ')[0]} Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Life-Cycle Flow */}
        <div className="rounded-3xl p-8 bg-[#0A0D14]/90 border border-white/5 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-cyan-400" /> End-to-End Escrow & Settlement Architecture
            </h4>
            <span className="text-xs font-mono text-slate-400">100% Firestore Authoritative</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold">1</div>
              <p className="text-white font-bold">Checkout & Escrow Lock</p>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">
                Buyer acquires item via Paystack on Hub.html. Order logged to Firestore with status "Processing".
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">2</div>
              <p className="text-white font-bold">Vendor Dispatch</p>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">
                Vendor marks delivered or releases payload on Vendor.html. Funds move to processingBalance. Deliverables appear in buyer's Digital Vault.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">3</div>
              <p className="text-white font-bold">Delivery Confirmation</p>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">
                Buyer confirms receipt on Order.html. Amount atomically moves from vendor processingBalance to withdrawableBalance & totalEarned.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">4</div>
              <p className="text-white font-bold">3-Stage Payout</p>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">
                Vendor requests payout with 18% fee deduction and PIN. Super Admin transitions through Pending &rarr; Processing &rarr; Completed on Admin.html.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
