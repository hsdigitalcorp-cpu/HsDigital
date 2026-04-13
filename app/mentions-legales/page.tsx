import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — HS Digital",
  description: "Mentions légales du site HS Digital.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-[#0F172A]">{title}</h2>
      <div className="text-sm text-[#0F172A]/65 leading-relaxed flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      <Navbar />

      <main className="pt-36 pb-24 px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#A0B6D6]/50 text-[#A0B6D6] text-xs font-semibold tracking-widest uppercase mb-5">
              Légal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Mentions légales
            </h1>
          </div>

          <div className="flex flex-col gap-8 pt-4 border-t border-[#0F172A]/8">
            <Section title="Éditeur du site">
              <p>
                Ce site est édité par <strong>HS Digital</strong>.
              </p>
              <p>
                Email :{" "}
                <a
                  href="mailto:hs.digitalcorp@gmail.com"
                  className="text-[#6A8AFF] hover:underline"
                >
                  hs.digitalcorp@gmail.com
                </a>
              </p>
            </Section>

            <Section title="Hébergement">
              <p>
                Ce site est hébergé par{" "}
                <strong>Vercel Inc.</strong>
              </p>
              <p>340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p>
                Site web :{" "}
                <span className="text-[#0F172A]/50">vercel.com</span>
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels, structure,
                code) est la propriété exclusive de <strong>HS Digital</strong>,
                sauf mention contraire. Toute reproduction, représentation,
                modification ou exploitation, même partielle, sans autorisation
                écrite préalable est interdite.
              </p>
            </Section>

            <Section title="Cookies et traçage">
              <p>
                Ce site n&apos;utilise pas de cookies de tracking ou d&apos;analyse
                comportementale. Aucune donnée de navigation n&apos;est transmise à
                des tiers à des fins publicitaires ou analytiques.
              </p>
              <p>
                Le formulaire de contact collecte uniquement les informations
                nécessaires au traitement de votre demande (nom, email, message).
                Ces données ne sont pas revendues et sont conservées uniquement
                pour répondre à votre demande.
              </p>
            </Section>

            <Section title="Contact">
              <p>Pour toute question relative à ce site :</p>
              <p>
                Email :{" "}
                <a
                  href="mailto:hs.digitalcorp@gmail.com"
                  className="text-[#6A8AFF] hover:underline"
                >
                  hs.digitalcorp@gmail.com
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
