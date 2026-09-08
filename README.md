# Hanna Oktaviana Putri — Full-Stack & Backend Portfolio

A modern single-page personal portfolio built with **React.js + Vite + Tailwind CSS + Framer Motion + Lucide React**.

The portfolio is written entirely in English and is positioned for **Full-Stack Developer** and **Backend Developer** opportunities. The visual direction stays professional, warm, modern, and subtly playful without becoming a character/fan website.

## Highlights

- Full English portfolio copy
- Full-stack and backend-focused personal branding
- Separate project cards for **PERI E-Persediaan**, **OldStore E-Commerce**, **Moonrin Comic Reader**, and **Bakery Website**
- Additional projects for data scraping, ZooGallery, and cocoa bean classification
- Scroll progress animation
- Animated hero background and floating cards
- Parallax profile image
- Infinite tech marquee
- Animated timeline
- Project card shine and hover movement
- Animated project modal
- Animated skill chips, contact cards, doodles, and decorative accents
- Responsive mobile navigation
- Reduced-motion accessibility support

## Project structure

```text
hanna-portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile-hanna.jpg
│   └── Hanna_Oktaviana_Putri_CV.pdf
├── src/
│   ├── assets/
│   │   ├── profile/
│   │   │   └── hanna-profile.jpg
│   │   └── projects/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlayfulDoodle.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectVisual.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   └── TechMarquee.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Install

Use Node.js 18+.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite will display the local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Edit portfolio content

Most website content is centralized in:

```text
src/data/portfolio.js
```

You can update personal information, bio, skills, experience, project descriptions, education, certifications, and social links without editing the UI components.

## Add GitHub / LinkedIn links

The project does not invent social URLs. Replace the empty values in `src/data/portfolio.js`:

```js
linkedin: '',
github: '',
instagram: '',
```

with your real links.

Project-specific GitHub and demo buttons also appear only when real URLs are provided.

## Replace profile photo

Replace:

```text
src/assets/profile/hanna-profile.jpg
```

Keep the same filename, or update the import at the top of `src/data/portfolio.js`.

Also replace:

```text
public/profile-hanna.jpg
```

if you want the Open Graph/social preview image to use the new photo.

Recommended ratio: approximately **4:5**.

## Replace the CV

Replace:

```text
public/Hanna_Oktaviana_Putri_CV.pdf
```

If you change the filename, also update:

```js
cvPath: '/Hanna_Oktaviana_Putri_CV.pdf'
```

inside `src/data/portfolio.js`.

## Edit or add projects

Edit the `projects` array in `src/data/portfolio.js`.

Example:

```js
{
  id: 'api-project',
  title: 'Backend API Project',
  eyebrow: 'Backend • API',
  tech: ['Laravel', 'PostgreSQL'],
  description: 'Short description.',
  highlights: ['REST API', 'Authentication'],
  detail: 'Longer detail shown in the modal.',
  visual: 'peri',
  featured: true,
  github: '',
  demo: '',
}
```

Built-in project visual types:

- `peri`
- `moonrin`
- `oldstore`
- `bakery`
- `scraping`
- `gallery`
- `cocoa`

You can replace these abstract previews with real screenshots later.

## Contact form

The contact form is frontend-only by default. In:

```text
src/components/Contact.jsx
```

replace `handleSubmit` with Formspree, EmailJS, Resend through a serverless/backend function, or your own API.

Do not put secret API keys directly inside React frontend code.

## Deploy to Vercel

### GitHub + Vercel

1. Create a GitHub repository.
2. Push this project.
3. Open Vercel and choose **Add New → Project**.
4. Import the repository.
5. Vercel should detect Vite automatically.
6. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Deploy.

Future pushes to the connected branch can trigger automatic deployments.

### Vercel CLI

```bash
npm install -g vercel
vercel
```

For production:

```bash
vercel --prod
```

## Content notes

Experience, education, certifications, and achievements are based on the supplied CV information. Project descriptions for PERI E-Persediaan, OldStore, Moonrin, Bakery, ZooGallery, Cocoa Bean Classification, and Data Scraping are based on the project details provided for this portfolio. Unknown GitHub/demo URLs remain intentionally empty rather than being fabricated.
