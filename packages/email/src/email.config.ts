const siteURL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const EmailConfig = {
  productName: 'Product Name',
  siteURL,
  supportEmail: 'support@product.com',
  twitterUrl: 'https://x.com/product',
  twitterIcon: `${siteURL}/assets/icons/twitter.png`,
  siteLogoIcon: `${siteURL}/assets/logo/logo-icon.png`,
  siteLogoImage: `${siteURL}/assets/logo/logo-image.png`,
  paths: {
    auth: {
      signIn: `${siteURL}/auth/sign-in`,
    },
    marketing: {
      about: { title: 'About', href: `${siteURL}/about` },
      privacy: { title: 'Privacy', href: `${siteURL}/privacy` },
      terms: { title: 'Terms', href: `${siteURL}/terms` },
    },
  },
};
