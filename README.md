# Elite Academy — Premium Landing Page

A complete, production-quality landing page for a fictional premium coaching
and career development institute, built as a design showcase. The business,
contact details, testimonials and pricing are **fictional demo content**.

**Tagline:** *Your Ambition. Our Expertise. Your Future.*

## Tech stack

- Zero dependencies — semantic HTML5, hand-crafted CSS, vanilla JavaScript
- No build step, no frameworks — open `index.html` or serve statically
- Google Fonts (Playfair Display + Inter) with robust system fallbacks

## Project structure

```
├── index.html              # Semantic markup, all 12 sections
├── css/
│   ├── base.css            # Design tokens, reset, typography, decor
│   ├── components.css      # Header, buttons, cards, form, accordion, footer
│   └── sections.css        # Section layouts + complete responsive system
├── js/
│   ├── main.js             # Entry point — initializes all modules
│   ├── nav.js              # Sticky header, mobile menu, scrollspy
│   ├── reveal.js           # Scroll-triggered reveal animations
│   ├── accordion.js        # FAQ accordion (single-open, ARIA)
│   └── form.js             # Enquiry form validation + demo submission
└── assets/images/          # Cinematic photography (generated)
```

## Sections

1. **Hero** — admissions badge, gradient headline, dual CTAs, floating glass cards
2. **Trust indicators** — qualitative learning differentiators
3. **Programs** — Foundation / Professional Development / Advanced Preparation
4. **Why Choose Us** — editorial layout with numbered benefits
5. **Learning Experience** — 4-step connected timeline
6. **Testimonials** — clearly labelled illustrative demo testimonials
7. **About** — institute story, values, demo disclaimer
8. **Pricing / Admission** — 3 tiers with demo pricing, middle plan featured
9. **FAQ** — fully working accordion
10. **Contact** — validated enquiry form + demo contact details
11. **Final CTA** — conversion band with counselling + WhatsApp actions
12. **Footer** — quick links, programs, contact, social

## Functional features

- Responsive navigation with elegant mobile hamburger overlay
- Scrollspy active-link highlighting, smooth scrolling with offset
- FAQ accordion with ARIA `aria-expanded` / `aria-controls`
- Enquiry form with inline validation (name, Indian mobile number, email,
  program, message) and a clearly labelled demo success state
- Program preselect: clicking *Enquire Now / Learn More / Admission Enquiry*
  on any card scrolls to the form and preselects that program
- Functional WhatsApp CTA (demo number `+91 98765 43210`) — replace with the
  real business number in `index.html` (3 links + the sticky mobile bar)
- Clickable `tel:` / `mailto:` links, accessible focus states, skip link
- `prefers-reduced-motion` support, `<noscript>` fallbacks
- Lazy-loaded images, preloaded hero, semantic SEO meta tags

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or simply open `index.html` in a browser.

## Customizing for a real business

1. Replace the demo phone number (`+91 98765 43210`) and email
   (`hello@eliteacademy.demo`) with real details.
2. Connect the enquiry form (`js/form.js`) to a real email service or CRM
   instead of the on-screen demo success state.
3. Replace testimonials with genuine learner feedback and remove the demo
   disclaimer banners.
4. Replace the demo pricing with actual fee structures.
