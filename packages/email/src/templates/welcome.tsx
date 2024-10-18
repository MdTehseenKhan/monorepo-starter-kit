import { Text, render } from '@react-email/components';

import { EmailButton, EmailContainer, EmailLink, EmailParagraph, EmailStructure } from './components/email-components';

interface WelcomeEmailParams {
  productName: string;
  supportEmail: string;
  loginPageURL: string;
  marketingLinks: { title: string; href: string }[];
}

export default function WelcomeEmail(params: WelcomeEmailParams) {
  const { productName, supportEmail, loginPageURL } = params;
  const previewText = `Welcome to ${productName}!`;

  return (
    <EmailStructure previewText={previewText}>
      <EmailContainer>
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
      </EmailContainer>
    </EmailStructure>
  );
}

export function renderWelcomeEmail(params: WelcomeEmailParams) {
  return render(<WelcomeEmail {...params} />);
}
