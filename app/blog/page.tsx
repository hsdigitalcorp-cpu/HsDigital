import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "./data";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — HS Digital | Automatisation, SEO, Google Ads",
  description:
    "Stratégies concrètes pour développer votre activité : automatisation IA, SEO local, Google Ads, SaaS métier. Des articles actionnables pour PME et artisans.",
};

export default function BlogPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EEF2FF] to-white pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6A8AFF]/10 text-[#6A8AFF] text-xs font-semibold tracking-widest uppercase">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Ressources &amp;{" "}
            <span className="bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-lg text-[#0F172A]/60 max-w-xl leading-relaxed">
            Stratégies concrètes pour développer votre activité.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <BlogList articles={articles} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
