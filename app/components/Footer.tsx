import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mt-1">
              On s&apos;occupe du digital.
              <br />
              Vous vous occupez du reste.
            </p>
            <a
              href="mailto:hs.digitalcorp@gmail.com"
              className="text-sm text-white/35 hover:text-[#6A8AFF] transition-colors mt-1"
            >
              hs.digitalcorp@gmail.com
            </a>
          </div>

          {/* Agence */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mb-1">
              Agence
            </p>
            <Link href="/services" className="text-sm text-white/45 hover:text-[#6A8AFF] transition-colors">
              Services
            </Link>
            <Link href="/comment-ca-marche" className="text-sm text-white/45 hover:text-[#6A8AFF] transition-colors">
              Notre méthode
            </Link>
            <Link href="/blog" className="text-sm text-white/45 hover:text-[#6A8AFF] transition-colors">
              Blog
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mb-1">
              Contact
            </p>
            <Link href="/contact" className="text-sm text-white/45 hover:text-[#6A8AFF] transition-colors">
              Nous contacter
            </Link>
            <Link href="/contact" className="text-sm text-white/45 hover:text-[#6A8AFF] transition-colors">
              Audit gratuit
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 font-mono text-[10px] text-white/20 uppercase tracking-wider">
          <span>© 2026 HS Digital</span>
          <Link href="/mentions-legales" className="hover:text-[#6A8AFF] transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
