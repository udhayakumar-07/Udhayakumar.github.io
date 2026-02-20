# Udhayakumar.A — Portfolio

A modern, dark-themed portfolio website built with **React.js + Vite**.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm preview
```

---

## 📦 Deploy to GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js` — add your repo name as base:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // 👈 add this
   })
   ```

3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Run:
   ```bash
   npm run deploy
   ```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → Import your repository.
3. Framework preset: **Vite** — Vercel detects this automatically.
4. Click **Deploy**. Done! ✅

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Certifications.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

Built with ❤️ for Udhayakumar.A
