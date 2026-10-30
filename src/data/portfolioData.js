export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Private Residences' },
  { id: 'dining', label: 'Kitchen & Dining' },
  { id: 'suites', label: 'Master Suites' },
  { id: 'commercial', label: 'Boutique Workspaces' },
];

export const PROJECTS_DATA = [
  {
    id: 'travertine-sanctuary',
    title: 'The Travertine Sanctuary',
    category: 'residential',
    categoryLabel: 'Private Residence',
    location: 'Beverly Hills, CA',
    year: '2025',
    area: '8,400 sq.ft.',
    image: '/images/hero.jpg',
    excerpt: 'Double-height living pavilion featuring book-matched Italian travertine, custom bouclé seating, and seamless glass garden vistas.',
    description: 'Designed as a serene sanctuary from metropolitan energy, this double-height villa centers around a monumental natural travertine stone core. Concealed architectural warm LEDs create a floating ceiling effect, while floor-to-ceiling thermally broken acoustic glass brings the Japanese maple garden directly into the living pavilion.',
    materials: ['Roman Travertine', 'American Walnut', 'Textured Bouclé', 'Patinated Bronze'],
    features: ['Double-Height Ceilings', 'Concealed LED Cove Lighting', 'Custom Walnut Joinery', 'Smart Circadian Climate'],
    awards: 'AD Golden Key Architecture Award 2025'
  },
  {
    id: 'japandi-culinary-haven',
    title: 'Japandi Minimalist Suite',
    category: 'dining',
    categoryLabel: 'Dining & Kitchen',
    location: 'Kensington, London',
    year: '2024',
    area: '3,200 sq.ft.',
    image: '/images/dining.jpg',
    excerpt: 'Monolithic Calacatta marble waterfall island paired with fluted dark oak and bespoke spun brass pendant illuminations.',
    description: 'A celebration of Nordic functionalism and Japanese wabi-sabi aesthetics. We combined fluted dark oak cabinetry with an unbroken Calacatta marble waterfall island. The brass pendants were custom spun to cast warm, glare-free downward illumination over organic linen dining settings.',
    materials: ['Calacatta Marble', 'Fluted Dark Oak', 'Brushed Brass', 'Woven Cane & Walnut'],
    features: ['Hidden Butler Pantry', 'Circadian Dining Lighting', 'Sub-Zero Concealed Systems', 'Acoustic Ceiling Plaster'],
    awards: 'International Interior Design Excellence 2024'
  },
  {
    id: 'serenity-master-suite',
    title: 'The Serenity Master Suite',
    category: 'suites',
    categoryLabel: 'Master Suite',
    location: 'Tribeca, New York',
    year: '2025',
    area: '2,600 sq.ft.',
    image: '/images/bedroom.jpg',
    excerpt: 'Tactile slatted oak feature wall with ambient halo backlighting, low-profile linen platform bed, and floor-to-ceiling sheer drapery.',
    description: 'Conceived for restful restoration, this master bedroom suite pairs acoustic slatted timber paneling with soft indirect ambient light. Warm limestone plaster walls soften daylight, creating a soothing sanctuary high above the city skyline.',
    materials: ['Acoustic Slatted Oak', 'Belgian Natural Linen', 'Carrara Marble', 'Plaster Lime Wash'],
    features: ['Integrated Acoustic Dampening', 'Halo Backlit Headboard', 'Motorized Sheer Layering', 'Custom Walk-In Dressing Wing'],
    awards: 'Luxe Residential Design Shortlist'
  },
  {
    id: 'obsidian-executive-lounge',
    title: 'The Obsidian Executive Lounge',
    category: 'commercial',
    categoryLabel: 'Boutique Commercial',
    location: 'Marina Bay, Singapore',
    year: '2024',
    area: '5,800 sq.ft.',
    image: '/images/office.jpg',
    excerpt: 'High-altitude corporate penthouse lounge with fluted glass acoustic partitions, travertine credenzas, and sculptural bronze chandeliers.',
    description: 'Reimagining the corporate workplace into a refined boutique hospitality environment. Featuring fluted privacy glass, custom bronze organic chandeliers, and curated mid-century seating positioned to frame panoramic skyline perspectives.',
    materials: ['Fluted Architectural Glass', 'Travertine Stone', 'Smoked Walnut', 'Sculptural Cast Bronze'],
    features: ['Smart Sound-Masking Partitions', 'Private Tasting & Cigar Bar', 'Executive Boardroom Integration', 'Panoramic Skyline Glazing'],
    awards: 'Asia Pacific Workspace Design of the Year'
  }
];

