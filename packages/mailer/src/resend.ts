import { Resend } from 'resend';
import { z } from 'zod';

import type { EmailType } from './schema';

const RESEND_API_KEY = z
  .string({
    description: 'The API key for Resend',
    required_error: 'Please provide the API key for Resend',
  })
  .parse(process.env.RESEND_API_KEY);

const resend = new Resend(RESEND_API_KEY);

export function createResendService() {
  return new ResendMailer();
}

class ResendMailer {
  private getContent(email: EmailType) {
    switch (email.contentType) {
      case 'react':
        return { react: email.content };
      case 'html':
        return { html: email.content };
      case 'text':
        return { text: email.content };
    }
  }

  async sendEmail(email: EmailType) {
    const content = this.getContent(email);

    try {
      const { data, error } = await resend.emails.send({
        from: email.from,
        to: email.to,
        subject: email.subject,
        ...content,
      });

      if (error) {
        throw new Error(`Error in sending email: ${error}`);
      }

      return Response.json({ data });
    } catch (error) {
      throw new Error(`Failed to send email: ${error}`);
    }
  }
}
