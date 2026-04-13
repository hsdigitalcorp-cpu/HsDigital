import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.titre} — HS Digital`,
    description: article.description,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Automatisation": "#6A8AFF",
  "Automatisation IA": "#6A8AFF",
  "SEO": "#22c55e",
  "Google Ads": "#f59e0b",
  "SaaS": "#A0B6D6",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const catColor = CATEGORY_COLORS[article.categorie] || "#A0B6D6";

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#0F172A]/40 mb-10">
            <Link href="/" className="hover:text-[#6A8AFF] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#6A8AFF] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#0F172A]/60 line-clamp-1">{article.titre}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${catColor}18`, color: catColor }}
            >
              {article.categorie}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#0F172A]/40">
              <Clock size={12} />
              {article.tempsLecture} min de lecture
            </span>
            <span className="text-xs text-[#0F172A]/40">
              {formatDate(article.date)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#0F172A] mb-10">
            {article.titre}
          </h1>

          {/* Content */}
          <div
            className="prose-article"
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#0F172A",
            }}
            dangerouslySetInnerHTML={{ __html: article.contenu }}
          />

          {/* CTA */}
          <div className="mt-14 p-7 rounded-2xl bg-[#F8FAFF] border border-[#6A8AFF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#0F172A] mb-1">
                Besoin d&apos;aide sur ce sujet ?
              </p>
              <p className="text-sm text-[#0F172A]/60">
                On discute de votre situation — audit gratuit, sans engagement.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6A8AFF] text-white text-sm font-semibold hover:bg-[#38B6FF] transition-colors"
            >
              Nous contacter
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#0F172A]/50 hover:text-[#6A8AFF] transition-colors"
            >
              <ArrowLeft size={15} />
              Tous les articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
