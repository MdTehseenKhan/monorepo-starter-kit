import React from 'react';

import { EmailButton, EmailContainer, EmailLink, EmailParagraph, EmailStructure } from '../components/email-components';
import { EmailFooter } from '../components/email-footer';
import { EmailHeader } from '../components/email-header';
import { EmailConfig } from '../email.config';

export default function EmailChange() {
  const previewText = 'Verify Email Change Request!';

  const receiverEmail = '{{ .Email }}';
  const siteURL = '{{ .SiteURL }}';
  const newEmail = '{{ .NewEmail }}';
  const confirmEmailURL =
    '{{ .SiteURL }}/auth/callback?tokenHash={{ .TokenHash }}&type=email_change&next={{ .RedirectTo }}';

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
        <EmailHeader siteURL={siteURL} />

        <EmailParagraph>
          Hi <EmailLink href={`mailto:${receiverEmail}`}>{receiverEmail}</EmailLink>
          {','}
        </EmailParagraph>

        <EmailParagraph>
          We have received a request to update the email associated with your account to{' '}
          <EmailLink href={`mailto:${newEmail}`}>{newEmail}</EmailLink>
          {'. '}To confirm this action, please click on the link below:
        </EmailParagraph>

        <EmailButton href={confirmEmailURL}>Confirm email update</EmailButton>

        <EmailParagraph>
          If you did not initiate this request or believe it to be in error, please disregard this email. Your
          account&apos;s security is important to us, and we recommend reviewing your account activity regularly to
          ensure its safety.
        </EmailParagraph>

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
