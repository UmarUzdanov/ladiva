// Portfolio Projects Data
export interface Project {
  id: string
  title: string
  slug: string
  category: 'Kitchen' | 'Bathroom' | 'Fireplace' | 'Backsplash' | 'Laundry Room'
  style: 'Farmhouse' | 'Coastal' | 'Minimalist & Modern' | 'Mid-Century Modern' | 'Bohemian'
  materials: string[]
  description: string
  challenge: string
  solution: string
  images: {
    before?: string
    after: string
    details: string[]
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Farmhouse Kitchen with Herringbone Backsplash',
    slug: 'farmhouse-kitchen-herringbone',
    category: 'Kitchen',
    style: 'Farmhouse',
    materials: ['Subway Tiles', 'Herringbone Pattern', 'White Ceramic'],
    description: 'Classic farmhouse kitchen featuring white herringbone backsplash and warm wood elements.',
    challenge: 'Creating traditional farmhouse charm while maintaining modern functionality and clean lines.',
    solution: 'We installed white herringbone tiles in the backsplash area, paired with blue island cabinetry and natural wood flooring. The result is a perfect blend of rustic warmth and contemporary style.',
    images: {
      after: '/architessa_images_downloaded/kitchen.jpg',
      details: [
        '/architessa_images_downloaded/farmhouse-farmhouse-architessa.jpg',
        '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
        '/architessa_images_downloaded/backsplash-backsplash-architessa.png',
        '/architessa_images_downloaded/herringbone-herringbone-tile.png',
        '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
        '/architessa_images_downloaded/ceramic-ceramic-architessa.webp',
        '/architessa_images_downloaded/kitchen-floor-kitchen-floor-architessa.png'
      ],
    },
  },
  {
    id: '2',
    title: 'Coastal Kitchen with Blue Herringbone',
    slug: 'coastal-kitchen-blue-herringbone',
    category: 'Kitchen',
    style: 'Coastal',
    materials: ['Blue Herringbone', 'Glass Tile', 'Natural Wood'],
    description: 'Bright coastal kitchen with stunning blue herringbone backsplash and natural wood accents.',
    challenge: 'Balancing vibrant blue tones while maintaining a light, airy coastal feel.',
    solution: 'We created a beautiful blue herringbone pattern backsplash with floating wood shelves. The soft blue tones evoke ocean waves while wood elements add warmth.',
    images: {
      after: '/architessa_images_downloaded/coastal-coastal-architessa.jpg',
      details: [
        '/architessa_images_downloaded/herringbone-herringbone-tile.png',
        '/architessa_images_downloaded/glass-tile-glass-tile-architessa.webp',
        '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
        '/architessa_images_downloaded/pebble-tile-pebble-tile-architessa.webp',
        '/architessa_images_downloaded/natural-stone-natural-stone-architessa.webp',
        '/architessa_images_downloaded/kitchen-floor-kitchen-floor-architessa.png'
      ],
    },
  },
  {
    id: '3',
    title: 'Mid-Century Modern Kitchen Floor',
    slug: 'mid-century-kitchen-floor',
    category: 'Kitchen',
    style: 'Mid-Century Modern',
    materials: ['Wood-Look Porcelain', 'Geometric Patterns', 'Brass Accents'],
    description: 'Contemporary kitchen featuring sleek wood-look floor tiles with mid-century modern aesthetic.',
    challenge: 'Creating authentic mid-century style with modern materials and durability.',
    solution: 'We installed wood-look porcelain tiles in warm tones, paired with geometric patterns and brass fixtures for that perfect retro-modern vibe.',
    images: {
      after: '/architessa_images_downloaded/kitchen-floor-kitchen-floor-architessa.png',
      details: [
        '/architessa_images_downloaded/mid-century-modern-mid-century-modern-architessa.png',
        '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
        '/architessa_images_downloaded/hexagon-hexagon.png',
        '/architessa_images_downloaded/contemporary-contemporary-architessa.jpg',
        '/architessa_images_downloaded/herringbone-herringbone-tile.png'
      ],
    },
  },
  {
    id: '4',
    title: 'Modern Laundry Room with Gray Tiles',
    slug: 'modern-laundry-room',
    category: 'Laundry Room',
    style: 'Minimalist & Modern',
    materials: ['Large Format Tiles', 'Gray Porcelain', 'Matte Finish'],
    description: 'Sleek laundry room featuring large format gray tiles and modern minimalist design.',
    challenge: 'Maximizing style and function in a compact utility space.',
    solution: 'We used large format gray tiles for seamless look with minimal grout lines, creating a clean, modern space that feels larger and more luxurious.',
    images: {
      after: '/architessa_images_downloaded/all-interior-floor-all-interior-floor-architessa.png',
      details: [
        '/architessa_images_downloaded/porcelain-porcelain-architessa.webp',
        '/architessa_images_downloaded/minimalist-minimalist-architessa.webp',
        '/architessa_images_downloaded/modern-modern-architessa.jpg',
        '/architessa_images_downloaded/contemporary-contemporary-architessa.jpg',
        '/architessa_images_downloaded/porcelain-slabs-panels-porcelain-slabs-panels-architessa.jpg'
      ],
    },
  },
  {
    id: '6',
    title: 'Modern Bathroom with Natural Stone',
    slug: 'modern-bathroom-natural-stone',
    category: 'Bathroom',
    style: 'Minimalist & Modern',
    materials: ['Natural Stone', 'Large Format Tiles', 'Stacked Stone'],
    description: 'A luxurious spa-like bathroom featuring stunning natural stone accent wall and contemporary tile work.',
    challenge: 'Creating a dramatic focal point while maintaining a clean, modern aesthetic and ensuring proper water resistance.',
    solution: 'We featured a stunning stacked stone accent wall paired with large-format gray tiles. The combination creates depth and texture while maintaining the sleek, modern feel the client desired.',
    images: {
      after: '/architessa_images_downloaded/bathroom-floor-bathroom-floor-architessa.png',
      details: [
        '/architessa_images_downloaded/natural-stone-natural-stone-architessa.webp',
        '/architessa_images_downloaded/marble-look-marble-look-architessa.jpg',
        '/architessa_images_downloaded/porcelain-slabs-panels-porcelain-slabs-panels-architessa.jpg',
        '/architessa_images_downloaded/minimalist-minimalist-architessa.webp',
        '/architessa_images_downloaded/modern-modern-architessa.jpg',
        '/architessa_images_downloaded/polished-polished-architessa.webp',
        '/architessa_images_downloaded/contemporary-contemporary-architessa.jpg',
        '/architessa_images_downloaded/dimensional-3d-dimensional-3d-architessa.jpg'
      ],
    },
  },
  {
    id: '7',
    title: 'Contemporary Bathroom with Horizontal Tiles',
    slug: 'contemporary-bathroom-horizontal-tiles',
    category: 'Bathroom',
    style: 'Minimalist & Modern',
    materials: ['Horizontal Stacked Tiles', 'Large Format Floor Tiles', 'Glass'],
    description: 'A sophisticated bathroom featuring elegant horizontal tile work and warm wood accents.',
    challenge: 'Balancing contemporary style with warmth and creating visual interest through tile layout.',
    solution: 'We used horizontal stacked tiles for the walls, creating a sophisticated linear pattern. Paired with sleek dark floor tiles and warm wood vanities, the space feels both modern and inviting.',
    images: {
      after: '/architessa_images_downloaded/porcelain-a-bathroom-with-blue-currents-tiles-installed.webp',
      details: [
        '/architessa_images_downloaded/contemporary-contemporary-architessa.jpg',
        '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
        '/architessa_images_downloaded/glass-tile-glass-tile-architessa.webp',
        '/architessa_images_downloaded/porcelain-porcelain-architessa.webp',
        '/architessa_images_downloaded/minimalist-minimalist-architessa.webp',
        '/architessa_images_downloaded/modern-modern-architessa.jpg',
        '/architessa_images_downloaded/ceramic-ceramic-architessa.webp'
      ],
    },
  },
  {
    id: '8',
    title: 'Herringbone Pattern Bathroom',
    slug: 'herringbone-pattern-bathroom',
    category: 'Bathroom',
    style: 'Coastal',
    materials: ['Herringbone Tiles', 'Subway Tiles', 'Porcelain'],
    description: 'Classic herringbone pattern creates timeless elegance in soft, neutral tones.',
    challenge: 'Installing intricate herringbone pattern while ensuring perfect alignment and symmetry.',
    solution: 'We carefully installed herringbone-patterned tiles in a soft gray tone, creating a sophisticated texture that catches light beautifully. The pattern adds visual interest without overwhelming the space.',
    images: {
      after: '/architessa_images_downloaded/herringbone-herringbone-tile.png',
      details: [
        '/architessa_images_downloaded/coastal-coastal-architessa.jpg',
        '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
        '/architessa_images_downloaded/pebble-tile-pebble-tile-architessa.webp',
        '/architessa_images_downloaded/natural-stone-natural-stone-architessa.webp',
        '/architessa_images_downloaded/glass-tile-glass-tile-architessa.webp',
        '/architessa_images_downloaded/porcelain-porcelain-architessa.webp',
        '/architessa_images_downloaded/bathroom-floor-bathroom-floor-architessa.png'
      ],
    },
  },
  {
    id: '9',
    title: 'Bold Black Floral Bathroom',
    slug: 'bold-black-floral-bathroom',
    category: 'Bathroom',
    style: 'Bohemian',
    materials: ['Floral Patterned Tiles', 'Black Ceramic', 'Gold Fixtures'],
    description: 'A dramatic statement bathroom with bold floral tiles and luxurious gold accents.',
    challenge: 'Creating a bold pattern statement while maintaining elegance and avoiding visual overwhelm.',
    solution: 'We selected stunning black tiles with white floral patterns, paired with gold fixtures and a freestanding tub. The contrast creates drama while the elegant pattern keeps it sophisticated.',
    images: {
      after: '/architessa_images_downloaded/zellige-look-zellige-look-architessa.jpg',
      details: [
        '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg',
        '/architessa_images_downloaded/ceramic-ceramic-architessa.webp',
        '/architessa_images_downloaded/dimensional-3d-dimensional-3d-architessa.jpg',
        '/architessa_images_downloaded/terracotta-cotto-look-terracotta-cotto-look-architessa.jpg',
        '/architessa_images_downloaded/hexagon-hexagon.png',
        '/architessa_images_downloaded/mosaic-mosaic-architessa.png',
        '/architessa_images_downloaded/pebble-tile-pebble-tile-architessa.webp',
        '/architessa_images_downloaded/marble-look-marble-look-architessa.jpg'
      ],
    },
  },
  {
    id: '10',
    title: 'Bohemian Living Space with Terracotta',
    slug: 'bohemian-terracotta-living',
    category: 'Fireplace',
    style: 'Bohemian',
    materials: ['Terracotta Tiles', 'Green Ceramic', 'Natural Clay'],
    description: 'Warm, earthy bohemian space featuring terracotta floor tiles and green tiled fireplace.',
    challenge: 'Incorporating bold tile choices into a cohesive, livable space with multiple textures.',
    solution: 'We used warm terracotta floor tiles and created a stunning green tiled fireplace surround. The natural materials and rich colors create an inviting, globally-inspired atmosphere.',
    images: {
      after: '/architessa_images_downloaded/fireplace-surround-fireplace-surround-architessa.png',
      details: [
        '/architessa_images_downloaded/terracotta-cotto-look-terracotta-cotto-look-architessa.jpg',
        '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg',
        '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
        '/architessa_images_downloaded/natural-stone-natural-stone-architessa.webp',
        '/architessa_images_downloaded/ceramic-ceramic-architessa.webp',
        '/architessa_images_downloaded/zellige-look-zellige-look-architessa.jpg'
      ],
    },
  },
  {
    id: '11',
    title: 'Tile Selection Showroom Display',
    slug: 'tile-selection-showroom',
    category: 'Backsplash',
    style: 'Minimalist & Modern',
    materials: ['Various Tile Samples', 'Porcelain', 'Natural Stone'],
    description: 'Professional tile selection process showcasing diverse patterns and materials.',
    challenge: 'Helping clients visualize and compare multiple tile options for their project.',
    solution: 'We create comprehensive tile presentations showing various patterns, textures, and styles. This allows clients to see options side-by-side and make informed decisions.',
    images: {
      after: '/architessa_images_downloaded/backsplash-backsplash-architessa.png',
      details: [
        '/architessa_images_downloaded/multifamily-unit-backsplash-multifamily-unit-backsplash-architessa.jpg',
        '/architessa_images_downloaded/porcelain-slabs-panels-porcelain-slabs-panels-architessa.jpg',
        '/architessa_images_downloaded/glass-tile-glass-tile-architessa.webp',
        '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
        '/architessa_images_downloaded/herringbone-herringbone-tile.png',
        '/architessa_images_downloaded/hexagon-hexagon.png',
        '/architessa_images_downloaded/mosaic-mosaic-architessa.png'
      ],
    },
  },
]

