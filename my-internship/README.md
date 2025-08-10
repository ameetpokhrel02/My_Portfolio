
# Amit Pokhrel Portfolio

A modern, responsive portfolio web application built with **React**, **TypeScript**, and **Vite**. This project showcases skills, work experience, awards, projects, certificates, and more, with a visually appealing UI and smooth navigation.

---

## 🚀 Features
- *React + TypeScript*: Fast, type-safe, and scalable frontend.
- *Vite*: Lightning-fast development and build tool.
- **Tailwind CSS**: Utility-first CSS for rapid UI development.
- **Responsive Design**: Works on all devices.
- **Sections**: Hero, About, Skills, Work Experience, Awards, Projects, Contact, Certificates.
- **Media Assets**: Includes images, certificates, and project demo videos.
- **SEO Optimized**: Comprehensive SEO with meta tags, structured data, sitemap, and PWA support.
- **Progressive Web App**: Installable with offline support and service worker.

---

## 📁 Folder Structure
```
my-internship/
│
├── index.html                # Main HTML entry point
├── package.json              # Project metadata and scripts
├── package-lock.json         # Dependency lock file
├── tsconfig.json             # TypeScript configuration
│
├── public/                   # Static assets
│   ├── *.jpg, *.png, *.pdf   # Certificates, images, resume
│   ├── vite.svg              # Favicon
│   └── videos/               # Project demo videos
│       ├── *.mp4             # Video files
│
├── src/                      # Source code
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # React entry point
│   ├── style.css             # Custom and Tailwind CSS
│   ├── components/           # Reusable components
│   │   └── SEO.tsx           # SEO component for dynamic meta tags
│   ├── hooks/                # Custom React hooks
│   │   └── useScrollSEO.ts   # Hook for scroll-based SEO updates
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero/landing section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills section
│   ├── WorkExperience.tsx    # Work experience section
│   ├── Awards.tsx            # Awards section
│   ├── Projects.tsx          # Projects section
│   ├── Contact.tsx           # Contact form/section
│   ├── Footer.tsx            # Footer with social links
│   ├── counter.ts            # Example counter (demo)
│   ├── typescript.svg        # TypeScript logo
│   └── vite-env.d.ts         # Vite environment types
│
├── public/                   # Static assets
│   ├── *.jpg, *.png, *.pdf   # Certificates, images, resume
│   ├── vite.svg              # Favicon
│   ├── videos/               # Project demo videos
│   ├── sitemap.xml           # SEO sitemap
│   ├── robots.txt            # Search engine directives
│   ├── manifest.json         # PWA manifest
│   └── sw.js                 # Service worker
│
└── ...
```

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ameetpokhrel02/my-internship.git
cd my-internship
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
- Open https://my-portfolio-fawn-iota-keeifdqxl8.vercel.app/ in your browser.

### 4. Build for Production
```bash
npm run build
```
- Output will be in the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🔗 Main Scripts
| Command         | Description                  |
|-----------------|-----------------------------|
| `npm run dev`   | Start local dev server      |
| `npm run build` | Build for production        |
| `npm run preview` | Preview production build   |

---

## 📦 Dependencies
- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Icons**

---

## 🔍 SEO Features
- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing optimization
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawling directives
- **PWA Support**: Progressive Web App with manifest and service worker
- **Dynamic SEO**: Scroll-based meta tag updates
- **Canonical URLs**: Prevent duplicate content issues
- **Performance**: Optimized loading with preconnect and caching

---

## 📄 Certificates & Videos
- All certificates and demo videos are in the `public/` folder and are referenced in the app.

---

## 📬 Contact
For any queries, reach out via the contact section in the app or connect on [LinkedIn](https://www.linkedin.com/in/ameet-pokhrel-82533433b/).

---

## 📝 License
This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio!
