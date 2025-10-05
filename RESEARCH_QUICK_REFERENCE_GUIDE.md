# Quick Reference Guide
## Marianna Ouzdanova Luxury Tile Design Website Research

**For:** Design & Development Teams
**Date:** October 5, 2025

---

## 🎯 At-a-Glance Summary

### Brand Positioning
**"Luxury Tile Design Consultant"** - Boutique, personalized service for affluent homeowners, interior designers, and architects

### Key Differentiators
- Individual consultant (not a retailer)
- Artisan tile curation expertise
- Personalized, high-touch service
- Collaboration with designers/architects

---

## 🎨 Design Quick Reference

### Color Palette

**Primary (Foundation):**
```
Ivory: #FFFFF0
Champagne: #F7E7CE
Soft Khaki: #C3B091
Blush Beige: #F5E6D3
Buttercream: #FFFACD
Mocha Mousse: #6B4423 (Pantone 2025)
```

**Accent:**
```
Gold: #D4AF37
Warm Brown: #8B7355
Dark Slate: #2F4F4F
```

**Neutrals:**
```
Warm White: #FAF9F6
Cool Gray: #C0C0C0
Charcoal: #36454F
```

### Typography

**Primary (Headers):**
- Didot
- Baskerville
- Bodoni
- Playfair Display ⭐ (recommended, web-optimized)

**Secondary (Body):**
- Museo Sans ⭐ (recommended)
- Clean sans-serif

**Characteristics:**
- High contrast thick/thin strokes
- Elegant curves
- Professional kerning
- Minimum 16px body text (mobile)

### Layout Principles

**White Space:**
- Generous padding (80-120px sections)
- Breathing room around elements
- 60-80 character line length

**Grid:**
- 12-column grid system
- Consistent gutters (24-32px)
- Responsive breakpoints: 320px, 768px, 1024px, 1440px

**Image Ratios:**
- Portfolio grid: 4:3 or 3:2
- Hero sections: 16:9
- Portrait images: 2:3

---

## 🔧 Technical Stack Recommendations

### Animation
- **GSAP** + ScrollTrigger + ScrollSmoother
- Parallax effects with `data-speed` attributes
- Lottie for brand animations (optional)

### Performance
- Lazy loading (native `loading="lazy"`)
- WebP images with JPEG fallback
- Critical CSS inline
- Deferred JavaScript

### Accessibility
- WCAG 2.2 AA compliance
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation tested

### CMS Options
- WordPress (with Gutenberg or ACF)
- Webflow (for design-focused teams)
- Craft CMS (for flexibility)
- Custom (React/Next.js for max control)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small Mobile */
@media (min-width: 320px) { }

/* Mobile */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }

/* Extra Large */
@media (min-width: 1920px) { }
```

---

## 🎭 Animation Specifications

### Timing Functions
```css
/* Standard easing */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

/* Luxury smooth */
ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94)

/* Elegant entrance */
ease-in-elegant: cubic-bezier(0.55, 0.055, 0.675, 0.19)

/* Soft exit */
ease-out-soft: cubic-bezier(0.215, 0.61, 0.355, 1)
```

### Duration Guidelines
- Micro-interactions: 200-300ms
- Hover effects: 300-400ms
- Page transitions: 600-800ms
- Parallax scrolling: Tied to scroll position

### Hover Effects (Images)
```css
.portfolio-image {
  transition: transform 400ms ease-smooth;
}

.portfolio-image:hover {
  transform: scale(1.05) rotate(0.5deg);
}
```

---

## 🎯 SEO Priority Keywords

### Tier 1 (Immediate Focus)
1. `[city] tile designer`
2. `luxury tile consultant [city]`
3. `tile design services [city]`
4. `luxury tile designer`
5. `tile design consultant`

### Content Keywords (Blog Topics)
- "How to choose luxury tile for [room]"
- "Ceramic vs porcelain tile guide"
- "Working with a tile design consultant"
- "Handmade tile benefits"
- "Sustainable luxury tile options"
- "2025 tile trends"

### Long-Tail Opportunities
- "kitchen tile design consultation [city]"
- "bathroom luxury tile designer [city]"
- "custom backsplash tile design"
- "artisan tile selection services"

---

## 📐 Page Templates Structure

### Homepage
```
- Hero Section
  - Background image/video
  - H1 + subheading
  - Primary CTA + Secondary CTA

