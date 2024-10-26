import { Text } from '@react-email/components';
import React from 'react';

import { EmailButton, EmailContainer, EmailLink, EmailParagraph, EmailStructure } from '../components/email-components';
import { EmailFooter } from '../components/email-footer';
import { EmailHeader } from '../components/email-header';
import { EmailConfig } from '../email.config';

export default function ConfirmationEmail() {
  const previewText = 'Your one-time passcode: {{ .Token }}';

  const token = '{{ .Token }}';
  const siteURL = '{{ .SiteURL }}';
  const receiverEmail = '{{ .Email }}';
  const confirmEmailURL = '{{ .SiteURL }}/auth/callback?tokenHash={{ .TokenHash }}&type=signup&next={{ .RedirectTo }}';

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
        <EmailHeader siteURL={siteURL} />

        <EmailParagraph>
          Hi <EmailLink href={`mailto:${receiverEmail}`}>{receiverEmail}</EmailLink>
          {', '}
        </EmailParagraph>

        <EmailParagraph>This is your confirmation code:</EmailParagraph>

        <Text className="text-4xl font-semibold text-gray-950">{token}</Text>

        <EmailParagraph>
          This code will only be valid for the next 5 minutes. If the code does not work, you can use this login
          confirmation link:
        </EmailParagraph>

        <EmailButton href={confirmEmailURL}>Confirm email</EmailButton>

        <EmailParagraph>Thank you!</EmailParagraph>

        <EmailParagraph>
          Best regards,
          <br />
          The {EmailConfig.productName} team
        </EmailParagraph>

        <EmailFooter siteURL={siteURL} receiverEmail={receiverEmail} />
      </EmailContainer>
    </EmailStructure>
  );
}
