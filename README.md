# EasyConvertPro

A simple unit converter web application built with React, TypeScript, and Tailwind CSS.

## Features

- Convert between common units of:
  - Length (meters, feet, inches, etc.)
  - Weight (kilograms, pounds, etc.)
  - Temperature (Celsius, Fahrenheit, Kelvin)
  - Area (square meters, square feet, etc.)
  - Volume (liters, gallons, etc.)
- Light and dark mode
- Responsive design
- Conversion history

## Deployment

### GitHub Pages Deployment Steps

1. Create a new repository on GitHub.

2. Initialize git and connect to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. In your `package.json`, the following scripts are already configured:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "gh-pages" branch
   - Save the changes

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT
