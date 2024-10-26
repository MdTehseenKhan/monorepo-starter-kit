import React from 'react';

import { Column, Img, Link, Row, Section } from '@react-email/components';
import { EmailConfig } from '../email.config';

interface EmailHeaderProps {
  siteURL?: string;
}

export const EmailHeader = ({ siteURL = EmailConfig.siteURL }: EmailHeaderProps) => {
  const { productName, siteLogoIcon, siteLogoImage } = EmailConfig;

  return (
    <Section className="mb-6">
      <Row>
        <Column className="w-10 pr-3">
          <Link href={siteURL}>
            <Img src={siteLogoIcon} alt={productName} width={40} height={40} />
          </Link>
        </Column>
        <Column>
          <Link href={siteURL}>
            <Img src={siteLogoImage} alt={productName} width={180} height={32} />
          </Link>
        </Column>
      </Row>
    </Section>
  );
};
