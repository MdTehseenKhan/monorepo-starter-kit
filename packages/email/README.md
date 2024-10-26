# Email Package

This package contains email templates.

## Environment Variables

To use this package, you need to set up the following environment variable:

- `NEXT_PUBLIC_SITE_URL`: The public URL of your site. This is used in email templates for generating links and loading assets.

## Exporting Email Templates

To export the email templates for use in Supabase, run the following command:

```bash
pnpm --filter=@packages/email export
```