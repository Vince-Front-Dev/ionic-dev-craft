# Alex Developer - Portfolio Website

A modern, responsive portfolio website built with React + Ionic, showcasing front-end development skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **PWA Ready**: Progressive Web App capabilities
- **Fast Performance**: Optimized images and code splitting
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG AA compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: React 18 + Ionic React
- **Language**: TypeScript
- **Styling**: Ionic CSS Variables + Custom CSS
- **Icons**: Ionicons
- **Router**: React Router (Ionic)
- **Build Tool**: Vite

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

```bash
# Install Ionic CLI globally (if not already installed)
npm install -g @ionic/cli

# Install dependencies
npm install

# Start development server
ionic serve

# Or use npm
npm run dev
```

The app will be available at `http://localhost:8100`

### Build for Production

```bash
# Build the project
npm run build

# Or using Ionic CLI
ionic build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProjectCard.tsx # Project display card
│   └── SkillBadge.tsx  # Skill proficiency badge
├── pages/              # Main application pages
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects listing
│   ├── ProjectDetail.tsx # Individual project details
│   ├── Skills.tsx      # Skills overview
│   └── Contact.tsx     # Contact form
├── data/
│   └── projects.ts     # Project data
├── utils/
│   └── theme.ts        # Theme management
└── theme/
    └── variables.css   # Ionic CSS variables
```

## ✏️ Customization

### Adding New Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  short: "Brief description",
  long: "Detailed description...",
  tech: ["React", "TypeScript"],
  image: "/assets/project-image.jpg",
  demo: "https://demo-link.com",
  repo: "https://github.com/username/repo",
  featured: true // Optional
}
```

### Updating Personal Information

1. **Contact Info**: Update `src/pages/Contact.tsx`
2. **Bio & Experience**: Update `src/pages/About.tsx`
3. **Skills**: Modify the skills array in `src/pages/Skills.tsx`
4. **Social Links**: Update `src/components/Footer.tsx` and `src/components/Header.tsx`

### Theming

Customize colors and styling in:
- `src/theme/variables.css` - Main color palette and Ionic variables
- `src/index.css` - Custom animations and utility classes

### Images

- Add project images to `public/assets/`
- Update avatar images in components
- Generate or replace project screenshots

## 📧 Contact Form Setup

The contact form currently uses `mailto:` links. For real email functionality:

### Option 1: EmailJS (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update `src/pages/Contact.tsx` with your EmailJS configuration:

```typescript
import emailjs from '@emailjs/browser';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

### Option 2: Backend API

Replace the form submission logic with your own backend API endpoint.

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel

1. Connect your GitHub repository
2. Vercel will automatically detect and deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📱 PWA Features

The app includes basic PWA capabilities:
- Web App Manifest
- Service Worker ready
- Offline-first approach
- Add to home screen support

## 🔧 Development Scripts

```bash
# Start development server
npm run dev
ionic serve

# Build for production
npm run build
ionic build

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## 🌟 Performance Tips

- Images are optimized and lazy-loaded
- Code splitting for better performance
- CSS animations use GPU acceleration
- Proper caching headers in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:
- Check the [Ionic Documentation](https://ionicframework.com/docs)
- Review [React Documentation](https://reactjs.org/docs)
- Open an issue on GitHub

---

**Happy coding!** 🚀