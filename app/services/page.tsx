import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Nos services — HS Digital",
  description:
    "Automatisation IA, intégrations, SaaS sur mesure, SEO local, Google Ads et réseaux sociaux. Les deux piliers de HS Digital.",
};

const AUTO_SERVICES = [
  { title: "Audit de processus", desc: "On cartographie votre activité pour identifier les tâches répétitives, les oublis récurrents et les goulots d'étranglement." },
  { title: "Automatisation de workflows", desc: "Connexion d'outils, déclencheurs automatiques, zéro saisie manuelle. Chaque tâche répétitive devient un flux automatisé." },
  { title: "Développement SaaS sur mesure", desc: "Application métier pensée pour votre activité — pas un outil générique adapté, mais quelque chose construit pour vous." },
  { title: "Intégrations API", desc: "CRM, ERP, outils marketing, plateformes de paiement — on connecte vos outils pour qu'ils communiquent sans friction." },
  { title: "Chatbots & IA conversationnelle", desc: "Qualification automatique de leads, support client continu, prise de rendez-vous — sans intervention humaine." },
  { title: "Infra & DSI externalisée", desc: "Infra réseau, administration système, poste de travail, sécurité — on devient votre DSI externalisée. Vous avez un parc informatique à gérer sans vouloir recruter un IT interne." },
];

const ACQ_SERVICES = [
  { title: "Création de site web", desc: "Vitrine, landing page ou site multipage — optimisé conversion et référencement naturel dès le départ." },
  { title: "SEO local", desc: "Fiche Google Business, mots-clés géolocalisés, citations locales — pour apparaître en premier quand vos clients cherchent." },
  { title: "Google Ads", desc: "Campagnes Search et Performance Max structurées pour maximiser le ROI. Suivi des conversions, optimisation continue." },
  { title: "Gestion réseaux sociaux", desc: "Stratégie éditoriale, production de contenu, planification — pour une présence cohérente et engageante." },
  { title: "Email marketing & automation", desc: "Séquences de nurturing, newsletters, relances automatiques — transformer vos prospects en clients fidèles." },
  { title: "Production vidéo", desc: "Reels, pubs vidéo, contenu organique — disponible en option pour les clients qui souhaitent passer à la vidéo." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EEFF] px-6 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-8">
            Services
          </p>
          <h1
            className="font-bold leading-[0.92] tracking-tight text-[#0F172A]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            Ce qu&apos;on
            <br />
            construit
            <br />
            <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">pour vous.</span>
          </h1>
        </div>
      </section>

      {/* Pilier 1 */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <span className="inline-block text-[#6A8AFF] bg-[#6A8AFF]/10 text-xs font-bold tracking-[0.2em] uppercase rounded-full px-3 py-1.5">
                01
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mt-5 mb-5 leading-tight">
                Systèmes &amp; Automatisation
              </h2>
              <p className="text-[#0F172A]/55 leading-relaxed max-w-2xl">
                La plupart des PME passent des heures chaque semaine sur des tâches
                répétitives. Ce temps perdu, c&apos;est de l&apos;argent perdu. On audite,
                on identifie, on automatise — vous scalez sans embaucher.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col border-t border-[#0F172A]/10">
            {AUTO_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 50}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-[#0F172A]/10">
                  <p className="font-semibold text-[#0F172A] shrink-0 sm:w-64">{s.title}</p>
                  <p className="text-sm text-[#0F172A]/50 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}>
            <div className="mt-10 flex items-start gap-3 p-6 rounded-xl border border-[#6A8AFF]/30 bg-[#6A8AFF]/5">
              <ExternalLink size={15} className="text-[#6A8AFF] shrink-0 mt-0.5" />
              <p className="text-sm text-[#0F172A]/60">
                <span className="text-[#0F172A] font-semibold">Check-Track</span>
                {" "}— notre propre SaaS B2B pour garages indépendants. Suivi client WhatsApp,
                rappels CT automatiques, collecte d&apos;avis Google.{" "}
                <Link href="/contact" className="text-[#6A8AFF] hover:underline">
                  Nous contacter →
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pilier 2 */}
      <section className="bg-[#F5F8FF] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <span className="inline-block text-[#38B6FF] bg-[#38B6FF]/10 text-xs font-bold tracking-[0.2em] uppercase rounded-full px-3 py-1.5">
                02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mt-5 mb-5 leading-tight">
                Acquisition &amp; Visibilité
              </h2>
              <p className="text-[#0F172A]/55 leading-relaxed max-w-2xl">
                Avoir un bon produit ne suffit plus. On construit votre présence
                digitale de A à Z — chaque action est mesurable, chaque euro investi
                a une raison d&apos;être.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col border-t border-[#0F172A]/10">
            {ACQ_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 50}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-[#0F172A]/10">
                  <p className="font-semibold text-[#0F172A] shrink-0 sm:w-64">{s.title}</p>
                  <p className="text-sm text-[#0F172A]/50 leading-relaxed">{s.desc}</p>
                </div>
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
              On commence par un audit.
              <br />
              C&apos;est gratuit.
            </h2>
            <p className="text-white/70 leading-relaxed max-w-md">
              30 minutes pour analyser votre situation et vous proposer un plan
              d&apos;action concret. Sans engagement.
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
