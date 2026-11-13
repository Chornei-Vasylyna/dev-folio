# DevFolio

DevFolio is a Next.js application for creating, publishing, discovering, and
downloading developer resumes and portfolios. Users can register or sign in,
complete their profile, add experience, education, skills, and projects, and
share a public resume page.

## Features

- Public catalog of developer profiles
- Client-side search by name, specialty, or skill
- Email/password authentication through Supabase
- Google and GitHub OAuth sign-in
- Authenticated portfolio editor with separate forms for:
  - Profile and contact details
  - Work experience
  - Education
  - Skills
  - Projects and project links
- Avatar upload and replacement through Uploadcare
- Public resume pages at `/resume/:id`
- Resume sections for about, experience, education, skills, projects, and
  contact details
- PDF resume generation and download
- Responsive navigation and UI components built with Tailwind CSS and Radix UI

## Tech stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4, Radix UI, Phosphor Icons
- **Forms and validation:** React Hook Form, Zod, `@hookform/resolvers`
- **Authentication and data:** Supabase JS with `@supabase/ssr`
- **File uploads:** Uploadcare React Uploader
- **PDF generation:** `@react-pdf/renderer`
- **Notifications:** Sonner
- **Code quality:** Biome
- **Package manager:** pnpm

## Prerequisites

- Node.js compatible with the installed Next.js and React versions
- pnpm 11.9 or a compatible pnpm 11 release
- A Supabase project with authentication enabled
- Google and/or GitHub OAuth providers configured in Supabase if social sign-in
  is required
- An Uploadcare project with a public key if avatar uploads are required

The application expects the following Supabase tables used by the portfolio
actions: `profiles`, `experiences`, `educations`, `skills`, and `projects`.
Their columns and relationships should match the generated types in
`src/lib/supabase/database.types.ts`.

## Local setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a local environment file from the example:

   ```bash
   cp .env.example .env.local
   ```

   In PowerShell, use:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Set the required values in `.env.local`:

   | Variable | Description |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | URL of the Supabase project |
   | `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable/anonymous client key |
   | `NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY` | Uploadcare public key used by the avatar uploader |

   These values are validated with Zod when the application environment module
   is loaded. Do not commit `.env.local` or replace the placeholders in
   `.env.example` with real credentials.

4. Configure the OAuth callback URL in Supabase for local development:

   ```text
   http://localhost:3000/auth/callback
   ```

   The application exchanges the OAuth code at `/auth/callback` and redirects
   the user back to the application.

5. Start the development server:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run Biome checks |
| `pnpm format` | Format supported files with Biome |

## Application routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Browse the resume catalog and search public profiles |
| `/login` | Public | Sign in with email/password, Google, or GitHub |
| `/register` | Public | Create an account |
| `/portfolio` | Authenticated | Edit profile and portfolio sections |
| `/resume/:id` | Public | View a user's published resume |
| `/auth/callback` | OAuth callback | Complete Supabase OAuth sign-in |

## Project structure

```text
src/
├── app/          Next.js routes, layouts, loading, and error boundaries
├── components/   Shared layout and UI components
├── features/
│   ├── auth/     Authentication actions, forms, and validation
│   ├── home/     Public catalog and profile search
│   ├── portfolio/ Portfolio forms, persistence actions, and validation
│   └── resume/   Public resume rendering and PDF components
├── lib/          Supabase clients, generated database types, and validation
├── providers/    Application context providers
├── contexts/     Shared context types
└── styles/       Global styles, theme, and CSS variables
```

Portfolio data is read and written through server actions using the Supabase
server client. Authentication state is carried through Supabase SSR cookies and
made available to the application through `AuthProvider`.