export const EXPERTISE_DATA = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Architecture & Private Estates',
    description: 'Crafting bespoke private residences, penthouses, and heritage restorations. Every room is harmonized with proportion, sightlines, and natural light.',
    highlights: ['Spatial Narrative & Volume Planning', 'Custom Cabinetry & Millwork Detailing', 'Indoor-Outdoor Landscape Transitions', 'Bespoke Curated Art & Furnishings'],
    stats: '120+ Estates Delivered'
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Hospitality & Boutique Workspaces',
    description: 'Elevating commercial environments into evocative experiences. We design flagship headquarters, boutique hotel suites, and Michelin-starred dining destinations.',
    highlights: ['Atmospheric Brand Storytelling', 'Acoustic Comfort Engineering', 'Executive Suite & Boardroom Curation', 'Commercial Grade Luxury Durability'],
    stats: '60+ Commercial Sanctuaries'
  },
  {
    id: 'craftsmanship',
    number: '03',
    title: 'Bespoke Furniture & Material Craft',
    description: 'We do not compromise on off-the-shelf components. We partner directly with master stone artisans, glass artists, and joiners across the globe.',
    highlights: ['Rare Stone Quarry Sourcing', 'Custom Walnut & Oak Millwork', 'Hand-Patinated Metal Hardware', 'Hand-Knotted Organic Textiles'],
    stats: '100% Unique To Each Client'
  },
  {
    id: 'lighting',
    number: '04',
    title: 'Architectural Lighting & Spatial Flow',
    description: 'Light is the supreme interior material. We engineer multi-layered circadian lighting schemes that transition gracefully from bright daylight to moody evening warmth.',
    highlights: ['Concealed Architectural Cove Lights', 'Sculptural Statement Chandeliers', 'Dim-to-Warm Circadian Controls', 'Shadow & Reflection Sculpting'],
    stats: 'Zero Glare Philosophy'
  },
  {
    id: 'turnkey',
    number: '05',
    title: 'Turnkey Project Direction & Delivery',
    description: 'A seamless white-glove experience from the very first sketch to the day you receive the keys. We manage contractors, permits, sourcing, and on-site precision.',
    highlights: ['Photorealistic 3D Digital Twins', 'Strict Budget & Timeline Governance', 'On-Site Craft Supervision', 'Turnkey White-Glove Handover'],
    stats: 'Guaranteed On-Time Delivery'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Spatial Narrative',
    desc: 'We analyze your lifestyle rituals, aesthetic aspirations, architectural volumes, and site geography to forge a distinct creative narrative.'
  },
  {
    step: '02',
    title: 'Concept & Material Curation',
    desc: 'Development of bespoke moodboards, physical tactile material trays (travertine, hand-finished timbers, patinated metals), and initial spatial layouts.'
  },
  {
    step: '03',
    title: '3D Architectural Visualization',
    desc: 'Hyper-realistic digital walkthroughs and technical CAD documentation, detailing custom millwork, electrical lighting layouts, and plumbing elevations.'
  },
  {
    step: '04',
    title: 'Artisan Execution & Handover',
    desc: 'Rigorous on-site fabrication supervision with our network of master craftsmen, concluding with full white-glove styling, artwork mounting, and key handover.'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Mithun',
    role: 'Founder & Principal Interior Architect',
    bio: 'With over 14 years shaping private sanctuaries across London, New York, and Mumbai, Mithun combines architectural rigor with warm, tactile minimalism. He holds master degrees in Architecture and Interior Spatial Design.',
    image: '/images/mithun.jpg',
    specialty: 'Spatial Architecture & Light Curation',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Ananya Roy',
    role: 'Design Partner & Residential Lead',
    bio: 'Specializing in high-end private villas and heritage penthouse restorations. Ananya brings an intuitive eye for natural stone veining, organic textures, and ergonomic living sanctuaries.',
    image: '/images/partner.jpg',
    specialty: 'Bespoke Joinery & Residential Living',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Marcus Chen',
    role: 'Director of Materials & Artisan Millwork',
    bio: 'A master timber craftsman and material engineer who oversees our custom fabrication workshops, quarry selections, and innovative sustainable wood finishes.',
    image: '/images/craftsman.jpg',
    specialty: 'Custom Furniture & Sustainable Finishes',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Mithun transformed our raw double-height penthouse into a timeless sanctuary. The play of travertine and warm concealed lighting has completely elevated our daily lives.',
    author: 'Vikram & Natasha Singhania',
    role: 'Private Residence Clients',
    location: 'Bel Air & Mumbai'
  },
  {
    quote: 'Studio Mithun delivered our corporate executive suite with exceptional precision. Every client who walks into our boardroom is captivated by the fluted glass and craftsmanship.',
    author: 'Elena Rostova',
    role: 'Managing Partner, Apex Capital',
    location: 'London & Singapore'
  },
  {
    quote: 'Their obsession with materiality, from the tactile linen to the custom brass joinery, is unparalleled. Truly world-class interior architecture.',
    author: 'Julian Thorne',
    role: 'Architectural Critic & Homeowner',
    location: 'New York City'
  }
];

export const PRESS_LOGOS = [
  'Architectural Digest',
  'ELLE Decor',
  'Wallpaper* Magazine',
  'Vogue Living',
  'The World of Interiors'
];
