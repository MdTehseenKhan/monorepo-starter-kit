import { Body, Container, Head, Html, Link, Tailwind, Text } from '@react-email/components';
import type { PropsWithChildren } from 'react';

const fontStyle = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Verdana,Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
};

export const EmailStructure = (props: PropsWithChildren<{ previewText: string }>) => {
  return (
    <Html>
      <Head />
      <div className="hidden">{props.previewText}</div>

      <Tailwind>
        <Body style={fontStyle} className="m-auto bg-gray-50 text-gray-950">
          {props.children}
        </Body>
      </Tailwind>
    </Html>
  );
};

export const EmailContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container className="mx-auto my-20 w-[465px] rounded-lg border border-solid border-gray-200 bg-white p-5">
      {children}
    </Container>
  );
};

export const EmailParagraph = ({ children }: PropsWithChildren) => {
  return <Text className="text-gray-700 text-sm">{children}</Text>;
};

export const EmailLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} className="text-black underline underline-offset-2 font-semibold">
      {children}
    </Link>
  );
};

export const EmailButton = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex my-2 text-xs rounded-md bg-gray-950 px-3 py-1.5 text-center font-semibold text-white border-2 border-solid border-gray-950"
    >
      {children}
    </Link>
  );
};