// Style Quiz Data
export interface QuizQuestion {
  id: number
  question: string
  options: {
    label: string
    style: 'Farmhouse' | 'Coastal' | 'Minimalist & Modern' | 'Mid-Century Modern' | 'Bohemian'
    image?: string
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which color palette speaks to you most?',
    options: [
      { label: 'Warm whites, soft grays, natural wood tones', style: 'Farmhouse', image: '/images/Gemini_Generated_Image_i35ry9i35ry9i35r.png' },
      { label: 'Soft blues, sandy beiges, crisp whites', style: 'Coastal', image: '/images/WZ-POP-BW-Bathroom-4.jpg' },
      { label: 'Pure white, charcoal gray, black accents', style: 'Minimalist & Modern', image: '/images/14993636461012650622.jpg' },
      { label: 'Warm mustard, teal, walnut brown', style: 'Mid-Century Modern', image: '/images/Gemini_Generated_Image_6qhcx26qhcx26qhc.png' },
      { label: 'Rich terracotta, deep teal, warm gold', style: 'Bohemian', image: '/images/Gemini_Generated_Image_igjyhtigjyhtigjy.png' },
    ],
  },
  {
    id: 2,
    question: 'What type of patterns do you prefer?',
    options: [
      { label: 'Classic subway tile, shiplap, simple brick', style: 'Farmhouse', image: '/images/Gemini_Generated_Image_i35ry9i35ry9i35r.png' },
      { label: 'Organic shapes, pebble patterns, wave-like forms', style: 'Coastal', image: '/images/WZ-POP-BW-Bathroom-5.jpg' },
      { label: 'Large format, clean grids, geometric precision', style: 'Minimalist & Modern', image: '/images/Gemini_Generated_Image_fg8youfg8youfg8y.png' },
      { label: 'Hexagons, diamonds, retro geometric', style: 'Mid-Century Modern', image: '/images/Gemini_Generated_Image_6qhcx26qhcx26qhc.png' },
      { label: 'Moroccan zellige, intricate mosaics, global patterns', style: 'Bohemian', image: '/images/Image.png' },
    ],
  },
  {
    id: 3,
    question: 'Which texture appeals to you?',
    options: [
      { label: 'Matte, slightly textured, handcrafted feel', style: 'Farmhouse', image: '/images/1499363600826385717.jpg' },
      { label: 'Smooth with natural variation, like polished stone', style: 'Coastal', image: '/images/WZ-POP-BW-Bathroom-6.jpg' },
      { label: 'Ultra-smooth, polished, minimal texture', style: 'Minimalist & Modern', image: '/images/14993636191589700578.jpg' },
      { label: 'Subtle texture, wood grain, organic patterns', style: 'Mid-Century Modern', image: '/images/Gemini_Generated_Image_6qhcx26qhcx26qhc.png' },
      { label: 'Varied textures, layered, artisan-made', style: 'Bohemian', image: '/images/Gemini_Generated_Image_21dlum21dlum21dl.png' },
    ],
  },
  {
    id: 4,
    question: 'How would you describe your ideal space?',
    options: [
      { label: 'Cozy, warm, inviting, lived-in comfort', style: 'Farmhouse', image: '/images/1499363669116909167.jpg' },
      { label: 'Airy, light-filled, relaxed, serene', style: 'Coastal', image: '/images/WZ-POP-BW-Bathroom-7.jpg' },
      { label: 'Sleek, uncluttered, sophisticated, peaceful', style: 'Minimalist & Modern', image: '/images/1499363561776924735.jpg' },
      { label: 'Nostalgic, functional, balanced, timeless', style: 'Mid-Century Modern', image: '/images/Gemini_Generated_Image_fg8youfg8youfg8y.png' },
      { label: 'Eclectic, expressive, layered, globally-inspired', style: 'Bohemian', image: '/images/Gemini_Generated_Image_igjyhtigjyhtigjy.png' },
    ],
  },
  {
    id: 5,
    question: 'Which material combination excites you?',
    options: [
      { label: 'Ceramic subway + natural wood', style: 'Farmhouse', image: '/images/Gemini_Generated_Image_i35ry9i35ry9i35r.png' },
      { label: 'Natural stone + glass accents', style: 'Coastal', image: '/images/WZ-POP-BW-Bathroom-8.jpg' },
      { label: 'Large porcelain slabs + matte black fixtures', style: 'Minimalist & Modern', image: '/images/14993635811443778209.jpg' },
      { label: 'Wood-look tile + brass details', style: 'Mid-Century Modern', image: '/images/Gemini_Generated_Image_6qhcx26qhcx26qhc.png' },
      { label: 'Handmade zellige + terracotta + patterned cement', style: 'Bohemian', image: '/images/Gemini_Generated_Image_21dlum21dlum21dl.png' },
    ],
  },
]

// Architessa Showroom Locations
export const showrooms = [
  { city: 'Baltimore', state: 'MD', address: '123 Design Street, Baltimore, MD 21201', phone: '(410) 555-0100' },
  { city: 'Rockville', state: 'MD', address: '1803 Research Blvd, Suite 402, Rockville, MD 20850', phone: '(301) 555-0100' },
  { city: 'Washington DC', state: 'DC', address: '456 Capitol Ave NW, Washington, DC 20001', phone: '(202) 555-0100' },
  { city: 'Alexandria', state: 'VA', address: '789 King Street, Alexandria, VA 22314', phone: '(703) 555-0100' },
  { city: 'Richmond', state: 'VA', address: '321 Monument Ave, Richmond, VA 23220', phone: '(804) 555-0100' },
  { city: 'Vienna', state: 'VA', address: '567 Maple Ave, Vienna, VA 22180', phone: '(703) 555-0200' },
  { city: 'Atlanta', state: 'GA', address: '890 Peachtree St, Atlanta, GA 30309', phone: '(404) 555-0100' },
  { city: 'Tampa', state: 'FL', address: '234 Bayshore Blvd, Tampa, FL 33606', phone: '(813) 555-0100' },
]
