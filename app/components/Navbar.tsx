"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Méthode", href: "/comment-ca-marche" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#6A8AFF]/12 shadow-sm shadow-[#6A8AFF]/8"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold tracking-tight text-[1.1rem] select-none">
          <span style={{ color: "#6A8AFF" }}>H</span>
          <span style={{ color: "#A0B6D6" }}>S</span>
          <span style={{ color: "#38B6FF" }}>/</span>
          <span
            style={{
              color: "#6A8AFF",
              letterSpacing: "0.18em",
              fontSize: "0.8em",
              fontWeight: 700,
            }}
          >
            DIGITAL
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#6A8AFF]"
                  : "text-[#0F172A]/55 hover:text-[#0F172A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-bold px-5 py-2 rounded-full bg-[#6A8AFF] text-white hover:bg-[#38B6FF] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Burger */}
        <button
          className="md:hidden p-2 text-[#0F172A]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#0F172A]/8 px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-base font-medium border-b border-[#0F172A]/8 last:border-0 transition-colors ${
                isActive(link.href)
                  ? "text-[#6A8AFF]"
                  : "text-[#0F172A]/70 hover:text-[#6A8AFF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 py-3 rounded-xl bg-[#6A8AFF] text-white text-center text-sm font-bold hover:bg-[#38B6FF] transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
