import React from 'react';

import { Text, render } from '@react-email/components';
import { EmailContainer, EmailLink, EmailParagraph, EmailStructure } from '../components/email-components';
import { EmailFooter } from '../components/email-footer';
import { EmailHeader } from '../components/email-header';
import { EmailConfig } from '../email.config';

interface OnboardingEmailProps {
  receiverEmail: string;
}

export default function OnboardingEmail({ receiverEmail = '[Receiver Email]' }: OnboardingEmailProps) {
  const { productName, supportEmail } = EmailConfig;
  const previewText = 'Your request for account creation has been received!';

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
        <EmailHeader />

        <Text className="text-2xl font-semibold text-gray-950">Account under Review</Text>

        <EmailParagraph>Hi there,</EmailParagraph>

        <EmailParagraph>
          Thank you for your interest in {productName}! We have received your request for account creation and are
          currently reviewing your profile.
        </EmailParagraph>

        <EmailParagraph>
          Our team is diligently working to ensure all necessary information is verified. You will receive a
          confirmation email once the review process is complete.
        </EmailParagraph>

        <EmailParagraph>
          If you need further assistance, please feel free to contact our support team at{' '}
          <EmailLink href={`mailto:${supportEmail}`}>{supportEmail}</EmailLink>.
        </EmailParagraph>

        <EmailParagraph>
          We appreciate your patience and look forward to having you as part of the {productName} community.
        </EmailParagraph>

        <EmailParagraph>Thank you!</EmailParagraph>

        <EmailParagraph>
          Best regards,
          <br />
          The {productName} team
        </EmailParagraph>

        <EmailFooter receiverEmail={receiverEmail} />
      </EmailContainer>
    </EmailStructure>
  );
}

export function renderOnboardingEmail(props: OnboardingEmailProps) {
  return render(<OnboardingEmail {...props} />);
}
