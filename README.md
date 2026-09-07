# Garv Shaw — Animated Portfolio ⚡

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.x-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![Security](https://img.shields.io/badge/Security-OWASP_Audited-00C853?logo=shield&logoColor=white)](#-security--qa-standards)

A modern, high-performance developer portfolio showcasing work at the intersection of **Artificial Intelligence**, **Cloud Computing**, **Software Development**, **Business**, and **Finance**. Built with a futuristic cybernetic aesthetic, interactive 3D physics, and zero-vulnerability production standards.

## 🌐 Live Website
- https://portfoliowebsite-omega-rouge.vercel.app/
---

## ✨ Features

- **🛸 3D Holographic Identity Hub**: Interactive 3D perspective card with spring-physics mouse tilt (`rotateX`, `rotateY`), multi-plane `translateZ` depth layers, and periodic laser scanning accents.
- **🌌 Infinite Dual-Direction Showcase Gallery**: Smooth, GPU-accelerated infinite marquee rows moving in opposing directions with hover-pause inspection and interactive light reflection sweeps.
- **💼 Project Showcase & Interactive Modals**: Detailed presentation of flagship projects with live links, GitHub repositories, and interactive preview modals.
- **⚡ Next-Gen Tech Stack**: Powered by React 19, TypeScript, Tailwind CSS v4, and Motion.
- **🔒 Production-Hardened Security**:
  - `0` vulnerabilities reported by `npm audit`.
  - Zero raw HTML injection (`dangerouslySetInnerHTML`) or `eval()` execution.
  - Tabnabbing protection (`rel="noopener noreferrer"`) on all external links.
  - Safe Referrer Policy and strict transport readiness.
- **📈 SEO & Search Engine Optimization**:
  - Automated `robots.txt` and `sitemap.xml`.
  - Rich JSON-LD `Person` Structured Data markup (Schema.org).
  - Complete Open Graph and Twitter Card metadata.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations & 3D** | [Motion](https://motion.dev/) (`motion/react`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **SEO & Meta** | Schema.org JSON-LD, Open Graph, Twitter Cards, Sitemap XML |

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Optimized image assets & media
│   ├── robots.txt          # Search engine crawler permissions
│   └── sitemap.xml         # Site structure & index priorities
├── src/
│   ├── components/         # Modular UI & interactive components
│   │   ├── AboutSection.tsx            # About overview section
│   │   ├── Futuristic3DAboutText.tsx   # 3D interactive holographic card
│   │   ├── MarqueeSection.tsx          # Dual-direction infinite gallery
│   │   ├── ProjectCard.tsx             # Showcase project cards
│   │   ├── ProjectModal.tsx            # Deep project inspection modal
│   │   ├── Navbar.tsx                  # Responsive navigation header
│   │   └── FooterSection.tsx           # Contact & social presence grid
│   ├── data/
│   │   └── portfolioData.ts            # Projects, links, and content
│   ├── App.tsx             # Root application composition
│   ├── main.tsx            # React DOM client entry
│   └── index.css           # Global Tailwind CSS and marquee keyframes
├── index.html              # HTML5 entry with meta, SEO, and JSON-LD
├── metadata.json           # Application platform configuration
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/garvshaw89-glitch/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 🔨 Available Scripts

- `npm run dev` — Starts the Vite development server on port 3000.
- `npm run build` — Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Validates TypeScript types across the entire project (`tsc --noEmit`).

---

## 🛡️ Security & QA Standards

This portfolio is built following strict web security and quality guidelines:

- **OWASP Compliance**: Static client-side architecture immune to SQL/NoSQL injection and server-side request forgery.
- **XSS Prevention**: Content rendered through typed React props with automatic escaping.
- **Reverse Tabnabbing Protection**: External links opened in a new tab specify `target="_blank" rel="noopener noreferrer"`.
- **Zero Dependencies Vulnerabilities**: Audited with `npm audit` passing with 0 vulnerabilities.

---

## 🌐 Connect with Garv Shaw

- **GitHub**: [@garvshaw89-glitch](https://github.com/garvshaw89-glitch)
- **LinkedIn**: [Garv Shaw](https://linkedin.com/in/garv-shaw-08a33237b)
- **Instagram**: [@garvshaw](https://instagram.com/garvshaw)
- **Email**: [garvshawinfo@gmail.com](mailto:garvshawinfo@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
