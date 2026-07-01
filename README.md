# Anime Outfit — React SPA

A single-page React app recreating the "Anime Outfit" clothing & anime affiliate
site, styled with the dark/purple/red/cyan palette from the design spec.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Folder structure

```
anime-outfit/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component, wires sections together
    ├── App.css
    ├── index.css           # Global styles + color/font CSS variables
    ├── data/
    │   └── siteData.js     # Nav links, trust badges, categories, products
    └── components/
        ├── Header.jsx / .css
        ├── Hero.jsx / .css
        ├── TrustBadges.jsx / .css
        ├── CategoryCard.jsx / .css
        ├── CategorySection.jsx / .css
        ├── ProductCard.jsx / .css
        ├── TrendingSection.jsx / .css
        └── Footer.jsx / .css
```

## Customizing content

All text, images, and prices are passed as **props**, sourced from
`src/data/siteData.js`. To use your own product photos, swap the `image`
URLs in that file for your own asset paths (e.g. `/src/assets/hoodie1.jpg`)
or hosted image URLs — placeholder images are used here since real anime
character artwork is copyrighted and can't be reproduced.

## Colors used (from the design spec)

| Token       | Hex       | Use                        |
|-------------|-----------|-----------------------------|
| bg-main     | `#0D1117` | Page background            |
| bg-card     | `#1A1F2B` | Cards / sections           |
| primary     | `#7C3AED` | Buttons, links, accents    |
| accent      | `#F43F5E` | Highlights, badge text     |
| text-light  | `#E5E7EB` | Body text                  |
| text-white  | `#FFFFFF` | Headings                   |
| secondary   | `#22D3EE` | Secondary accent           |
| highlight   | `#FBBF24` | Star ratings                |

Fonts: **Bebas Neue / Oswald** for headings, **Inter / Poppins** for body text.
