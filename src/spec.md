# Specification

## Summary
**Goal:** Build a modern, dark, mobile-responsive multi-page marketing website for “Gym Workout Place” with a consistent WordPress-gym-theme visual style, key content pages, and a working contact form backed by a Motoko actor.

**Planned changes:**
- Create and apply a cohesive dark design system (black/red/dark grey), typography scale, spacing, and prominent accessible CTAs across all pages.
- Implement a sticky site-wide header navigation (Home, About, Workouts/Programs, Trainers, Membership/Plans, Gallery, Contact), footer with social links/icons, and smooth scrolling for in-page anchors where applicable.
- Build pages:
  - Home: hero (exact headline/sub-text) with CTAs (Join Now, Free Trial, Contact Us), plus Why Choose Us (3 items), Popular Workouts (with images), Transformation highlights, Testimonials.
  - About: hero image, provided mission paragraph, and values (Discipline, Consistency, Results).
  - Workouts/Programs: nine program sections, each with a high-quality image and a 2–3 line description.
  - Trainers: at least 3 trainer cards with images and the specified detail text.
  - Membership/Plans: four pricing cards with the specified features and CTAs routing to contact/free trial.
  - Gallery: at least 4 image categories with multiple images each (responsive cropping/aspect handling).
  - Contact: validated contact form with success state, WhatsApp link, Call Now (tel:) link, Google Maps external link, and business info (address/phone/hours).
- Add backend support in a single Motoko actor to store contact submissions (name, email/phone, message, timestamp) and expose methods to create and list recent submissions for verification.
- Ensure SEO/accessibility basics: semantic heading hierarchy (one H1 per page), per-route page titles, labeled form fields, keyboard navigation, and visible focus states.
- Add generated image assets under `frontend/public/assets/generated` and wire them into the relevant UI sections/pages.

**User-visible outcome:** Visitors can browse a polished dark-themed gym website across multiple pages (including programs, trainers, plans, gallery), and submit the contact form successfully (with WhatsApp/call/maps links available), with responsive layout and SEO/accessibility-friendly structure.
