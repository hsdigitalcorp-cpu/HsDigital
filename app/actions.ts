"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  error?: string;
} | null;

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Tous les champs sont requis." };
  }

  try {
    // Email interne — notification à HS Digital
    await resend.emails.send({
      from: "HS Digital <noreply@hsdigital.fr>",
      to: "contact@hsdigital.fr",
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      replyTo: email,
    });

    // Email de confirmation au client
    await resend.emails.send({
      from: "HS Digital <noreply@hsdigital.fr>",
      to: email,
      subject: "On a bien reçu votre message — HS Digital",
      text: `Bonjour ${name},\n\nMerci pour votre message. On l'a bien reçu et on revient vers vous sous 24h avec une réponse honnête.\n\nÀ très vite,\nL'équipe HS Digital\ncontact@hsdigital.fr`,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
