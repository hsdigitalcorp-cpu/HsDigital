"use client";

import { useActionState } from "react";
import { sendContactEmail, type FormState } from "../actions";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    sendContactEmail,
    null
  );

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-[#6A8AFF]" />
        <p className="text-xl font-semibold text-[#0F172A]">Message envoyé !</p>
        <p className="text-[#0F172A]/60">
          On revient vers vous sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#0F172A]/40">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="bg-transparent border-0 border-b border-[#0F172A]/20 px-0 py-3 text-[#0F172A] placeholder:text-[#0F172A]/25 focus:border-[#6A8AFF] focus:ring-0 focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#0F172A]/40">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          className="bg-transparent border-0 border-b border-[#0F172A]/20 px-0 py-3 text-[#0F172A] placeholder:text-[#0F172A]/25 focus:border-[#6A8AFF] focus:ring-0 focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#0F172A]/40">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Décrivez votre projet..."
          className="bg-transparent border-0 border-b border-[#0F172A]/20 px-0 py-3 text-[#0F172A] placeholder:text-[#0F172A]/25 focus:border-[#6A8AFF] focus:ring-0 focus:outline-none transition-colors resize-none"
        />
      </div>

      {state?.error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          <span>{state.error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#6A8AFF] to-[#38B6FF] text-white font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity shadow-md shadow-[#6A8AFF]/20 mt-2"
      >
        {isPending ? (
          "Envoi en cours…"
        ) : (
          <>
            <Send size={15} />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
}
