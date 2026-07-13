# JVALU Website

A multi-page React website for JVALU Certification & Evaluation, built with React, React Router, Vite, and Tailwind CSS.

## Pages

- **Home** (`/`) — hero, about preview, services grid, why choose us, call-to-action
- **About** (`/about`) — company story, mission/vision/approach, why choose us
- **Services** (`/services`) — overview of all four services
- **Service detail pages** (one per service, dynamic route `/services/:slug`):
  - `/services/icv-certification`
  - `/services/iso-certification`
  - `/services/asset-evaluation`
  - `/services/adnoc-vendor-registration`
- **Contact** (`/contact`) — contact form, direct call/WhatsApp/email links, embedded map

## Tech stack

- React 18
- React Router 6 (client-side routing)
- Vite (build tool)
- Tailwind CSS (styling)
- lucide-react (icons)

## Running locally

You'll need [Node.js](https://nodejs.org/) version 18 or later installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Editing content

Almost all text content (company info, phone/email/address, the four services, "why choose us" points, partner logos) lives in a single file:

```
src/data/content.js
```

To update your phone number, email, address, or any service description, edit that file — the change will apply across the whole site automatically (navbar, footer, contact page, service pages, etc.).

To update the logo, replace these two files (keep the same filenames — one is used on light backgrounds, one on dark):

```
src/assets/logo-teal.png   (used in the navbar, light background)
src/assets/logo-white.png  (used in the footer, dark background)
```

Both should be PNG files with a transparent background so they blend cleanly. If you only have one logo file, you can generate both variants from it using any image editor's "recolor" tool, or ask Claude to do it for you.

### Swapping in real photos for the hero carousel

The homepage hero currently shows four designed background slides (skyline silhouette, certification motif, compass/coverage motif, growth chart motif) defined in `src/components/HeroCarousel.jsx`, instead of real photos — this avoids any licensing risk from unlicensed stock images.

To swap in real photography later:
1. Make sure you have commercial usage rights for any photo you use (purchased stock, your own photography, or a properly licensed source).
2. Add your image files to `src/assets/hero/` (create this folder).
3. In `src/components/HeroCarousel.jsx`, replace one of the SVG slide components (e.g. `SkylineSlide`) with an `<img>` tag pointing to your photo, keeping the same `className="w-full h-full object-cover"` so it fills the frame the same way.
4. Keep the dark teal overlay divs at the bottom of the component — they keep the white headline text readable over any image.

## Building for production

```bash
npm run build
```

This creates an optimized, production-ready version of the site in a new `dist/` folder. This `dist/` folder is what you upload/deploy — it contains plain HTML, CSS, and JS that any standard web host can serve.

You can preview the production build locally before deploying:

```bash
npm run preview
```

## How to publish the website — step by step

You have a few good, low-cost/free options. Recommended for simplicity: **Vercel** or **Netlify**.

### Option A: Vercel (recommended, free tier available)

1. Create a free account at [vercel.com](https://vercel.com).
2. Push this project to a GitHub repository (create a new repo, e.g. `jvalu-website`, and push this folder's contents to it).
3. In Vercel, click **Add New Project**, select your GitHub repo.
4. Vercel will auto-detect Vite — leave the default build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. You'll get a live URL like `jvalu-website.vercel.app` within a minute.
6. To use your own domain (e.g. `jvalu.ae`), go to **Project Settings → Domains** in Vercel and follow the instructions to point your domain's DNS to Vercel.

### Option B: Netlify (also free tier available)

1. Create a free account at [netlify.com](https://netlify.com).
2. Push this project to GitHub (same as above).
3. In Netlify, click **Add New Site → Import an Existing Project**, connect your GitHub repo.
4. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click **Deploy Site**.
6. Add your custom domain under **Site Settings → Domain Management**.

### Option C: Any standard web hosting (cPanel, GoDaddy, etc.)

1. Run `npm run build` on your computer.
2. This creates a `dist/` folder containing the entire built website (HTML/CSS/JS files).
3. Upload the **contents** of `dist/` (not the folder itself) to your hosting account's public web folder (often called `public_html` or `www`).
4. Important: because this is a single-page app with client-side routing, you need to configure your host to redirect all unknown routes to `index.html`. Ask your hosting provider, or look for a setting called "SPA fallback" / add this to an `.htaccess` file if using Apache hosting:

   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Domain & DNS

If you don't yet own a domain (e.g. `jvalu.ae`), you can register one through providers such as:
- A registrar that supports `.ae` domains (UAE's AEDA-accredited registrars, e.g. through `aeda.ae`-listed providers)
- Or use a `.com` domain (e.g. `jvalu.com`) via any standard registrar (Namecheap, GoDaddy, Google Domains successor Squarespace Domains, etc.)

Once registered, point the domain's DNS to whichever host you choose (Vercel/Netlify provide exact DNS records to add once you connect the domain in their dashboard).

## Next steps / things to review before going live

- [ ] Replace placeholder "Who We Are", mission/vision, and FAQ copy with content reviewed by your team, if you'd like changes
- [ ] Confirm the office address pin on the Contact page map is accurate (currently set from the address you provided)
- [ ] Add real client logos / testimonials if available (currently not included)
- [ ] **Required:** activate the contact form's Formspree endpoint so consultation requests actually email you — see "Setting up consultation request notifications" below. Until you do this, submissions fall back to opening the visitor's own email app.
- [ ] Register a domain (e.g. `jvalu.ae`) if you don't already have one
- [ ] Set up Google Business Profile + Google Search Console once live, for local SEO in Abu Dhabi
- [ ] Confirm you have commercial usage rights for any photos/video you add to the hero carousel (currently using designed graphics, no photos, to avoid licensing issues)

### Setting up consultation request notifications (Formspree)

The contact form is wired to send submissions to your email automatically using [Formspree](https://formspree.io) — a free service (50 submissions/month on the free tier) that requires no backend code. Right now it's pointed at a placeholder, so **you need to activate it before going live**:

1. Go to [formspree.io](https://formspree.io) and create a free account using `support@jvalu.ae` (or whichever inbox should receive consultation requests).
2. Click **New Form**, name it something like "JVALU Website Consultation Requests".
3. Formspree will give you an endpoint URL that looks like `https://formspree.io/f/abcd1234`.
4. Open `src/pages/Contact.jsx` in this project, find this line near the top:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID from step 3.
6. Save the file, rebuild (`npm run build`), and redeploy.
7. Submit a test enquiry on your live site — Formspree will send a confirmation email the first time, and from then on every submission emails you directly.

**If the form fails for any reason** (Formspree down, wrong ID, no internet), the site automatically falls back to opening the visitor's email app with their message pre-filled to `support@jvalu.ae`, so an enquiry is never silently lost.

**On WhatsApp notifications:** automatically sending a WhatsApp message to your business number on every form submission requires a paid automation service (e.g. Twilio WhatsApp API, or a Zapier/Make.com integration connected to Formspree) since browsers can't silently send WhatsApp messages on your behalf. If you want this set up, let me know and I can wire Formspree up to a Zapier "send WhatsApp message" step — Zapier has a free tier that may cover light usage.
