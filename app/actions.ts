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
    await resend.emails.send({
      // Replace with a verified domain in production: "HS Digital <noreply@votredomaine.fr>"
      from: "HS Digital <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "hs.digitalcorp@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      replyTo: email,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
