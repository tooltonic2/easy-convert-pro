
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

### GitHub Pages Deployment Guide

This app is configured to be deployed on GitHub Pages. Follow these steps:

1. In your `package.json`, add:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. Install the GitHub Pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Run the deploy command:
   ```bash
   npm run deploy
   ```

4. Ensure that in your GitHub repository settings, under "Pages", the source is set to the "gh-pages" branch.

### Troubleshooting Blank Page

If you're seeing a blank page after deployment:

1. Check that `base: './'` is set in your vite.config.ts file
2. Make sure all asset paths are relative, not absolute
3. Check browser console for 404 errors on scripts or resources
4. Try clearing your browser cache

## Monetization

To monetize this app with Google AdSense:

1. Sign up for a Google AdSense account
2. Get your Publisher ID
3. Replace "YOUR_PUBLISHER_ID" in the AdBanner component and index.html with your actual Publisher ID
4. Create ad units in your AdSense dashboard and use their IDs in the `adSlot` prop

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
