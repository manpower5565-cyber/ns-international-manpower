# Deployment & Domain Configuration Guide — NS International Manpower

**Official Production Domain:** `https://nsinternationalmanpower.online`  
**Registered Address:** 207, Office No. 2, 2nd Floor, Jewel Height, 23 BN Road, Lalbagh, Lucknow, Uttar Pradesh – 226001, India.

---

## 1. Domain & DNS Configuration (for `nsinternationalmanpower.online`)

To point your custom domain `nsinternationalmanpower.online` to your hosting provider:

### Option A: Vercel / Netlify Deployment (Recommended for Instant SSL & CDN)
1. Push this repository to GitHub or GitLab.
2. In Vercel or Netlify, select **Add New Project** and import the repository.
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Under **Project Settings > Domains**, add:
   - `nsinternationalmanpower.online`
   - `www.nsinternationalmanpower.online`
4. In your Domain Registrar DNS Manager (e.g. GoDaddy, Namecheap, Hostinger):
   | Record Type | Host | Value / Target | TTL |
   |-------------|------|----------------|-----|
   | **A** | `@` | `76.76.21.21` (or your host IP) | Auto / 3600 |
   | **CNAME** | `www` | `cname.vercel-dns.com` (or Netlify URL) | Auto / 3600 |

### Option B: Traditional cPanel / Apache / Nginx Shared Hosting
1. Run `npm run build` locally or on your CI/CD server.
2. An optimized production bundle will be generated in the `dist/` directory.
3. Upload all contents of the `dist/` directory directly into your cPanel `public_html/` folder.
4. Create or ensure the following `.htaccess` file exists in `public_html/` for seamless client-side routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 2. Centralized Site Configuration (`src/config/siteConfig.ts`)

All business parameters, phone numbers, WhatsApp contact, emails, and address lines are centralized in `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "NS International Manpower",
  tagline: "Connecting Global Opportunities with Skilled Indian Talent",
  domain: "nsinternationalmanpower.online",
  url: "https://nsinternationalmanpower.online",
  address: {
    line1: "207, Office No. 2, 2nd Floor",
    line2: "Jewel Height",
    road: "23 BN Road, Lalbagh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226001",
    country: "India",
    full: "207, Office No. 2, 2nd Floor, Jewel Height, 23 BN Road, Lalbagh, Lucknow, Uttar Pradesh – 226001, India.",
  },
  contact: {
    email: "contact@nsinternationalmanpower.online",
    phoneDisplay: "+91 94150 12345",
    phoneRaw: "+919415012345",
    whatsappNumber: "919415012345", // Configure with active WhatsApp business phone
    businessHours: "Monday – Saturday: 9:30 AM – 6:30 PM (IST)",
    directionsUrl: "https://maps.google.com/?q=Jewel+Height+23+BN+Road+Lalbagh+Lucknow+226001",
    googleMapsEmbedUrl: "...",
  }
};
```

---

## 3. Connecting Form Submissions to Backend / CRM / Email

The forms (`EmployerEnquiryPage.tsx`, `CandidateRegistrationPage.tsx`, and `ContactPage.tsx`) currently:
- Validate all required fields and file attachments.
- Prevent spam via bot honeypot traps.
- Generate authentic reference IDs (`EMP-XXXXXX`, `CND-XXXXXX`, `MSG-XXXXXX`).
- Persist submissions in `localStorage` for testing.

To connect them to live production backends:
1. **Formspree / Web3Forms / Resend API:**
   Add your endpoint URL to `.env`:
   ```bash
   VITE_EMPLOYER_WEBHOOK_URL="https://formspree.io/f/your_form_id"
   VITE_CANDIDATE_WEBHOOK_URL="https://formspree.io/f/your_form_id"
   VITE_CONTACT_WEBHOOK_URL="https://formspree.io/f/your_form_id"
   ```
2. In `src/utils/formHandlers.ts`, uncomment the `fetch(import.meta.env.VITE_EMPLOYER_WEBHOOK_URL, ...)` call to dispatch records directly to email or CRM.

---

## 4. Local Development & Preview Commands

- Start local dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`