- Introduction
  - Portrait image
  - Bio (2-3 sentences)
  - "About" CTA

- Services Overview
  - 3-4 service cards
  - Icons/imagery
  - Brief descriptions
  - Links to detail pages

- Featured Portfolio
  - 6-8 project images
  - Masonry or grid layout
  - Hover effects
  - Filter options

- Process Visualization
  - 4-5 step process
  - Icons/numbers
  - Brief descriptions

- Testimonials
  - 2-3 client quotes
  - Names + project type
  - Optional project images

- Latest Insights
  - 3 recent blog posts
  - Images + titles + excerpts

- CTA Section
  - Strong headline
  - Consultation booking CTA

- Footer
```

### Service Page Template
```
- Hero
  - Service name (H1)
  - Brief description
  - Related image

- Overview
  - Detailed explanation (3-4 paragraphs)
  - Who it's for
  - What's included

- Process Steps
  - Step-by-step breakdown
  - Timeline visualization

- Portfolio Examples
  - 4-6 relevant projects

- FAQ
  - 5-8 common questions
  - Expandable accordions

- CTA Section
```

### Portfolio Page
```
- Page Header
  - Title + description

- Filter Bar
  - Category filters
  - Active state indication

- Project Grid
  - Masonry layout
  - 8-12 projects
  - Hover overlays

- Load More (if needed)
```

### Individual Project Page
```
- Hero Image
  - Full-width hero
  - Project title overlay

- Project Details Sidebar
  - Location
  - Year
  - Room type
  - Materials
  - Style

- Project Description
  - Challenge/brief
  - Approach
  - Outcome

- Image Gallery
  - High-res images
  - Lightbox
  - Multiple angles

- Related Projects
  - 3-4 similar projects

- CTA Section
```

---

## ♿ Accessibility Checklist

### Color Contrast
- [ ] Text on backgrounds: 4.5:1 minimum
- [ ] Large text (18pt+): 3:1 minimum
- [ ] UI components: 3:1 minimum
- [ ] Links distinguishable from text

### Keyboard Navigation
- [ ] All interactive elements accessible via Tab
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] No keyboard traps
- [ ] Skip navigation link

### Content
- [ ] All images have alt text
- [ ] Decorative images: empty alt=""
- [ ] Proper heading hierarchy (H1 → H6)
- [ ] Form labels associated with inputs
- [ ] Error messages clear and specific

### Interactive
- [ ] Forms keyboard accessible
- [ ] Modals focus-trapped
- [ ] Carousels pausable
- [ ] Animations respect prefers-reduced-motion
- [ ] Videos have captions

### Testing
- [ ] Screen reader tested (NVDA/JAWS/VoiceOver)
- [ ] Keyboard-only navigation tested
- [ ] Color contrast verified (WebAIM tool)
- [ ] WAVE browser extension audit
- [ ] Lighthouse accessibility score 100

---

## 📊 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### PageSpeed Insights
- **Mobile:** 90+ score
- **Desktop:** 95+ score

### Image Optimization
- Hero images: < 200KB (WebP)
- Portfolio images: < 150KB (WebP)
- Thumbnails: < 50KB (WebP)
- Use `srcset` for responsive images
- Lazy load below-fold images

### Code Optimization
- Minified CSS/JS
- Critical CSS inline (< 14KB)
- Deferred non-critical JS
- No render-blocking resources
- Gzip/Brotli compression

---

## 🎨 Reference Websites

### Luxury Tile Companies
1. **Ann Sacks** - https://annsacks.kohler.com/
   - Note: Designer collaborations, trade program, material-focused nav

2. **Fireclay Tile** - https://www.fireclaytile.com/
   - Note: Sustainable positioning, carousel content, mega menu

3. **Artistic Tile** - https://www.artistictile.com/
   - Note: Family-owned luxury, e-commerce integration

### Interior Design Portfolios
4. **Yabu Pushelberg** - http://www.yabupushelberg.com/
   - Note: Interactive project map, global reach

5. **Kelly Wearstler** - https://kellywearstler.com/
   - Note: Bold, eclectic, brave color use

6. **Amber Interiors** - https://amberinteriors.com/
   - Note: Laid-back luxury aesthetic

7. **DKOR Interiors** - https://dkorinteriors.com/
   - Note: Residential luxury portfolio presentation

### Luxury Fashion (Typography Reference)
8. **Burberry** - https://www.burberry.com/
   - Note: Bespoke Bodoni typography

9. **Hermès** - https://www.hermes.com/
   - Note: Sophisticated serif use, minimal aesthetic

---

## 🛠️ GSAP Animation Snippets

### Smooth Scrolling Setup
```javascript
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 2,
  effects: true,
  smoothTouch: 0.1,
});
```

### Parallax Effect
```html
<!-- In HTML -->
<div data-speed="0.8">
  <img src="background.jpg" alt="Luxury tile background" />
