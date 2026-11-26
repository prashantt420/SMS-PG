# LP Savani PG landing page

A responsive Next.js landing page focused on WhatsApp enquiries and room visits.

## 1. Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Before deployment

1. Open `src/lib/site.ts` and replace `whatsappNumber` with the PG's WhatsApp number in international format, e.g. `919876543210` (digits only).
2. Check the room prices in `src/lib/site.ts` and update if needed.
3. Replace the placeholder photos in `public/images/` using the exact filenames listed in `public/images/README.md`.
4. Confirm whether food, electricity, deposit and other charges are included. The page deliberately asks visitors to confirm these rather than making unsupported promises.
5. Update the location text and add a verified Google Maps link if you want exact directions.

## 3. Deploy to Vercel

Push this folder to GitHub, import the repository in Vercel, keep the framework preset as Next.js, and deploy. No environment variables are required.

## Image filenames

- `hero-room.jpg`
- `room-2-sharing-ac.jpg`
- `room-3-sharing-ac.jpg`
- `room-2-sharing-non-ac.jpg`
- `room-3-sharing-non-ac.jpg`
- `gallery-room-1.jpg`
- `gallery-room-2.jpg`
- `gallery-common-area.jpg`

## Notes

- Current listed monthly room rates: 2-sharing AC ₹8,000; 3-sharing AC ₹7,500; 2-sharing non-AC ₹7,000; 3-sharing non-AC from ₹5,500.
- The WhatsApp number is intentionally a placeholder. Replace it before publishing or the enquiry links will not work.
- Testimonials are not fabricated; the page invites genuine resident feedback instead.
