import 'server-only';

import type { EmailType } from './schema';

const isLocalEnvironment = process.env.NODE_ENV === 'development';

export async function sendEmail(email: EmailType) {
  const mailer = await getMailer();
  return mailer.sendEmail(email);
}

async function getMailer() {
  if (isLocalEnvironment) {
    return getNodemailer();
  }

  const { createResendService } = await import('./resend');
  return createResendService();
}

async function getNodemailer() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') {
    throw new Error('Nodemailer is not available on the edge runtime. Please use another mailer.');
  }

  const { createNodemailerService } = await import('./nodemailer');
  return createNodemailerService();
}
