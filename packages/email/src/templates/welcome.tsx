import React from 'react';

import { Text, render } from '@react-email/components';

import { EmailButton, EmailContainer, EmailLink, EmailParagraph, EmailStructure } from '../components/email-components';
import { EmailHeader } from '../components/email-header';
import { WelcomeEmailFooter } from '../components/welcome-email-footer';
import { EmailConfig } from '../email.config';

export default function WelcomeEmail() {
  const { productName, supportEmail, paths } = EmailConfig;

  const previewText = `Welcome to ${productName}!`;
  const loginPageURL = paths.auth.signIn;

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
        <EmailHeader />

        <Text className="text-3xl font-bold text-gray-950">{previewText}</Text>

        <EmailParagraph>
          Hi there, we are excited to inform you that your profile has been successfully reviewed and your account has
          been created!
        </EmailParagraph>

        <EmailParagraph>
          You can now log in to your account using the credentials you provided during the registration process.
        </EmailParagraph>

        <EmailButton href={loginPageURL}>Get Started</EmailButton>

        <EmailParagraph>
          If you need further assistance, please feel free to contact our support team at{' '}
          <EmailLink href={`mailto:${supportEmail}`}>{supportEmail}</EmailLink>.
        </EmailParagraph>

        <EmailParagraph>
          Thank you for joining {productName}. We look forward to supporting you on your journey!
        </EmailParagraph>

        <WelcomeEmailFooter />
      </EmailContainer>
    </EmailStructure>
  );
}

export function renderWelcomeEmail() {
  return render(<WelcomeEmail />);
}
