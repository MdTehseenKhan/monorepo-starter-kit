import React from 'react';

import { Column, Hr, Img, Link, Row, Section, Text } from '@react-email/components';
import { EmailConfig } from '../email.config';

interface EmailFooterProps {
  receiverEmail: string;
  siteURL?: string;
}

const MANDATORY_EMAIL_MESSAGE = `This is a mandatory system notification that you cannot unsubscribe from. 
These email alerts are essential to ensure the integrity, privacy, and security of ${EmailConfig.productName} users. 
By default, ${EmailConfig.productName} will send you emails related to system, privacy, and security matters.`;

export const EmailFooter = ({ receiverEmail, siteURL = EmailConfig.siteURL }: EmailFooterProps) => {
  const currentYear = new Date().getFullYear();
  const twitterUrl = EmailConfig.twitterUrl;
  const companyLine = `© ${currentYear} ${EmailConfig.productName}, Inc. All rights reserved.`;

  return (
    <Section className="mt-10 text-xs text-gray-500">
      <Row>
        <Hr />
      </Row>
      <Row>
        <Text className="text-xs">
          This email was sent to{' '}
          <Link href={`mailto:${receiverEmail}`} className="text-black underline underline-offset-2 font-semibold">
            {receiverEmail}
          </Link>
          . {MANDATORY_EMAIL_MESSAGE}
        </Text>
      </Row>
      <Row>
        <Column className="text-xs text-gray-500">{companyLine}</Column>
      </Row>

      <Row className="mt-6 text-gray-950">
        <Column className="w-6 h-6 pr-2">
          <Link href={siteURL}>
            <Img src={EmailConfig.siteLogoIcon} alt={EmailConfig.productName} width={24} height={24} />
          </Link>
        </Column>
        <Column>
          <Link href={siteURL}>
            <Img src={EmailConfig.siteLogoImage} alt={EmailConfig.productName} width={90} height={16} />
          </Link>
        </Column>
        <Column className="w-6 h-6 ml-auto">
          <Link href={twitterUrl} className="text-right">
            <Img src={EmailConfig.twitterIcon} alt="twitter" width={24} height={24} />
          </Link>
        </Column>
      </Row>
    </Section>
  );
};
