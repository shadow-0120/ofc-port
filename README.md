# OFC Portfolio - Modern Developer Portfolio Website

A cutting-edge, interactive portfolio website built with React, featuring advanced animations, 3D elements, and modern web technologies. This portfolio showcases professional development services, projects, and provides an immersive user experience.

## 🚀 Features

### Core Functionality
- **Interactive Portfolio**: Showcase of professional services and projects
- **3D Elements**: Three.js integration for immersive 3D experiences
- **Advanced Animations**: GSAP and Framer Motion for smooth, cinematic animations
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Lazy loading, code splitting, and resource optimization
- **Modern UI/UX**: Clean, professional design with smooth interactions

### Pages & Sections
- **Home**: Hero section with animated text, project showcase, testimonials
- **Services**: Comprehensive service offerings with interactive cards
- **Projects**: Detailed project portfolio with image galleries
- **Project Detail**: Individual project pages with full descriptions
- **Contact**: Contact form and information
- **Resume**: Professional resume/CV display

### Technical Highlights
- **Cinematic Splash Screen**: Professional loading experience
- **Smooth Scrolling**: Lenis integration for buttery smooth scrolling
- **Particle Backgrounds**: Dynamic visual effects
- **Interactive Demos**: Hands-on technology demonstrations
- **Performance Monitoring**: Built-in performance tracking
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animations
- **Three.js** - 3D graphics and WebGL
- **React Three Fiber** - React renderer for Three.js

### Additional Libraries
- **React Router DOM** - Client-side routing
- **Lenis** - Smooth scrolling
- **Lucide React** - Beautiful icons
- **html2canvas** - Screenshot capabilities
- **jsPDF** - PDF generation
- **@use-gesture/react** - Gesture handling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ofc-port.git
   cd ofc-port
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Project Structure

```
ofc-port/
├── public/
│   ├── images/           # Project images and assets
│   ├── models/           # 3D models (.glb files)
│   └── manifest.json     # PWA manifest
├── src/
│   ├── Components/       # Reusable React components
│   │   ├── Navbar/       # Navigation component
│   │   ├── SplashScreen/ # Loading screen
│   │   ├── ParticleBackground/ # Animated backgrounds
│   │   └── ...           # Other UI components
│   ├── Pages/           # Main application pages
│   │   ├── Home/         # Landing page
│   │   ├── Services/     # Services showcase
│   │   ├── Projects/     # Portfolio projects
│   │   ├── Contact/      # Contact form
│   │   └── Resume/       # Resume/CV page
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── assets/          # Static assets (icons, etc.)
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS config
```

## 🎨 Customization

### Adding Your Content

1. **Update Personal Information**
   - Edit `src/Pages/Home/AboutMe.jsx` for personal details
   - Modify `src/Pages/Resume/Resume.jsx` for resume content

2. **Add Your Projects**
   - Update `src/Pages/Projects/Projects.jsx` with your project data
   - Add project images to `public/images/projects/`

3. **Customize Services**
   - Edit `src/Pages/Services/Services.jsx` to reflect your offerings

4. **Update Contact Information**
   - Modify `src/Pages/Contact/Contact.jsx` with your contact details

### Styling & Theming

- **Colors**: Update Tailwind CSS classes throughout components
- **Fonts**: Modify font imports in CSS files
- **Animations**: Adjust GSAP and Framer Motion configurations
- **3D Models**: Replace `.glb` files in `public/models/`

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Select source as "GitHub Actions" or "Deploy from a branch"

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts

## 📱 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Resource Preloading**: Critical resources preloaded for faster initial load
- **Bundle Optimization**: Manual chunk splitting for optimal loading
- **Image Optimization**: Responsive images with lazy loading
- **3D Model Optimization**: Compressed GLB models

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

---

**Built with ❤️ using React, Vite, and modern web technologies**