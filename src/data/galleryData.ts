export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  tag: string;
  aspect: 'portrait' | 'landscape' | 'square';
  alt: string;
  caption: string;
}

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: '/images/hero_garment_craft_1793993496017.jpg',
    title: 'Tailored Suiting & Fine Cotton',
    tag: 'Menswear & Finishing',
    aspect: 'portrait',
    alt: 'Tailored charcoal wool suit jacket and crisp white shirt on handcrafted walnut hanger in natural studio light',
    caption: 'Meticulous shape retention and steam-shaped lapels on fine wool suiting.',
  },
  {
    id: 'gallery-2',
    src: '/images/heritage_garment_care_1793993496548.jpg',
    title: 'Steam Finishing Craft',
    tag: 'Artisanal Pressing',
    aspect: 'landscape',
    alt: 'Artisanal steam pressing machine with rising steam and delicate textiles in a traditional workshop setting',
    caption: 'Gentle low-moisture steam finishing that relaxes wrinkles without flattening fiber loft.',
  },
  {
    id: 'gallery-3',
    src: '/images/services_dry_cleaning_1793993497624.jpg',
    title: 'Boutique Presentation Rack',
    tag: 'Finished Garments',
    aspect: 'portrait',
    alt: 'Finished blazers, shirts, and trench coats hanging neatly on a brushed brass garment rail in an elegant boutique interior',
    caption: 'Every garment is presented on structured hangers with protective breathable covering.',
  },
  {
    id: 'gallery-4',
    src: '/images/services_couture_delicates_1793993497402.jpg',
    title: 'Silk Weave & Cashmere Preservation',
    tag: 'Couture & Delicates',
    aspect: 'portrait',
    alt: 'Macro editorial detail of champagne silk and fine cashmere fabric showing intricate hand-finished edge seams',
    caption: 'Zero-friction solvent purification preserving natural silk luster and cashmere softness.',
  },
  {
    id: 'gallery-5',
    src: '/images/gallery_tailoring_finishing_1793993497270.jpg',
    title: 'Bespoke Lapel & Horn Button Detail',
    tag: 'Tailoring Precision',
    aspect: 'square',
    alt: 'Close-up of bespoke navy wool lapel with pick stitching and fine horn button finish',
    caption: 'Fine stitching and collar alignment inspected before customer collection.',
  },
];
