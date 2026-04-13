import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Notre méthode — HS Digital",
  description:
    "Audit, proposition sur mesure, build, suivi. Une méthode claire du premier appel au livrable — sans surprise.",
};

const STEPS = [
  {
    n: "01",
    title: "Audit & Découverte",
    desc: "On analyse votre activité, vos outils actuels et vos objectifs. On identifie où vous perdez du temps et d'où viennent — ou pourraient venir — vos clients. Cette étape est gratuite et sans engagement.",
  },
  {
    n: "02",
    title: "Proposition sur mesure",
    desc: "Plan d'action concret : périmètre, livrables, timeline, tarif fixe. Pas de devis vague — vous savez exactement ce que vous allez recevoir et quand.",
  },
  {
    n: "03",
    title: "Build & Exécution",
    desc: "On construit. Semaine par semaine, vous voyez avancer. Points réguliers, transparence totale. On livre ce qu'on a promis, dans les délais convenus.",
  },
  {
    n: "04",
    title: "Suivi & Optimisation",
    desc: "Après livraison, on mesure. SEO, ads, systèmes — tout est tracké. On ajuste, on améliore, on continue tant que ça fait sens pour votre activité.",
  },
];

const NOT_US = [
  "Contrats longue durée imposés",
  "Rapports PowerPoint inutiles",
  "Jargon incompréhensible",
  "Promesses non mesurables",
];

const FAQ = [
  {
    q: "Vous travaillez avec quels types de clients ?",
    a: "PME, TPE, artisans et indépendants. On est spécialisés dans le secteur automobile — garages, carrosseries, concessions — mais on travaille aussi avec d'autres secteurs. Ce qui compte : avoir un vrai besoin mesurable.",
  },
  {
    q: "Quels sont vos délais ?",
    a: "Ça dépend du projet. Un site vitrine : 2-3 semaines. Une automatisation simple : 1-2 semaines. Un SaaS sur mesure : 4-8 semaines. On le précise toujours avant de démarrer — vous ne découvrez pas les délais en cours de route.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Tarif fixe par mission, convenu avant le démarrage. Pas de forfait mensuel imposé, pas de surprise. Vous payez pour ce qu'on vous livre, pas pour du temps passé.",
  },
  {
    q: "Vous gérez tout vous-mêmes ?",
    a: "Oui. Pas de sous-traitance opaque, pas d'intermédiaire. Ce qu'on vous promet, c'est nous qui le livrons. C'est pourquoi on sélectionne les projets qu'on accepte.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EEFF] px-6 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-8">
            Méthode
          </p>
          <h1
            className="font-bold leading-[0.92] tracking-tight text-[#0F172A]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            Du premier appel
            <br />
            <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">au livrable.</span>
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col border-t border-[#0F172A]/10">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 60}>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 py-10 border-b border-[#0F172A]/10">
                  <div className="flex items-start gap-6 sm:w-72 shrink-0">
                    <span className="text-5xl font-bold text-[#6A8AFF]/20 leading-none tracking-tight">
                      {s.n}
                    </span>
                    <p className="font-bold text-[#0F172A] text-lg leading-snug pt-1">
                      {s.title}
                    </p>
                  </div>
                  <p className="text-[#0F172A]/50 leading-relaxed text-sm sm:text-base">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'on ne fait pas */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] mb-12">
              Ce qu&apos;on ne fait pas
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {NOT_US.map((item, i) => (
              <FadeIn key={item} delay={i * 50}>
                <div className="flex items-center gap-4 p-6 rounded-xl border border-[#0F172A]/8 bg-[#F8FAFF]">
                  <div className="w-6 h-6 rounded-full border border-red-300 bg-red-50 flex items-center justify-center shrink-0">
                    <X size={11} className="text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="font-medium text-[#0F172A]">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F8FF] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-12">
              Questions fréquentes
            </p>
          </FadeIn>

          <div className="flex flex-col gap-px bg-[#6A8AFF]/8 rounded-xl overflow-hidden">
            {FAQ.map((item, i) => (
              <FadeIn key={item.q} delay={i * 50}>
                <details className="group bg-[#F5F8FF]">
                  <summary className="flex items-center justify-between gap-6 px-0 py-6 cursor-pointer font-semibold text-[#0F172A] list-none select-none border-b border-[#0F172A]/10 group-open:border-[#6A8AFF]/30">
                    <span>{item.q}</span>
                    <span className="text-[#6A8AFF] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="py-5 text-sm text-[#0F172A]/50 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gradient */}
      <section className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] px-6 py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Commencer par un audit gratuit.
            </h2>
            <p className="text-white/70 leading-relaxed">
              30 minutes. Votre situation, vos besoins, ce qu&apos;on peut faire.
              Sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#6A8AFF] font-bold hover:bg-[#F8FAFF] transition-colors"
            >
              Prendre contact
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
