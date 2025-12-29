# Piyush Prajapati - Interactive Developer Portfolio

A high-performance, component-driven portfolio website showcasing full-stack engineering expertise, advanced animations, and secure client-side architecture. Built with modern web standards and crafted for accessibility, security, and user experience.

---

## Portfolio Overview

This portfolio represents a commitment to clean code, intelligent problem-solving, and user-centric design. It demonstrates:

- **Full-stack engineering capabilities** — from enterprise Java backend systems to production-grade React frontends
- **Performance-first mindset** — optimized bundling, lazy-loaded components, and hardware-accelerated animations
- **Security awareness** — Content Security Policy, CSRF protection, bot detection, and secure form handling
- **Modern craftsmanship** — component isolation, semantic HTML, responsive design, and accessibility considerations

The portfolio itself is a functional showcase of the skills it describes—not just a marketing page, but an engineering project that prioritizes both form and function.

---

## Live Demo

**[View Portfolio](https://piyush-prajapati.vercel.app)** — Deployed on Vercel with automatic deployments from Git

*Last updated: 2025*

---

## Tech Stack

### Frontend
- **React 19** — Latest stable version with hooks and concurrent rendering
- **Vite 7.2** — Lightning-fast dev server and optimized production builds
- **Tailwind CSS 3.4** — Utility-first styling with custom animations and extended color palette
- **Framer Motion 12.23** — Hardware-accelerated animations and gesture handling

### Styling & UI Components
- **Lucide React** — Crisp SVG icon library for consistent iconography
- **React Icons** — Additional icon support for rich visual feedback
- **Custom CSS Animations** — Marquee scrolling, pulse effects, and fade-in transitions
- **Glassmorphism Design System** — Modern frosted-glass aesthetic with depth and hierarchy

### Form Management & Validation
- **Formik 2.4** — Flexible form state management.
- **Yup 1.7** — Schema validation with clear error messages.
- **EmailJS 4.4** — Client-side email delivery without backend coupling.

### Developer Experience
- **ESLint 9** — Strict linting rules for code consistency.
- **PostCSS with Autoprefixer** — Cross-browser CSS compatibility.
- **Git-based versioning** — Full commit history and deployment tracking.

### Deployment & Infrastructure
- **Vercel** — Edge deployment with automatic deployments and serverless functions.
- **Content Security Policy (CSP)** — Strict header policies to prevent XSS and data exfiltration.
- **Security headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy.

---

## Key Features

### User Experience
- **Animated intro screen** — Multi-language greeting sequence (7 languages) that creates memorable first impression
- **Custom cursor** — Hardware-accelerated pointer with interactive feedback
- **Smooth scroll navigation** — Section-based anchor links with fade-in animations
- **Responsive Bento Grid layout** — Adapts seamlessly from mobile to 4K displays
- **Glassmorphism cards** — Spotlight effects and gradient overlays for depth


### Security & Protection
- **Content Security Policy (CSP)** — Whitelist-based policy blocks inline scripts and suspicious resources
- **Bot detection** — Honeypot field in contact form prevents automated spam
- **CSRF protection** — Form validation and submission integrity checks
- **Secure API integration** — Environment variables keep API keys out of version control
- **Input sanitization** — Formik + Yup validation prevents malicious payloads
- **Header security** — Vercel-configured response headers prevent clickjacking and MIME sniffing


### Advanced Features
- **Real-time GitHub contribution graph** — Fetches GitHub API data to display contribution history
- **Project image carousel** — Swipeable gallery with multiple project screenshots
- **Tech stack marquee** — Animated horizontal scrolling list of technologies
- **Educational timeline** — Time-based education section with icons and descriptions
- **Dynamic skills categorization** — Languages, frontend, backend, database, and tools with visual pills

---

## Sections Breakdown

### 1. **Intro Screen**
Animated entrance with rotating multi-language greetings that auto-completes after 2.5 seconds, creating an engaging first impression.

### 2. **Navigation**
Sticky navbar with smooth scroll behavior, responsive hamburger menu, and active section highlighting.

### 3. **Hero Section**
Bold introduction with call-to-action buttons, rotating greeting, bio summary, and resume download via lucide-react Download icon.

### 4. **Skills Section**
Categorized technical skills displayed as interactive pills:
- **Languages:** JavaScript (ES6+), Java, HTML5, CSS3, SQL
- **Frontend:** React.js, Tailwind CSS, Framer Motion, Redux, Vite
- **Backend:** Node.js, Express.js, Java Servlets, JSP, REST APIs
- **Database:** MongoDB, MySQL, Redis
- **Tools:** Git, Postman, VS Code, IntelliJ IDEA

### 5. **Education Section**
Timeline-based education display with institution details and relevant coursework.

### 6. **Projects Section**
Feature-rich project showcase with:
- Project cards with descriptions and tag badges
- Multiple screenshot carousels per project
- Direct GitHub repository links
- Live deployment links

### 7. **GitHub Section**
Real-time contribution graph fetched from GitHub API showing development activity.

### 8. **Contact Section**
Professional contact form with:
- Real-time validation via Formik + Yup
- Success/error toast notifications
- EmailJS integration for direct email delivery
- Bot honeypot field for spam prevention
- Contact details display (email, location, phone)

### 9. **Tech Marquee**
Animated horizontal scrolling list of all technologies and tools with smooth infinite loop.

### 10. **Footer**
Social links, copyright information, and quick navigation.

---


---

## Setup & Local Development

### Prerequisites
- **Node.js** 18+ (includes npm)
- **Git** for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/PiyushTechie/Personal_Portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment variables file (`.env`):**
```bash
cp .env.example .env
```

4. **Configure environment variables:**
Edit `.env` and add your credentials (see Environment Variables section below):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Running Locally

**Development server with Hot Module Replacement:**
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser. Changes to React components will refresh instantly.

**Production build:**
```bash
npm run build
```
Outputs optimized bundle to `dist/` directory for deployment.

**Preview production build locally:**
```bash
npm run preview
```
Serves the production build to verify optimization before deploying.

**Linting:**
```bash
npm run lint
```
Runs ESLint to check for code quality issues and style violations.

### Environment Variables

**Required for email functionality:**
- `VITE_EMAILJS_SERVICE_ID` — EmailJS service identifier (obtained from [EmailJS dashboard](https://dashboard.emailjs.com))
- `VITE_EMAILJS_TEMPLATE_ID` — EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` — EmailJS public API key

Environment variables prefixed with `VITE_` are automatically exposed to the client. These credentials are safe because EmailJS uses server-side validation to prevent unauthorized requests.

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/component-name

# Make changes and commit
git add .
git commit -m "feat: add new component with description"

# Push to origin
git push origin feature/component-name

# Create pull request for code review
```

---

## Performance & Best Practices

### Code Splitting & Lazy Loading
- **GitHub section** is lazy-loaded with React.Suspense to defer non-critical API calls
- **Vite's dynamic imports** automatically split code at component boundaries
- Only loaded resources are shipped on initial page load

### Animation Performance
- **Hardware acceleration** via CSS transforms (`translate`, `scale`, `opacity`)
- **will-change property** hints browser to optimize rendering
- **Framer Motion's GPU acceleration** for smooth 60fps animations
- **requestAnimationFrame** for paint-efficient transitions


### Accessibility Checklist
- Text alternatives for icons via aria-labels
- Sufficient color contrast ratios (WCAG AA standard)
- Keyboard-navigable interactive elements
- Focus management in modals and dynamic content
- Semantic landmarks (`<nav>`, `<main>`, `<footer>`)

### Security Hardening
- **Content Security Policy** restricts script execution and resource loading
- **X-Content-Type-Options: nosniff** prevents MIME sniffing attacks
- **X-Frame-Options: DENY** blocks clickjacking attempts
- **Referrer-Policy: strict-origin-when-cross-origin** controls referrer information
- **HTTPS-only** enforced on production (Vercel default)
- **Input validation** via Yup schema before form submission
- **Bot detection** honeypot field silently discards spam submissions

---

### Performance Goals
- **Lighthouse 100/100** — Perfect scores across Performance, Accessibility, Best Practices, SEO
- **First Contentful Paint < 1s** — Optimize critical rendering path
- **Time to Interactive < 2s** — Reduce JavaScript execution time
- **Core Web Vitals** — LCP, FID, CLS all in green zone

---

## Contact & Socials

**Email:** [piyushprajapati7120@gmail.com](mailto:piyushprajapati7120@gmail.com)

**GitHub:** [@PiyushTechie](https://github.com/PiyushTechie)

**LinkedIn:** [Piyush Prajapati](www.linkedin.com/in/piyushprajapati1336)

**Location:** Mumbai, Maharashtra, India

---

## License

This portfolio is open source and available under the MIT License. Feel free to use it as inspiration for your own, but please do not copy it verbatim.

---

## Acknowledgments

- **Vercel** for seamless deployment and edge network infrastructure
- **React team** for an exceptional library and developer experience
- **Tailwind Labs** for the utility-first CSS revolution
- **Framer** for beautiful, performant animation tools
- **EmailJS** for serverless email delivery

---

**Built with attention to craft, optimization, and user experience.**

Last updated: December 2025
