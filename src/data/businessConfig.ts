/**
 * Centralized business configuration for Village Cleaners.
 * All information is strictly verified against provided business data.
 */

export const BUSINESS_CONFIG = {
  name: 'Village Cleaners',
  tagline: 'Exceptional Care. A Nashville Tradition.',
  address: {
    street: '2010 Acklen Ave',
    city: 'Nashville',
    state: 'TN',
    zip: '37212',
    neighborhood: 'Hillsboro Village / Vanderbilt area',
    fullFormatted: '2010 Acklen Ave, Nashville, TN 37212',
  },
  contact: {
    phoneRaw: '+16153834264',
    phoneDisplay: '(615) 383-4264',
    // Public email is unconfirmed; inquiries run via validated form
    inquiryNotice: 'Inquiry routing demo — connect with your customer service dispatch in production.',
  },
  hours: [
    { days: 'Monday – Friday', hours: '7:00 AM – 6:00 PM', isWeekday: true },
    { days: 'Saturday', hours: '8:00 AM – 4:00 PM', isWeekday: false },
    { days: 'Sunday', hours: 'Closed', isWeekday: false },
  ],
  heritage: {
    headline: 'Serving Nashville for Generations',
    statement: 'A trusted staple of Hillsboro Village garment care, honoring personal service, meticulous finishing, and the lasting relationships built over decades of neighborhood patronage.',
    disclaimer: 'Heritage note: Historical business registry records indicate origins circa 1950. Preserved here as community tradition.',
  },
  urls: {
    // Verified Google Maps directions destination using precise address
    directions: 'https://www.google.com/maps/dir/?api=1&destination=2010+Acklen+Ave,+Nashville,+TN+37212',
    // Search query for authentic Village Cleaners Google Business profile on Acklen Ave
    googleProfileSearch: 'https://www.google.com/maps/search/?api=1&query=Village+Cleaners+2010+Acklen+Ave+Nashville+TN+37212',
    appleMaps: 'https://maps.apple.com/?address=2010+Acklen+Ave,+Nashville,+TN+37212',
  },
  ratingsSnapshot: {
    rating: 4.4,
    reviewCount: 101,
    source: 'Prospective Client Data Snapshot',
    isLiveConnected: false,
    demoDisclaimer: 'Sample demonstration data based on prospecting snapshot (4.4 ★ / 101 reviews). Connect Google Places API for live sync.',
  },
};
