import type { ReactNode } from 'react';

import { Buffer } from 'node:buffer';
import { z } from 'zod';

const AttachmentSchema = z.object({
  content: z.union([z.string(), z.instanceof(Buffer)]).optional(),
  filename: z.union([z.string(), z.literal(false)]).optional(),
  path: z.string().optional(),
  contentType: z.string().optional(),
});

const EmailAddressSchema = z.string().email();
const EmailAddressesSchema = z.union([EmailAddressSchema, z.array(EmailAddressSchema).nonempty()]);

const BaseEmailSchema = z.object({
  to: EmailAddressesSchema,
  // this is not necessarily formatted
  // as an email so we type it loosely
  from: z.string().min(1),
  subject: z.string(),
  contentType: z.enum(['text', 'html', 'react']),
  attachments: z.array(AttachmentSchema).optional(),
});

const TextEmailSchema = BaseEmailSchema.extend({
  contentType: z.literal('text'),
  content: z.string(),
});

const HTMLEmailSchema = BaseEmailSchema.extend({
  contentType: z.literal('html'),
  content: z.string(),
});

const ReactEmailSchema = BaseEmailSchema.extend({
  contentType: z.literal('react'),
  content: z.custom<ReactNode>((value) => value !== null && typeof value === 'object'),
});

export const EmailSchema = z.discriminatedUnion('contentType', [TextEmailSchema, HTMLEmailSchema, ReactEmailSchema]);

export type EmailType = z.infer<typeof EmailSchema>;

export const SmtpConfigSchema = z.object({
  user: z.string({
    description: 'This is the email account to send emails from. This is specific to the email provider.',
    required_error: 'Please provide the variable EMAIL_USER',
  }),
  pass: z.string({
    description: 'This is the password for the email account',
    required_error: 'Please provide the variable EMAIL_PASSWORD',
  }),
  host: z.string({
    description: 'This is the SMTP host for the email provider',
    required_error: 'Please provide the variable EMAIL_HOST',
  }),
  port: z.number({
    description: 'This is the port for the email provider. Normally 587 or 465.',
    required_error: 'Please provide the variable EMAIL_PORT',
  }),
  secure: z.boolean({
    description: 'This is whether the connection is secure or not',
    required_error: 'Please provide the variable EMAIL_TLS',
  }),
});
