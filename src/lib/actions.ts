"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";

const resend = new Resend('re_EpxYEKs2_7HuGVBRjcnZ7mGrRxBrTMamb');

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ahmad.khan200499@gmail.com',
      replyTo: [email],
      cc: [email],
      subject: `New message from ${name}!`,
      text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
      // react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      console.error(error?.message);
      throw new Error("Failed to send email!");
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
