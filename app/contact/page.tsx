import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — HS Digital",
  description: "Parlons de votre projet. On vous répond sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0EEFF] px-6 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#6A8AFF] bg-[#6A8AFF]/10 rounded-full px-3 py-1.5 mb-8">
            Contact
          </p>
          <h1
            className="font-bold leading-[0.92] tracking-tight text-[#0F172A]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            Parlons de
            <br />
            <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">votre projet.</span>
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[#0F172A]/55 leading-relaxed text-base">
                  Décrivez-nous votre besoin. On revient vers vous sous 24h avec
                  une analyse honnête de ce qu&apos;on peut faire pour vous — et
                  ce qu&apos;on ne peut pas.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0F172A]/30">
                  On peut vous aider si…
                </p>
                {[
                  "Vous avez un projet d'automatisation ou de SaaS à réaliser",
                  "Vous voulez améliorer votre visibilité locale (SEO, Google Ads)",
                  "Vous cherchez un regard extérieur sans vous faire baratiner",
                  "Vous souhaitez un audit gratuit de votre situation digitale",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <span className="text-[#6A8AFF] font-bold leading-none mt-1">—</span>
                    <p className="text-sm text-[#0F172A]/65 leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 border-t border-[#0F172A]/10">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#6A8AFF] shrink-0" />
                  <a
                    href="mailto:hs.digitalcorp@gmail.com"
                    className="text-sm text-[#0F172A]/60 hover:text-[#6A8AFF] transition-colors"
                  >
                    hs.digitalcorp@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-[#6A8AFF] shrink-0" />
                  <p className="text-sm text-[#0F172A]/60">
                    Réponse sous 24h · Lundi au vendredi
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={120}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
