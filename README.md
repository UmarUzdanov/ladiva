# Marianna Ouzdanova - Luxury Tile Design Website

A sophisticated Next.js website for luxury tile design consultation, featuring elegant animations, an interactive style quiz, and seamless Architessa partnership integration.

## 🎨 Design Philosophy

- **Luxury through restraint**: Minimal, sophisticated design with meticulous attention to detail
- **Color Palette**: Alabaster, Urobilin Gold, Philippine Gold, Dark Bronze, Raisin Black
- **Typography**: Playfair Display (serif) for headlines, Inter (sans-serif) for body
- **Animations**: Subtle Framer Motion transitions for elegant user experience

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript 5.7+
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 11.15
- **Icons**: Lucide React
- **Node**: 20.19.5

## 📁 Project Structure

```
ladiva-v4/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio with filtering
│   ├── services/          # Services page
│   ├── learn/             # Learning center
│   ├── quiz/              # Interactive style quiz
│   └── contact/           # Contact form
├── components/
│   ├── home/              # Homepage components
│   ├── layout/            # Header & Footer
│   ├── portfolio/         # Portfolio components
│   └── ui/                # Reusable UI components
├── lib/
│   └── data.ts            # Projects, quiz questions, showrooms data
├── public/
│   └── images/            # Image assets
└── tailwind.config.ts     # Custom theme configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 20.19.5 or higher
- npm 10.8.2 or higher

### Installation Steps

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd ladiva-v4
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Features

### Homepage
- Hero section with "Your Tile Vision, Expertly Guided"
- 3-Step Process visualization (Function → Style → Look)
- Featured projects carousel
- "Why Work With Me" benefits section

### Portfolio
- Advanced filtering by room type and style
- Project cards with hover effects
- Individual project detail pages (planned)
- Before/after image galleries

### Interactive Style Quiz
- 5-question visual preference assessment
- Dynamic style matching algorithm
- Personalized results with recommendations
- Links to relevant portfolio projects

### Services
- Three service tiers: Consultation, Showroom Experience, Full-Service Design
- Detailed feature breakdowns
- Transparent pricing
- Project timeline visualization

### Learning Center
- Essential tile guides (Choosing 101, Materials, Room-specific)
- Design style guide (5 main styles)
- 3-Step Framework education
- CTA to style quiz

### Contact Page
- Comprehensive project questionnaire
- Direct contact information
- Architessa showroom locations (8 cities)
- Form validation and submission

## 🎨 Design System

### Colors
```typescript
alabaster: '#EBEBE6'        // Background, light text
urobilin: '#E2AF1D'          // Accent gold
philippine-gold: '#AE720C'   // Primary gold
dark-bronze: '#824B07'       // Hover states
raisin-black: '#29241D'      // Primary text, dark elements
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: Responsive, mobile-first

### Spacing
- Base: 8px grid system
- Extended: Custom 128px & 144px values

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel auto-detects Next.js configuration

3. **Environment Variables** (if needed):
   - Add any API keys or configuration in Vercel dashboard
   - Currently no env vars required for basic functionality

4. **Deploy**:
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

### Alternative Deployment Options

#### Netlify
```bash
npm run build
# Deploy the `.next` directory
```

#### AWS Amplify
```bash
npm run build
# Configure build settings in Amplify console
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Content

#### Add Portfolio Project
Edit `lib/data.ts` and add to `projects` array:
```typescript
{
  id: '4',
  title: 'Project Title',
  slug: 'project-slug',
  category: 'Kitchen',
  style: 'Minimalist & Modern',
  materials: ['Porcelain', 'Glass'],
  description: '...',
  challenge: '...',
  solution: '...',
  images: { after: '/images/...', details: [...] }
}
```

#### Add Showroom Location
Edit `lib/data.ts` and add to `showrooms` array:
```typescript
{
  city: 'City Name',
  state: 'ST',
  address: '123 Street, City, ST 12345',
  phone: '(123) 456-7890'
}
```

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- Color contrast ratios meet standards

## ⚡ Performance

- Next.js Image optimization
- Framer Motion with performance best practices
- Code splitting by route
- Lazy loading for images
- Minimal JavaScript bundle

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Touch-friendly interactive elements
- Optimized typography scaling

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

All rights reserved © 2025 Marianna Ouzdanova

## 📞 Support

For questions or support:
- Email: marianna@ladiva-tiles.com
- Phone: (866) 323-1322

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
