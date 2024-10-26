import React from 'react';

import { Column, Hr, Link, Row, Section, Text } from '@react-email/components';
import { EmailConfig } from '../email.config';

export const WelcomeEmailFooter = () => {
  const unsubscribeURL = '';

  const currentYear = new Date().getFullYear();
  const { paths, productName } = EmailConfig;

  return (
    <Section className="mt-10 text-xs text-gray-500">
      <Row>
        <Hr className="" />
      </Row>
      <Row>
        <Text className="text-center text-xs">
          Your&apos;e receiving this email because you subscribed to receive marketing emails. If you&apos;d prefer to
          not receive these emails, please&nbsp;
          <Link href={unsubscribeURL} className="text-black underline underline-offset-2 font-semibold">
            unsubscribe
          </Link>
          .
        </Text>
      </Row>
      <Row>
        <Text className="text-center text-xs mt-0">
          {Object.values(paths.marketing).map(({ title, href }) => (
            <Link key={title} href={href} className="text-gray-500 underline underline-offset-2 font-semibold mx-2">
              {title}
            </Link>
          ))}
        </Text>
      </Row>
      <Row>
        <Column className="text-center text-xs">
          &copy;&nbsp;{currentYear}&nbsp;{productName}
        </Column>
      </Row>
      <Row>
        <Column className="text-center text-xs">All rights reserved.</Column>
      </Row>
    </Section>
  );
};
