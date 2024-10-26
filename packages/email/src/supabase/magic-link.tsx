import { Text } from '@react-email/components';
import React from 'react';

import { EmailButton, EmailContainer, EmailLink, EmailParagraph, EmailStructure } from '../components/email-components';
import { EmailFooter } from '../components/email-footer';
import { EmailHeader } from '../components/email-header';
import { EmailConfig } from '../email.config';

export default function MagicLinkEmail() {
  const previewText = 'Click on the magic link to sign in instantly!';

  const token = '{{ .Token }}';
  const siteURL = '{{ .SiteURL }}';
  const receiverEmail = '{{ .Email }}';
  const confirmEmailURL =
    '{{ .SiteURL }}/auth/callback?tokenHash={{ .TokenHash }}&type=magiclink&next={{ .RedirectTo }}';

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
        <EmailHeader siteURL={siteURL} />

        <EmailParagraph>
          Hi <EmailLink href={`mailto:${receiverEmail}`}>{receiverEmail}</EmailLink>
          {','}
        </EmailParagraph>

        <EmailParagraph>Follow this link to login:</EmailParagraph>

        <EmailButton href={confirmEmailURL}>Login</EmailButton>

        <EmailParagraph>
          Alternatively you can use the following code to login. This code will only be valid for the next 5 minutes.
        </EmailParagraph>

        <Text className="text-4xl font-semibold text-gray-950">{token}</Text>

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
