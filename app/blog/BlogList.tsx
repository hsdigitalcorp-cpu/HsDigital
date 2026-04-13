"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Article } from "./data";

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

function CategoryPill({ categorie }: { categorie: string }) {
  const color = CATEGORY_COLORS[categorie] || "#A0B6D6";
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: `${color}18`, color }}
    >
      {categorie}
    </span>
  );
}

export default function BlogList({ articles }: { articles: Article[] }) {
  const allCategories = ["Tous", ...Array.from(new Set(articles.map((a) => a.categorie)))];
  const [selected, setSelected] = useState("Tous");

  const filtered =
    selected === "Tous" ? articles : articles.filter((a) => a.categorie === selected);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selected === cat
                ? "bg-[#6A8AFF] text-white"
                : "bg-white/60 border border-[#0F172A]/10 text-[#0F172A]/60 hover:border-[#6A8AFF]/40 hover:text-[#6A8AFF]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#F8FAFF] border border-[#0F172A]/8 hover:border-[#6A8AFF]/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <CategoryPill categorie={article.categorie} />
              <span className="flex items-center gap-1 text-xs text-[#0F172A]/40">
                <Clock size={12} />
                {article.tempsLecture} min
              </span>
            </div>

            <h2 className="font-bold text-[#0F172A] leading-snug group-hover:text-[#6A8AFF] transition-colors line-clamp-3">
              {article.titre}
            </h2>

            <p className="text-sm text-[#0F172A]/60 leading-relaxed line-clamp-3 flex-1">
              {article.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#0F172A]/8 text-xs text-[#0F172A]/40">
              <span>{formatDate(article.date)}</span>
              <span className="flex items-center gap-1 text-[#6A8AFF] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Lire <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
