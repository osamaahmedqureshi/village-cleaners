export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  details: {
    overview: string;
    fabrics: string[];
    process: string[];
    advisory: string;
    verifiedStatus: 'Verified Core Service' | 'Specialty Service (In-Store Evaluation)';
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dry-cleaning',
    number: '01',
    title: 'Professional Dry Cleaning',
    category: 'Core Garment Care',
    shortDesc: 'Gentle, fabric-specific solvent cleaning that protects fibers, revives texture, and maintains structural integrity.',
    image: '/images/services_dry_cleaning_1793993497624.jpg',
    details: {
      overview: 'Our foundational dry cleaning process respects the chemistry of every garment. From everyday woolens to bespoke outerwear, each piece undergoes meticulous initial inspection, measured cleaning cycles, and hand-finishing.',
      fabrics: ['Virgin Wool', 'Merino & Cashmere Blends', 'Synthetics & Poly-Blends', 'Linen', 'Gabardine'],
      process: [
        'Individual classification by fiber weight and color palette',
        'Pre-spotting of localized surface soils before main cycle',
        'Controlled low-moisture purification',
        'Form-fitted tension pressing for natural garment drape',
      ],
      advisory: 'Standard turnaround is typically 2–3 business days. Please inform our front counter staff of any specialty linings or custom buttons.',
      verifiedStatus: 'Verified Core Service',
    },
  },
  {
    id: 'shirt-laundering',
    number: '02',
    title: 'Shirt Laundering & Pressing',
    category: 'Daily Wardrobe',
    shortDesc: 'Crisp collars, smooth plackets, and flawless cuff finishes with custom starch preferences tailored to your style.',
    image: '/images/hero_garment_craft_1793993496017.jpg',
    details: {
      overview: 'A sharp shirt anchors the entire day. We wash in controlled temperatures with gentle detergents, followed by automated precision body pressing and meticulous hand touch-ups on collars and french cuffs.',
      fabrics: ['100% Pima & Egyptian Cotton', 'Oxford Cloth', 'Broadcloth', 'Twill', 'Linen Blends'],
      process: [
        'Collar and cuff pre-treatment for daily skin oils',
        'Water-temperature regulation to preserve cotton fibers',
        'Choice of Light, Medium, Heavy, or Zero Starch',
        'Hanger presentation or boxed folding upon request',
      ],
      advisory: 'We check for loose or cracked buttons on every shirt prior to pressing. Natural mother-of-pearl buttons receive extra padding during press cycles.',
      verifiedStatus: 'Verified Core Service',
    },
  },
  {
    id: 'suits-business',
    number: '03',
    title: 'Suits & Business Attire',
    category: 'Tailored Menswear & Womenswear',
    shortDesc: 'Architectural pressing that preserves the roll of the lapel, natural shoulder pads, and trouser creases.',
    image: '/images/gallery_tailoring_finishing_1793993497270.jpg',
    details: {
      overview: 'Fine tailoring requires an understanding of inner canvassing, horsehair chest pieces, and wool shrinkage behavior. We steam and shape suits to maintain their three-dimensional silhouette without shine.',
      fabrics: ['Super 100s–150s Worsted Wool', 'Flannel', 'Mohair', 'Silk-Wool Blends', 'Structured Crepe'],
      process: [
        'Soft steam roll for the lapel break rather than hard flattening',
        'Pocket flap alignment and lining moisture release',
        'Double-line prevention on pant creases',
        'Sturdy wooden/shaped hanger return to prevent shoulder sagging',
      ],
      advisory: 'Always bring both jacket and trousers together so fabric aging, color tone, and texture remain harmonious across cleanings.',
      verifiedStatus: 'Verified Core Service',
    },
  },
  {
    id: 'formalwear-delicates',
    number: '04',
    title: 'Formalwear & Special Occasion',
    category: 'Evening & Bridal',
    shortDesc: 'Artisanal treatment for evening gowns, silk blouses, tuxedos, and heirlooms requiring utmost gentleness.',
    image: '/images/services_couture_delicates_1793993497402.jpg',
    details: {
      overview: 'Occasion garments carry irreplaceable memories. Whether preparing for a gala at the Schermerhorn Symphony Center, a Nashville wedding, or restoring an archival silk blouse, we evaluate embellishments and delicate seams before cleaning.',
      fabrics: ['Mulberry Silk', 'Chiffon & Organza', 'Velvet', 'Satin', 'Lace & Tulle'],
      process: [
        'Individual barrier wraps for beads, sequins, and metallic hardware',
        'Low-temperature, zero-abrasion drying cycles',
        'Hand-steamed finishing without contact iron pressure',
        'Acid-free tissue placement inside bodices and sleeves',
      ],
      advisory: 'Specialty occasion wear may require additional time for careful air drying and delicate hand-pressing. Early drop-off is strongly recommended.',
      verifiedStatus: 'Specialty Service (In-Store Evaluation)',
    },
  },
  {
    id: 'stain-treatment',
    number: '05',
    title: 'Stain Treatment & Fabric Care',
    category: 'Specialty Restoration',
    shortDesc: 'Targeted spot diagnosis based on fiber type and stain chemistry — treating oil, wine, ink, and coffee with care.',
    image: '/images/heritage_garment_care_1793993496548.jpg',
    details: {
      overview: 'No single chemical solves every stain. We analyze whether a spill is tannin-based, protein-based, or oil-based, applying specialized agents before cleaning to dissolve marks without breaking the weave.',
      fabrics: ['All Garment Fibers', 'Delicate Silks', 'Vintage Wool', 'Cotton Twills'],
      process: [
        'Spot diagnosis: water-soluble vs. solvent-soluble',
        'Feathered ultrasonic and vacuum board application to prevent halos',
        'Rinse flush to neutralize all chemical residue',
        'Final inspection under daylight-balanced spectrum lighting',
      ],
      advisory: 'Honest care policy: Never rub a spill with club soda or paper napkins. We assess each stain honestly at drop-off and cannot guarantee 100% removal for set-in or heat-fixed stains.',
      verifiedStatus: 'Specialty Service (In-Store Evaluation)',
    },
  },
  {
    id: 'alterations-adjustments',
    number: '06',
    title: 'Alterations & Garment Adjustments',
    category: 'Fit & Tailoring',
    shortDesc: 'Hemming, zipper repairs, cuff adjustments, and tapering to ensure your clothes fit comfortably and look bespoke.',
    image: '/images/gallery_tailoring_finishing_1793993497270.jpg',
    details: {
      overview: 'A fine garment should feel custom-made. We offer practical adjustments to revive beloved garments in your wardrobe, from simple trouser hems to seam reinforcement.',
      fabrics: ['Denim', 'Suiting Wool', 'Dress Cottons', 'Lined Skirts'],
      process: [
        'In-store measurement pin-up or bring your sample fit',
        'Original hem preservation for designer denim',
        'Hardware replacement with color-matched zippers and clasps',
        'Pressing of finished seams to eliminate puckering',
      ],
      advisory: 'Alteration turnaround depends on seamstress scheduling and complexity. Please bring your intended shoes for accurate hem measurement.',
      verifiedStatus: 'Specialty Service (In-Store Evaluation)',
    },
  },
];
