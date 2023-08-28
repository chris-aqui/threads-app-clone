Next.js 13 Threads App | React, Next JS, TypeScript, MongoDB

## Core Technologies
- Next.js: A popular React framework used for server-rendered React applications.
- TypeScript: A superset of JavaScript that adds static types.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

## Project Structure
- App Logic (app/)
- Auth: Contains the authentication logic, including sign-in and sign-up pages.
- Root: Houses the main application logic, including activity, communities, profiles, and threads.
- API: Contains server-side logic for things like uploading and webhooks.

## Components (components/)
- Cards: Components like CommunityCard, - ThreadCard, and UserCard for displaying various types of content.
- Forms: Form components for account profiles, comments, deleting threads, and posting threads.
- Shared: Shared UI components like sidebars, pagination, and headers.
- UI: Lower-level UI components like buttons, inputs, and labels imported from **shadcn**

## Constants (constants/)
Houses constant values that are used throughout the application.

## Libraries and Utilities (lib/)
- Actions: Functions for interacting with communities, threads, and users.
- Models: Data models for communities, threads, and users.
- Validations: Validation logic for threads and users.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ScreenShot



## Deploy on Vercel
https://threads-app-clone-beryl.vercel.app/


