# Carlos Diogo — Portfolio

This repository contains the personal portfolio of Carlos Diogo, a software
engineering student based in Porto, Portugal.

The site presents selected projects, academic work, professional experience and
education through a responsive React interface. Its visual language combines
clear typography, focused layouts, light and dark themes, project detail views,
image galleries and small interaction details.

## Technology

- React 18
- React Router
- Vite
- CSS
- JavaScript

## Local development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

## Production build

Create an optimised production bundle:

```bash
npm run build
```

The generated files are placed in `dist/` and can be served by any static
hosting provider, including GitHub Pages, Netlify, Vercel and Cloudflare Pages.

Because the application uses client-side routing, the hosting provider must
return `index.html` for unknown application routes such as `/projects` and
`/cv`.

## Application pages

### Home

Introduces Carlos, his engineering focus, current work and a selection of
featured projects.

### Projects

Shows the complete project catalogue. Each entry can be expanded to reveal its
context, overview, implementation details, technology stack and external link.

### CV

Organises experience, projects, university work and education into expandable
entries. Academic projects may also include screenshots, galleries and video
walkthroughs.

## Content management

Most portfolio content is stored in [`src/data.js`](./src/data.js). This file
contains:

- Personal profile and contact information
- Homepage introduction and summary sections
- Current activities
- Project descriptions and technology stacks
- Work experience
- University projects
- Education history
- Gallery images and video references

Static assets such as project logos and screenshots are stored under
`public/media/`.

The main components are located in `src/components/`, while page-specific
layouts and styles are in `src/pages/`.

## Interaction features

- Responsive layout for desktop and mobile screens
- Persisted light/dark theme selection
- Live Porto time display
- Expandable project and CV entries
- Keyboard navigation shortcuts
- Project image galleries with larger previews
- Embedded project walkthrough videos

## Keyboard navigation

| Key | Action |
| --- | --- |
| `h` | Open the home page |
| `p` | Open the projects page |
| `c` | Open the CV |
| `e` | Open the email link |
| `g` | Open GitHub |
| `l` | Open LinkedIn |

Shortcuts are ignored while modifier keys are pressed or while the user is
typing in a form field.

## Deployment

The project includes a deployment script:

```bash
npm run deploy
```

Before deploying, review the script and the repository configuration for the
target hosting provider. The Vite base path must match the public URL when the
site is hosted below a subpath, such as a GitHub Pages project site.
