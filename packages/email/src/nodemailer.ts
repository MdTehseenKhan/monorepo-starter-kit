import { createTransport } from 'nodemailer';

import type { EmailType } from './schema';

export function createNodemailerService() {
  return new Nodemailer();
}

class Nodemailer {
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
    const transporter = createTransport({
      host: '0.0.0.0',
      port: 54325,
      secure: false,
      auth: {},
    });

    const content = this.getContent(email);

    return transporter.sendMail({
      from: email.from,
      to: email.to,
      subject: email.subject,
      ...content,
    });
  }
}