</div>
```

### Fade In On Scroll
```javascript
gsap.utils.toArray('.fade-in').forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  });
});
```

### Stagger Portfolio Items
```javascript
gsap.from('.portfolio-item', {
  scrollTrigger: {
    trigger: '.portfolio-grid',
    start: 'top 80%'
  },
  opacity: 0,
  y: 60,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out'
});
```

---

## 📝 Content Guidelines

### Tone of Voice
- **Sophisticated** yet approachable
- **Expert** without being pretentious
- **Personal** connection to craftsmanship
- **Confident** in expertise
- **Warm** and welcoming

### Writing Style
- Short paragraphs (2-3 sentences)
- Bullet points for scannability
- Active voice preferred
- Industry terms explained simply
- First-person for personal sections
- Second-person for calls-to-action

### Image Requirements
- **Resolution:** Minimum 2000px wide
- **Format:** JPEG for photos, PNG for graphics
- **Color space:** sRGB
- **Quality:** Professional photography only
- **Styling:** Consistent lighting and editing
- **Content:** Before/after, details, wide shots

### Alt Text Formula
```
[What it is] + [relevant context] + [location/style if applicable]

Examples:
- "Custom handmade ceramic tile backsplash in modern kitchen"
- "Luxury bathroom with artisan porcelain tile walls"
- "Detail of hand-glazed ceramic tile with blue pattern"
```

---

## 🔄 Conversion Optimization

### Primary CTA
**Text:** "Schedule Your Consultation"
**Placement:** Header, hero, end of sections, footer
**Design:** High contrast, 44x44px minimum

### Secondary CTAs
- "View Portfolio"
- "Explore Services"
- "Read Our Process"
- "Contact Us"

### Trust Signals
- Client testimonials (with photos if possible)
- Professional credentials
- Years of experience
- Featured in [publications]
- Partnerships with designers/architects
- Awards and recognition

### Contact Form Fields
**Essential:**
- Name
- Email
- Project type (dropdown)
- Message

**Optional but valuable:**
- Phone
- Timeline
- Budget range
- Preferred contact method

---

## 📱 Mobile-Specific Considerations

### Touch Targets
- Minimum size: 44x44px
- Spacing between: 8px minimum
- Primary buttons: 48x48px

### Typography
- Base size: 16px minimum
- Line height: 1.5-1.6
- Increase heading sizes on mobile
- Avoid justified text

### Images
- Full-width on mobile
- Compressed for mobile bandwidth
- Lazy loading essential
- Consider art direction (different crops)

### Navigation
- Hamburger menu standard
- Full-screen overlay when open
- Large, easy-to-tap items
- Back button clearly visible

---

## 🎯 Success Metrics Dashboard

### Traffic
- [ ] Organic search traffic (monthly)
- [ ] Direct traffic (brand searches)
- [ ] Traffic by page
- [ ] Traffic sources

### Engagement
- [ ] Avg. time on page: Target 2+ minutes
- [ ] Pages per session: Target 3+
- [ ] Bounce rate: Target <60%
- [ ] Scroll depth: 50%+ on key pages

### Conversion
- [ ] Consultation requests: Target X/month
- [ ] Contact form fills
- [ ] Phone calls generated
- [ ] Email inquiries

### SEO
- [ ] Keyword rankings (top 10)
- [ ] Local pack visibility
- [ ] Domain authority
- [ ] Backlinks acquired

### Technical
- [ ] PageSpeed score: 90+
- [ ] Core Web Vitals: All green
- [ ] Uptime: 99.9%
- [ ] Error rate: <1%

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] All content proofread
- [ ] Images optimized
- [ ] Forms tested (submissions received)
- [ ] Analytics installed and verified
- [ ] Google Business Profile live
- [ ] Social media links working
- [ ] Privacy policy and terms added
- [ ] 301 redirects set (if applicable)
- [ ] XML sitemap submitted
- [ ] SSL certificate active

### Design/UX
- [ ] Mobile responsive on all pages
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Touch interactions working (mobile/tablet)
- [ ] Animations performing smoothly
- [ ] No layout shifts on load
- [ ] All hover states working

### Accessibility
- [ ] WCAG AA audit passed
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Alt text on all images

### Performance
- [ ] PageSpeed 90+ (mobile & desktop)
- [ ] Images lazy loading
- [ ] Critical CSS inline
- [ ] No console errors
- [ ] Load time <3s

### SEO
- [ ] All pages have unique meta titles
- [ ] All pages have meta descriptions
- [ ] Schema markup implemented
- [ ] Open Graph tags added
- [ ] Canonical tags set
- [ ] robots.txt configured

### Post-Launch
- [ ] Monitor analytics daily (week 1)
- [ ] Check form submissions working
- [ ] Verify Google Search Console
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Email announcement (if applicable)
- [ ] Request reviews from initial clients

---

## 💡 Quick Tips

### For Designers
- Use luxury brand websites as inspiration, not tile retailers
- Prioritize white space over dense layouts
- Professional photography is non-negotiable
- Accessibility can coexist with luxury aesthetics
- Test on real devices, not just browser responsive mode

### For Developers
- Build accessibility in from start, don't retrofit
- Set performance budgets before development
- Test animations on low-end devices
- Use semantic HTML, enhance with ARIA
- Mobile-first CSS approach
- Optimize images before implementation

### For Content Creators
- Focus on 8-12 best projects, not everything
- Tell complete stories (concept to completion)
- Professional photography ROI is worth it
- Blog consistency matters (2 posts/month minimum)
- Long-tail keywords = higher conversion

### For SEO
- Local SEO is highest priority
- Patience required (3-6 months for results)
- Expert content > keyword stuffing
- Technical foundation must be solid
- Build citations before launch

---

## 📞 Questions or Issues?

**For Design Questions:** Contact DESIGNER agent in hive
**For Development Issues:** Contact DEVELOPER agent in hive
**For Content Strategy:** Contact CONTENT agent in hive
**For SEO Concerns:** Reference SEO Strategy Report

---

## 📚 Additional Resources

### Tools Mentioned
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WAVE Accessibility Tool:** https://wave.webaim.org/
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com/

### Learning Resources
- **GSAP Docs:** https://gsap.com/docs/
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/
- **Schema.org:** https://schema.org/
- **Web.dev:** https://web.dev/

---

*Quick Reference Guide compiled from comprehensive research reports*
*Last Updated: October 5, 2025*
