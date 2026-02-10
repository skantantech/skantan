# Skantan Technologies Corporation

**Engineering the Intelligent Enterprise**

## Overview
Skantan Technologies is a leading technology consulting and services company that transforms businesses through innovative solutions. We combine deep engineering expertise with cutting-edge AI, data analytics, and digital engineering to deliver modern intelligent enterprises.

## Modern Technology Stack
- **Next.js 16** - Latest React framework with App Router
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Modern, utility-first responsive design
- **React 19** - Latest React features with React Compiler

## Website Structure

### Main Sections
1. **Hero Section** - Engaging introduction with animated gradient background
2. **About Section** - Company overview and core values
3. **Services Section** - Comprehensive IT service offerings
4. **Service Showcase** - Featured projects and case studies
5. **Industries Section** - Sector-specific expertise
6. **Testimonials** - Client feedback and partner ecosystem
7. **Contact Section** - Interactive contact form with validation
8. **Footer** - Complete site navigation and social links

### Service Pages
Dedicated pages for each service offering:
- **Artificial Intelligence** - `/services/artificial-intelligence`
- **Cloud Solutions** - `/services/cloud-solutions`
- **Data Analytics** - `/services/data-analytics`
- **E-Commerce Solutions** - `/services/ecommerce`
- **ERP Solutions** - `/services/erp-solutions`
- **Mobile Development** - `/services/mobile-development`
- **Social Media Marketing** - `/services/social-media-marketing`
- **UI/UX Design** - `/services/ui-ux-design`
- **Web Development** - `/services/web-development`

### Industry Pages
Specialized industry solutions:
- **Financial Services** - `/industries/financial-services`
- **Healthcare** - `/industries/healthcare`
- **Manufacturing** - `/industries/manufacturing`
- **Retail & E-Commerce** - `/industries/retail-ecommerce`
- **Technology** - `/industries/technology`

### Additional Pages
- **Careers** - `/careers` - Join our team

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
skantan/
├── app/
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Homepage
│   ├── globals.css                     # Global styles
│   ├── careers/
│   │   └── page.tsx                    # Careers page
│   ├── industries/
│   │   ├── financial-services/
│   │   ├── healthcare/
│   │   ├── manufacturing/
│   │   ├── retail-ecommerce/
│   │   └── technology/
│   └── services/
│       ├── artificial-intelligence/
│       ├── cloud-solutions/
│       ├── data-analytics/
│       ├── ecommerce/
│       ├── erp-solutions/
│       ├── mobile-development/
│       ├── social-media-marketing/
│       ├── ui-ux-design/
│       └── web-development/
├── components/
│   ├── Navigation.tsx              # Header navigation with dropdown menus
│   ├── Hero.tsx                    # Hero section with animations
│   ├── About.tsx                   # About section
│   ├── Services.tsx          with Next.js App Router
- React Server Components for optimal performance
- Automatic code splitting and lazy loading
- Optimized font loading with next/font
- Fast page loads and smooth navigation

### SEO Friendly
- Semantic HTML structure
- Comprehensive meta tags
- Dynamic metadata for all pages
- Open Graph protocol support
- Twitter Card support
- Sitemap ready
- Schema markup ready

### Rich Animations & UX
- Smooth scroll behavior
- Interactive hover effects
- Gradient animations
- Transition animations
- Loading states
- Accessible navigation with keyboard supportigation

### Performance Optimized
- Server-side rendering (SSR)
- Optimized images
- Code splitting
- Fast page loads

### SEO Friendly
- Semantic HTML
- Meta tags optimization
- Sitemap ready
- Schema markup ready

### Rich Animations
- Smooth scroll behavior
- Hover effects
- Transition animations
- Loading animations

## Customization

### Colors
The primary color scheme uses:
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Indigo (#4f46e5)

Modify colors in `tailwind.config.ts` or component files.

### Content
Update content in individual component files:
- Services: `components/Services.tsx`
- Industries: `components/Industries.tsx`
- Testimonials: `components/Testimonials.tsx`
- Contact info: `components/Contact.tsx`

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the static site:
```bash
npm run build
```6.1.6
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 with PostCSS
- **Compiler**: React Compiler (Babel plugin)
- **Linting**: ESLint 9 with Next.js config
- **Fonts**: Geist Sans, Geist Mono (via next/font)
- **Icons**: Custom SVG icons
- **Animations**: CSS animations & transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Workflow

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Consistent code formatting
- Component-based architecture

### Testing
Test your changes across different:
- Screen sizes (mobile, tablet, desktop)
- Browsers (Chrome, Firefox, Safari, Edge)
- Devices (iOS, Android)

## Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Deployment Information

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Quick Reference

- **Quick Start Guide**: [QUICKSTART.md](QUICKSTART.md)
- **Pages Summary**: [PAGES-SUMMARY.md](PAGES-SUMMARY.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

## License

Copyright © 2021-2026 Skantan Technologies Corporation. All rights reserved.

## Contact

For inquiries, please contact:
- **Email**: info@skantantechcorp.com
- **Phone**: +1 (234) 567-8900
- **Website**: [https://www.skantantechcorp.com](https://www.skantantechcorp.com)

---

**Built with ❤️ by Skantan Technologies Corporation**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
