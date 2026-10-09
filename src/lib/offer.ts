/**
 * Everything a prospect sees about price and how to buy lives here, so the
 * offer can change without touching page layout. Keep the demo assistant's
 * answers (Anchor-Core/netlify/functions/data/demo-knowledge.ts) in sync.
 */
export const CONTACT_EMAIL = 'alex@asandstech.com';

/** Set VITE_BOOKING_URL (Calendly, Cal.com, etc.) to send CTAs to a scheduler. */
export const BOOKING_URL: string =
  import.meta.env.VITE_BOOKING_URL ||
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Anchor setup call')}&body=${encodeURIComponent(
    'Hi Alex,\n\nI\'d like to get an AI assistant on my website.\n\nBusiness name:\nWebsite:\nWhat customers ask most:\n\nThanks!'
  )}`;

export const SETUP_FEE = '$500';

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
}

export const MANAGED_PLANS: Plan[] = [
  {
    name: 'Essentials',
    price: '$199',
    cadence: '/month',
    blurb: 'For a single site that gets the same questions every day.',
    features: [
      'Up to 1,000 conversations a month',
      'Trained on your website and documents',
      'Your colors, name and welcome message',
      'Content refresh once a month',
      'Hosting, AI usage and monitoring included',
      'Email support from a real person',
    ],
  },
  {
    name: 'Growth',
    price: '$449',
    cadence: '/month',
    blurb: 'For busier sites that want to keep improving the answers.',
    features: [
      'Up to 5,000 conversations a month',
      'Everything in Essentials',
      'Unlimited content updates',
      'Monthly report: top questions and gaps we fixed',
      'Priority support',
    ],
    highlighted: true,
  },
];

export const FOUNDING_OFFER = {
  enabled: true,
  text: `Founding customers: we waive the ${SETUP_FEE} setup fee for our first 5 businesses in exchange for honest feedback.`,
};
