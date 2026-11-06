export interface CareGuideItem {
  id: string;
  name: string;
  tagline: string;
  recommendedService: string;
  frequency: string;
  handlingTips: string[];
  thingsToAvoid: string[];
}

export const CARE_GUIDE_DATA: CareGuideItem[] = [
  {
    id: 'wool-cashmere',
    name: 'Fine Wool & Cashmere',
    tagline: 'Preserving natural loft, lanolin oils, and softness',
    recommendedService: 'Professional Low-Moisture Dry Cleaning',
    frequency: 'At change of season, or every 4–6 wears',
    handlingTips: [
      'Allow wool garments to air out for 24 hours between wears before hanging.',
      'Always dry clean before long-term seasonal closet storage to deter moth larvae.',
      'Use wide, contoured wooden hangers that support the shoulder slope.',
    ],
    thingsToAvoid: [
      'Never spray perfume, cologne, or hairspray directly onto wool fibers.',
      'Avoid high-temperature household dryer cycles which cause irreversible shrinkage.',
      'Do not rub wet spills vigorously, which breaks fragile yarn surfaces.',
    ],
  },
  {
    id: 'silk-delicates',
    name: 'Pure Mulberry Silk & Satin',
    tagline: 'Protecting tensile luster and delicate color dyes',
    recommendedService: 'Delicate Solvent Purification & Hand Steaming',
    frequency: 'After every 1–2 wears or immediate stain contact',
    handlingTips: [
      'Store silk on padded hangers away from direct sunlight, which can fade reactive dyes.',
      'Inform staff immediately of water rings, sweat contact, or perfume rings.',
      'Always bring matching sets (e.g. silk blouse and camisole) together.',
    ],
    thingsToAvoid: [
      'Never spot-clean with water; water creates visible halos on untreated silk.',
      'Avoid plastic dry-cleaning bags for long-term storage; use breathable cotton covers.',
      'Do not apply direct hot iron plates to silk surfaces.',
    ],
  },
  {
    id: 'tailored-suiting',
    name: 'Tailored Suits & Blazers',
    tagline: 'Maintaining lapel roll, chest canvas, and fabric drape',
    recommendedService: 'Suits & Business Attire Shaping Press',
    frequency: 'Every 3–4 weeks for regular wear, or following major events',
    handlingTips: [
      'Hang on wishbone wooden hangers to preserve the pad of the shoulders.',
      'Bring jacket and trousers together even if only one piece seems visibly soiled.',
      'Empty all pockets after wear to avoid stretched linings and sagging flaps.',
    ],
    thingsToAvoid: [
      'Do not over-dry-clean. Frequent pressing between cleanings restores shape without fiber stress.',
      'Never hang on wire hangers, which puncture shoulder pads.',
      'Avoid sliding across rough leather or mesh car seats without care.',
    ],
  },
  {
    id: 'oxford-linens',
    name: 'Crisp Oxford & Fine Linen',
    tagline: 'Crisp plackets, structured collars, and breathable weave',
    recommendedService: 'Shirt Laundering & Hand Touch-up Pressing',
    frequency: 'After each wear',
    handlingTips: [
      'Specify your custom starch preference (Zero, Light, or Medium).',
      'Remove collar stays before placing in your laundry hamper.',
      'Linen benefits from gentle moisture pressing while slightly damp.',
    ],
    thingsToAvoid: [
      'Do not machine-dry shirts until completely bone-dry, which bakes in wrinkles.',
      'Avoid heavy chlorine bleach which weakens cotton warp threads over time.',
      'Never force bent mother-of-pearl buttons through tight buttonholes.',
    ],
  },
  {
    id: 'stain-emergency',
    name: 'Stain First-Aid Protocol',
    tagline: 'What to do the moment a spill happens before bringing it in',
    recommendedService: 'Targeted Stain Diagnosis & Ultrasonic Spotting',
    frequency: 'Immediate drop-off for best outcome',
    handlingTips: [
      'Gently blot (never rub) excess liquid immediately using a clean, dry white cloth.',
      'Note what caused the stain (e.g., olive oil, red wine, coffee, ballpoint ink).',
      'Bring the garment to Acklen Ave as soon as possible before stains oxidize.',
    ],
    thingsToAvoid: [
      'Do NOT apply club soda, salt, vinegar, or bar soap — this can permanently set tannins.',
      'Do NOT iron or apply heat to a stained garment; heat permanently polymerizes proteins.',
      'Never wait weeks before bringing in an oily stain.',
    ],
  },
];
