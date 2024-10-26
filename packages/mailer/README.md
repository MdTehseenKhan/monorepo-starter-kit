# Mailer Package

This package provides email sending functionality.

## Environment Variables

To use this package, you need to set up the following environment variables:

- `NODE_ENV`: Set to 'local' for local development to use Nodemailer, otherwise Resend will be used.
- `RESEND_API_KEY`: Your Resend API key (required when not in local environment).

## Usage

To send an email, use the `sendEmail` function:
