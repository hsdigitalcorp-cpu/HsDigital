import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import ContactForm from "./components/ContactForm";

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 pt-28 pb-12 bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EEFF]">

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Colonne gauche ── */}
          <div className="flex flex-col gap-9">
            <p className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-4 py-1.5 w-fit">
              HS Digital · Partenaire digital
            </p>

            <h1
              className="font-black tracking-tight text-[#0F172A] leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.4rem)" }}
            >
              Plus de clients.<br />
              <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">
                Moins de charge.
              </span>
            </h1>

            <p className="text-[15px] text-[#0F172A]/50 leading-relaxed max-w-sm">
              On construit les systèmes d&apos;acquisition
              et les outils métier qui font la différence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#6A8AFF]/25"
              >
                Parlons de votre situation
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/comment-ca-marche"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6A8AFF]/25 text-[#6A8AFF] text-sm font-medium hover:border-[#6A8AFF]/50 hover:bg-[#6A8AFF]/5 transition-colors"
              >
                Notre méthode
              </Link>
            </div>
          </div>

          {/* ── Colonne droite ── */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Card 01 — Acquisition */}
            <div className="bg-white/75 backdrop-blur-sm border border-[#6A8AFF]/15 rounded-2xl p-6 flex flex-col gap-4 shadow-sm shadow-[#6A8AFF]/5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-2.5 py-1 uppercase tracking-widest">
                  01
                </span>
                <span className="font-semibold text-[#0F172A] text-sm">Acquisition & Visibilité</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["SEO local", "Google Ads", "Réseaux sociaux", "Email marketing"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-[#6A8AFF]/8 text-[#6A8AFF] text-[11px] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 02 — Systèmes */}
            <div className="bg-white/75 backdrop-blur-sm border border-[#38B6FF]/15 rounded-2xl p-6 flex flex-col gap-4 shadow-sm shadow-[#38B6FF]/5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-[#38B6FF] bg-[#38B6FF]/10 rounded-full px-2.5 py-1 uppercase tracking-widest">
                  02
                </span>
                <span className="font-semibold text-[#0F172A] text-sm">Systèmes & Automatisation</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Automatisation", "SaaS sur mesure", "Intégrations API", "Infra IA"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-[#38B6FF]/8 text-[#38B6FF] text-[11px] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-3 pl-2">
              {[
                { n: "5+", label: "Clients" },
                { n: "3", label: "Secteurs" },
                { n: "100%", label: "Sur mesure" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-7 bg-[#0F172A]/10" />}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xl font-black text-[#0F172A] leading-none">{s.n}</span>
                    <span className="text-[10px] text-[#0F172A]/35 font-mono uppercase tracking-widest">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#6A8AFF]/15">
        <span className="font-mono text-[10px] text-[#0F172A]/30 tracking-widest uppercase">
          Acquisition · Systèmes · IA
        </span>
        <span className="font-mono text-[10px] text-[#0F172A]/30 tracking-widest uppercase">
          Paris · Île-de-France
        </span>
      </div>

    </section>
  );
}

// ─── LOGOS MÉDIAS ─────────────────────────────────────────────────────────────

function LogosMedia() {
  const logos = ["Forbes", "Les Échos", "BFM Business", "Le Monde", "Maddyness"];
  return (
    <section className="bg-white px-6 py-10 border-y border-[#6A8AFF]/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        {logos.map((name) => (
          <span
            key={name}
            className="font-semibold text-sm tracking-wide text-[#0F172A]/20 uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── DEUX PROBLÈMES ───────────────────────────────────────────────────────────

function DeuxProblemes() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-5">
                Deux problèmes. Une adresse.
              </p>
              <h2
                className="font-bold leading-tight tracking-tight text-[#0F172A]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                On reconnaît
                <br />
                votre situation.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6A8AFF] hover:text-[#38B6FF] transition-colors"
            >
              Toutes nos solutions
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Problème 1 */}
          <FadeIn delay={80}>
            <div className="bg-gradient-to-br from-[#F0F5FF] to-white border border-[#6A8AFF]/15 rounded-2xl p-10 flex flex-col gap-6 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF]" />
              <span className="font-mono text-[10px] text-[#6A8AFF] font-bold tracking-[0.2em] uppercase">
                01 — Acquisition
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] leading-snug">
                Vous n&apos;avez pas assez de clients — ou vous ne contrôlez pas d&apos;où ils viennent.
              </h3>
              <p className="text-[#0F172A]/55 leading-relaxed text-sm flex-1">
                SEO local, Google Ads, réseaux sociaux, prospection IA — on construit
                les canaux qui font sonner votre téléphone en continu, sans que vous
                ayez à courir après chaque opportunité.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#6A8AFF]/10">
                {["SEO local", "Google Ads", "Réseaux sociaux", "Prospection IA"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[#6A8AFF]/8 text-[#6A8AFF] text-[11px] font-mono font-medium tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Problème 2 */}
          <FadeIn delay={160}>
            <div className="bg-gradient-to-br from-[#F0F8FF] to-white border border-[#38B6FF]/15 rounded-2xl p-10 flex flex-col gap-6 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#38B6FF] to-[#6A8AFF]" />
              <span className="font-mono text-[10px] text-[#A0B6D6] font-bold tracking-[0.2em] uppercase">
                02 — Systèmes
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] leading-snug">
                Votre business vous prend trop de temps — et certaines tâches tournent encore à la main.
              </h3>
              <p className="text-[#0F172A]/55 leading-relaxed text-sm flex-1">
                Automatisation, SaaS métier, infra IA — on identifie ce qui vous coûte
                des heures et on construit les systèmes qui le font à votre place.
                Vous scalez sans embaucher.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#38B6FF]/10">
                {["Automatisation", "SaaS sur mesure", "Infra IA", "Intégrations API"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[#38B6FF]/8 text-[#38B6FF] text-[11px] font-mono font-medium tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── PROJETS MARQUEE ─────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  { name: "Autoomat", detail: "Carrosserie · SEO local · Google Ads" },
  { name: "Atelier Pro G", detail: "Garage · Réseaux sociaux · Google Ads" },
  { name: "Check-Track", detail: "SaaS B2B · Supabase · Stripe · WhatsApp" },
  { name: "NovaKids", detail: "E-commerce · Campagne organique" },
  { name: "HS Events", detail: "Mariage · Site web · Réseaux sociaux" },
];

function ProjetsTicker() {
  return (
    <section className="bg-white border-y border-[#6A8AFF]/10 py-5 overflow-hidden">
      <div className="flex animate-marquee gap-0 whitespace-nowrap w-max">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8">
            <span className="font-bold text-[#0F172A] text-sm tracking-tight">
              {item.name}
            </span>
            <span className="text-[#0F172A]/30 text-xs font-mono">{item.detail}</span>
            <span className="text-[#6A8AFF]/40 text-lg leading-none">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── CTA BAND ─────────────────────────────────────────────────────────────────

function CtaBand() {
  return (
    <section className="relative bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] px-6 py-24 overflow-hidden">
      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
      {/* Light orb */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <FadeIn>
        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
            Prochaine étape
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-[0.95] tracking-tight">
            Vous avez un problème.
            <br />
            On l&apos;a probablement déjà résolu.
          </h2>
          <p className="text-white/75 leading-relaxed max-w-sm">
            Un audit gratuit de 30 minutes — votre situation, vos freins,
            ce qu&apos;on peut construire ensemble.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#6A8AFF] font-bold hover:bg-[#F0F5FF] transition-colors shadow-lg shadow-black/10"
          >
            Prendre contact
            <ArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── CONTACT INLINE ───────────────────────────────────────────────────────────

function Contact() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 w-fit">
              Contact
            </p>
            <h2
              className="font-bold leading-tight tracking-tight text-[#0F172A]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Décrivez-nous
              <br />
              <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">
                votre situation.
              </span>
            </h2>
            <p className="text-[#0F172A]/50 leading-relaxed text-sm mt-2">
              Pas de pitch générique. On lit, on analyse, on revient
              vers vous sous 24h avec une réponse honnête — et ce
              qu&apos;on ne peut pas faire aussi.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosMedia />
      <ProjetsTicker />
      <DeuxProblemes />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
