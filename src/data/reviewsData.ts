/**
 * Reviews Data Adapter Architecture for Village Cleaners.
 *
 * IMPORTANT COMPLIANCE:
 * The prospecting snapshot (4.4 stars, 101 reviews) is preserved as client baseline data.
 * Zero fabricated reviewer names, fake dates, or counterfeit Google verification badges.
 * When live API credentials are provided, the adapter streams live Google Places API data.
 * In demonstration mode, UI cards are explicitly marked as "Sample Layout Excerpt".
 */

export interface ReviewItem {
  id: string;
  category: 'Suiting' | 'Everyday Care' | 'Delicates' | 'Neighborhood Service';
  headline: string;
  content: string;
  authorLabel: string;
  relationNote: string;
  stars: number;
  isSamplePlaceholder: boolean;
}

export interface ReviewSnapshot {
  rating: number;
  totalReviews: number;
  isVerifiedLive: boolean;
  sourceLabel: string;
  profileSearchUrl: string;
}

export const REVIEWS_SNAPSHOT: ReviewSnapshot = {
  rating: 4.4,
  totalReviews: 101,
  isVerifiedLive: false,
  sourceLabel: 'Prospecting Snapshot (4.4 ★ / 101 Google Reviews)',
  profileSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Village+Cleaners+2010+Acklen+Ave+Nashville+TN+37212',
};

// Clearly identified design sample layout entries illustrating review presentation
export const SAMPLE_REVIEW_EXCERPTS: ReviewItem[] = [
  {
    id: 'sample-1',
    category: 'Suiting',
    headline: 'Crisp, structured finish on business woolens',
    content: 'Sample review presentation demonstrating how verified customer feedback on suit lapel roll, pant creasing, and dependable counter service is rendered in the live system.',
    authorLabel: 'Nashville Professional (Sample)',
    relationNote: 'Hillsboro Village Patron Excerpt',
    stars: 5,
    isSamplePlaceholder: true,
  },
  {
    id: 'sample-2',
    category: 'Everyday Care',
    headline: 'Consistently immaculate shirt laundering',
    content: 'Sample review presentation illustrating customer appreciation for collar stiffness consistency, careful button preservation, and friendly morning greeting on Acklen Ave.',
    authorLabel: 'Vanderbilt Area Resident (Sample)',
    relationNote: 'Weekly Wardrobe Excerpt',
    stars: 4,
    isSamplePlaceholder: true,
  },
  {
    id: 'sample-3',
    category: 'Delicates',
    headline: 'Thoughtful handling of silk and vintage pieces',
    content: 'Sample review presentation showcasing client praise for delicate fiber care, transparent stain assessments, and careful occasion-wear finishing before Nashville events.',
    authorLabel: 'Local Event Attendee (Sample)',
    relationNote: 'Specialty Garment Excerpt',
    stars: 5,
    isSamplePlaceholder: true,
  },
  {
    id: 'sample-4',
    category: 'Neighborhood Service',
    headline: 'Familiar, dependable neighborhood hospitality',
    content: 'Sample review presentation showing community trust for decades of reliable service, convenient location near 21st Avenue, and honest timelines.',
    authorLabel: 'Acklen Ave Neighbor (Sample)',
    relationNote: 'Generational Customer Excerpt',
    stars: 5,
    isSamplePlaceholder: true,
  },
];
