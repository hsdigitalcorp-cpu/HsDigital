import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Réalisations — HS Digital",
  description:
    "Autoomat, Atelier Pro G, Check-Track — des projets concrets avec des résultats mesurables.",
};

const PROJECTS = [
  {
    name: "Autoomat",
    sub: "Carrosserie premium · Ivry-sur-Seine (94)",
    sector: "Automobile",
    tagline: "Stratégie digitale complète",
    desc: "Présence digitale quasi inexistante malgré une qualité de service reconnue. On a construit la visibilité de zéro : réseaux sociaux, SEO local, Google Ads, Google Business Profile optimisé.",
    details: [
      { label: "Réseaux sociaux", text: "Contenu régulier (avant/après, témoignages, coulisses), planning éditorial mensuel, animation communauté." },
      { label: "SEO local", text: "Google Business Profile complet, mots-clés géolocalisés, citations locales pour dominer les recherches locales." },
      { label: "Google Ads", text: "Campagnes Search sur les requêtes locales à fort intent : carrosserie Ivry, débosselage Val-de-Marne..." },
    ],
    tags: ["Réseaux sociaux", "SEO local", "Google Ads", "Google Business"],
  },
  {
    name: "Atelier Pro G",
    sub: "Garage multimarque · Ivry-sur-Seine (94)",
    sector: "Automobile",
    tagline: "Réseaux sociaux + Google Ads",
    desc: "Développer la clientèle particuliers tout en maintenant l'activité B2B. On a structuré la présence sociale et mis en place une stratégie Ads ciblée par prestation.",
    details: [
      { label: "Réseaux sociaux", text: "Stratégie axée transparence et proximité client, publication régulière, ton adapté à l'artisan local." },
      { label: "Google Ads", text: "Campagnes Search segmentées par type de prestation : vidange, freins, pneumatiques, révision." },
    ],
    tags: ["Réseaux sociaux", "Google Ads"],
  },
  {
    name: "Check-Track",
    sub: "SaaS B2B · Application métier garages",
    sector: "Tech / SaaS",
    tagline: "Développement SaaS complet",
    desc: "Problème identifié : les garages indépendants perdent des clients par manque de suivi et de communication proactive. On a construit l'outil qui résout ça.",
    details: [
      { label: "Suivi client WhatsApp", text: "Notifications automatiques à chaque étape de la réparation — dépôt, diagnostic, travaux, prêt à récupérer." },
      { label: "Collecte d'avis Google", text: "Demande automatique après chaque intervention. Résultat : multiplication des avis sans effort manuel." },
      { label: "Rappels CT & révision", text: "SMS/WhatsApp automatiques avant les échéances — fidélisation passive, zéro effort." },
      { label: "Stack technique", text: "PWA · Next.js 14 · Supabase · Stripe · Twilio (SMS/WhatsApp API)." },
    ],
    tags: ["Next.js 14", "Supabase", "Stripe", "Twilio", "PWA"],
  },
];

export default function RealisationsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EEFF] px-6 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-8">
            Portfolio
          </p>
          <h1
            className="font-bold leading-[0.92] tracking-tight text-[#0F172A]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            Concret.
            <br />
            <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">Mesurable.</span>
            <br />
            Livré.
          </h1>
        </div>
      </section>

      {/* Projects — alternés */}
      {PROJECTS.map((project, i) => (
        <section
          key={project.name}
          className={`px-6 py-24 ${i % 2 === 1 ? "bg-[#F8FAFF]" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-start justify-between gap-6 mb-12 flex-wrap">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h2
                      className="font-bold leading-tight text-[#0F172A]"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                    >
                      {project.name}
                    </h2>
                    <span className="px-2.5 py-1 rounded-full bg-[#A0B6D6]/20 text-[#A0B6D6] text-[11px] font-bold tracking-widest uppercase">
                      {project.sector}
                    </span>
                  </div>
                  <p className="text-sm text-[#0F172A]/40">
                    {project.sub}
                  </p>
                </div>
                <span className="text-sm font-semibold px-4 py-2 rounded-full border border-[#6A8AFF]/30 text-[#6A8AFF]">
                  {project.tagline}
                </span>
              </div>

              <p className="leading-relaxed mb-12 max-w-2xl text-[#0F172A]/60">
                {project.desc}
              </p>
            </FadeIn>

            <div className="flex flex-col border-t border-[#0F172A]/10">
              {project.details.map((d, j) => (
                <FadeIn key={d.label} delay={j * 50}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-[#0F172A]/10">
                    <p className="font-semibold shrink-0 sm:w-52 text-[#0F172A]">
                      {d.label}
                    </p>
                    <p className="text-sm leading-relaxed text-[#0F172A]/50">
                      {d.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-[#0F172A]/15 text-[#0F172A]/45 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* CTA — gradient */}
      <section className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] px-6 py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Prochain sur la liste ?
            </h2>
            <p className="text-white/70 leading-relaxed">
              On commence toujours par un audit gratuit pour voir si on peut vraiment vous aider.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#6A8AFF] font-bold hover:bg-[#F8FAFF] transition-colors"
            >
              Discutons de votre projet
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
