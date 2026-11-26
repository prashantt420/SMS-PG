LP SAVANI PG — /pg-in-adajan landing page patch

Files in this patch:
- src/app/pg-in-adajan/page.tsx
- src/app/pg-in-adajan/page.module.css
- src/app/sitemap.ts

Install:
1. Back up your existing src/app/sitemap.ts.
2. Copy the src folder from this patch into your project root, merging folders.
3. Replace src/app/sitemap.ts with the included version. It keeps the homepage and adds /pg-in-adajan.
4. Run: npm run build
5. Deploy: vercel --prod

Important checks:
- This patch uses the canonical domain https://sms-pg-adajan.vercel.app. If your actual production domain differs, replace SITE_URL/PAGE_URL in page.tsx and SITE_URL in sitemap.ts consistently.
- The address, phone, boys-only audience, room prices, amenities and optional food details are based on the business details supplied in this conversation.
- The page does not add fabricated ratings, reviews, availability, opening hours, geo coordinates or claims about nearby landmarks.
- The hero room illustration is CSS-generated, so no image assets are required.
- After deployment, check /pg-in-adajan and /sitemap.xml. Then inspect the new page in Google Search Console and request indexing when the quota allows.
