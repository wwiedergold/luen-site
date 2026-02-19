# Hugo Migration Plan

Migrate the luen.app static site from 19 hand-crafted HTML files to Hugo, preserving every pixel of the current design while enabling scalable content, multi-language support, and automated builds.

## Phase 1: Hugo Project Scaffolding

### 1.1 Initialize Hugo
- Run `hugo new site` in a temporary directory, then move the Hugo structure into the repo
- Create `hugo.toml` config with:
  - `baseURL = "https://luen.app"`
  - `languageCode = "en"`
  - Default taxonomy disabled (not needed yet)
  - Sitemap config (changefreq, priority defaults)
  - Menu definitions for header and footer nav

### 1.2 Directory Structure
```
/
├── hugo.toml
├── content/
│   ├── _index.md                          # Homepage
│   ├── why/index.md                       # Why page
│   ├── privacy/index.md                   # Privacy policy
│   ├── support/index.md                   # Support/contact
│   ├── imprint/index.md                   # German imprint
│   ├── learn/
│   │   ├── _index.md                      # Learn hub listing
│   │   ├── vo2-max-by-age-and-gender/index.md
│   │   ├── how-to-improve-vo2-max/index.md
│   │   └── ... (11 more articles)
│   └── tools/
│       ├── vo2-max-percentile-calculator/index.md
│       └── resting-heart-rate-percentile-calculator/index.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html                    # Base template (html, head, header, footer)
│   │   ├── single.html                    # Default single page
│   │   └── list.html                      # Default list page
│   ├── index.html                         # Homepage layout
│   ├── learn/
│   │   ├── single.html                    # Article layout (breadcrumb, CTA, FAQ, related)
│   │   └── list.html                      # Learn hub (article card grid)
│   ├── tools/
│   │   └── single.html                    # Tool layout (calculator + article body)
│   ├── why/
│   │   └── single.html                    # Why page layout
│   ├── support/
│   │   └── single.html                    # Support page layout (with form)
│   └── partials/
│       ├── head.html                      # <head> meta, fonts, OG tags, JSON-LD
│       ├── header.html                    # Sticky nav header
│       ├── footer.html                    # Footer links + copyright
│       ├── cta-box.html                   # App download CTA box (reused in articles)
│       ├── faq.html                       # FAQ section (from frontmatter data)
│       ├── related.html                   # Related articles section
│       ├── breadcrumb.html                # Breadcrumb nav
│       ├── json-ld/article.html           # Article structured data
│       ├── json-ld/faq.html               # FAQ structured data
│       ├── json-ld/software-app.html      # Homepage app structured data
│       └── json-ld/breadcrumb.html        # Breadcrumb structured data
├── assets/
│   ├── css/
│   │   ├── main.css                       # Shared styles (variables, reset, header, footer, typography)
│   │   ├── article.css                    # Article-specific styles
│   │   ├── calculator.css                 # Calculator tool styles
│   │   └── home.css                       # Homepage-specific styles
│   └── js/
│       ├── header-scroll.js               # Shared header scroll effect
│       ├── vo2-max-calculator.js           # VO2 Max calculator logic + data
│       └── rhr-calculator.js              # RHR calculator logic + data
├── static/
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── robots.txt
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── CNAME
│   └── screenshots/
│       ├── progress.png
│       ├── today.png
│       └── insights.png
└── .github/
    └── workflows/
        └── deploy.yml                     # GitHub Actions: build Hugo + deploy to Pages
```

## Phase 2: Extract Shared Components

### 2.1 CSS Extraction
- Extract the ~700-line shared CSS block into `assets/css/main.css`
- Extract homepage-only styles into `assets/css/home.css`
- Extract article-only styles into `assets/css/article.css`
- Extract calculator-only styles into `assets/css/calculator.css`
- Use Hugo Pipes (`resources.Get | css.Minify | fingerprint`) for cache-busting and minification
- Keep CSS variables exactly as they are — no design changes

### 2.2 Partials
- `head.html`: Receives page params (title, description, ogTitle, ogImage, canonical, type) and renders all `<meta>`, `<link>`, and font preconnects
- `header.html`: Exact current header markup — logo + nav links + Download CTA
- `footer.html`: Exact current footer markup — links + copyright with `{{ now.Year }}`
- `cta-box.html`: The "Download for iOS" box used in every article
- `faq.html`: Loops over `.Params.faq` frontmatter array, renders FAQ items
- `related.html`: Loops over `.Params.related` frontmatter array, renders links
- `breadcrumb.html`: Renders Home > Section > Page breadcrumb from Hugo's `.Parent` chain

### 2.3 JavaScript Extraction
- `header-scroll.js`: The 4-line scroll listener, included on every page via baseof.html
- `vo2-max-calculator.js`: Full calculator logic including data tables, interpolation, what-if slider — loaded only on that tool page
- `rhr-calculator.js`: Full RHR calculator logic — loaded only on that tool page

## Phase 3: Create Layouts

### 3.1 baseof.html (Base Template)
```
<!DOCTYPE html>
<html lang="{{ .Lang }}">
<head>
  {{ partial "head.html" . }}
  {{ block "styles" . }}{{ end }}
</head>
<body>
  {{ partial "header.html" . }}
  <main>{{ block "main" . }}{{ end }}</main>
  {{ partial "footer.html" . }}
  <script src="{{ (resources.Get "js/header-scroll.js" | fingerprint).RelPermalink }}"></script>
  {{ block "scripts" . }}{{ end }}
</body>
</html>
```

### 3.2 Section-Specific Layouts
- **Homepage** (`layouts/index.html`): Hero, features grid, how-it-works, social proof, CTA, support form — all as HTML in the template (this page is unique, not Markdown-driven)
- **Learn article** (`layouts/learn/single.html`): Breadcrumb + article header + `{{ .Content }}` + CTA box + FAQ partial + related partial
- **Learn hub** (`layouts/learn/list.html`): Title + subtitle + loop over `pages` to render article cards
- **Tool page** (`layouts/tools/single.html`): Breadcrumb + article header + calculator HTML block + `{{ .Content }}` + CTA + FAQ + related
- **Info pages** (privacy, support, imprint, why): Each gets a simple layout or uses `_default/single.html` with `{{ .Content }}`

## Phase 4: Migrate Content to Markdown

### 4.1 Article Frontmatter Schema
```yaml
---
title: "VO2 Max by Age and Gender: Where Do You Stand?"
description: "VO2 Max ranges by age and gender with percentile charts..."
subtitle: "Reference charts for men and women, from your 20s through your 70s."
date: 2026-02-09
lastmod: 2026-02-15
ogTitle: "VO2 Max by Age and Gender: Where Do You Stand?"
sitemap:
  priority: 0.8
  changefreq: monthly
faq:
  - question: "What is a good VO2 Max for my age?"
    answer: "It depends on your sex and age group..."
  - question: "How accurate is Apple Watch VO2 Max?"
    answer: "Studies show Apple Watch estimates are within roughly 1 ml/kg/min..."
  - question: "Can you improve VO2 Max after 50?"
    answer: "Yes. Research shows adults over 50 can achieve 5–10% gains..."
related:
  - title: "How to Improve Your VO2 Max"
    url: "/learn/how-to-improve-vo2-max/"
  - title: "VO2 Max and Longevity"
    url: "/learn/vo2-max-and-longevity/"
---

Article body in Markdown here...
(HTML tables kept as raw HTML inside Markdown — Hugo supports this)
```

### 4.2 Tool Frontmatter
Same as article frontmatter, plus a `layout: tool` or handled by section-based layout.
Calculator HTML will live in the layout template, with the data tables in the JS files.

### 4.3 Info Page Frontmatter
Minimal: just `title`, `description`, and the Markdown body.

### 4.4 Content Conversion (13 articles + 5 info pages)
For each existing HTML page:
1. Extract unique metadata → frontmatter YAML
2. Extract `<article-body>` inner HTML → Markdown (keeping raw HTML tables as-is)
3. Extract FAQ items → frontmatter `faq` array
4. Extract related links → frontmatter `related` array

## Phase 5: Automated Sitemap & SEO

### 5.1 Sitemap
- Hugo generates `sitemap.xml` automatically from all content pages
- Per-page `sitemap.priority` and `sitemap.changefreq` set in frontmatter
- Remove the hand-maintained `sitemap.xml` from static/

### 5.2 JSON-LD Structured Data
- Generated from partials using frontmatter data
- Article schema: headline, datePublished, dateModified, author, publisher
- FAQ schema: loops over `faq` frontmatter array
- Breadcrumb schema: generated from Hugo's page hierarchy
- Homepage: SoftwareApplication + Organization schemas (hardcoded in homepage layout)

### 5.3 robots.txt
- Keep current `robots.txt` in `static/` (Hugo will serve it as-is)

## Phase 6: GitHub Actions Deployment

### 6.1 Workflow File (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true
      - run: hugo --minify
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 6.2 GitHub Pages Settings
- Source: GitHub Actions (not branch-based)
- CNAME file in `static/` ensures custom domain works

## Phase 7: i18n Readiness (Structure Only)

This phase sets up the scaffolding for multi-language — actual translations come later.

### 7.1 Config
```toml
defaultContentLanguage = "en"

[languages]
  [languages.en]
    languageName = "English"
    weight = 1
  # Future: [languages.de]
  #   languageName = "Deutsch"
  #   weight = 2
  #   contentDir = "content/de"
```

### 7.2 Future Language Addition
When adding German:
1. Create `content/de/` with translated `.md` files
2. Add `[languages.de]` to config
3. Hugo auto-generates `/de/learn/...` URLs
4. Add `hreflang` links in `head.html` partial using Hugo's `.Translations`
5. Add language switcher to header partial

No code changes needed in layouts — Hugo's i18n handles it.

## Implementation Order

| Step | What | Files Changed |
|------|------|---------------|
| 1 | Initialize Hugo, create `hugo.toml` | `hugo.toml` |
| 2 | Create `baseof.html` + partials (head, header, footer) | `layouts/`, `assets/css/` |
| 3 | Extract shared CSS into `assets/css/main.css` | `assets/css/main.css` |
| 4 | Build homepage layout | `layouts/index.html`, `content/_index.md`, `assets/css/home.css` |
| 5 | Build article layout + extract article CSS | `layouts/learn/single.html`, `assets/css/article.css` |
| 6 | Convert all 13 learn articles to Markdown | `content/learn/*.md` |
| 7 | Build learn hub layout | `layouts/learn/list.html` |
| 8 | Extract calculator JS, build tool layout | `layouts/tools/single.html`, `assets/js/`, `assets/css/calculator.css` |
| 9 | Convert 2 tool pages to Markdown + JS | `content/tools/*.md` |
| 10 | Build info page layouts, convert why/privacy/support/imprint | `content/*.md`, `layouts/` |
| 11 | Add GitHub Actions deploy workflow | `.github/workflows/deploy.yml` |
| 12 | Remove old HTML files, test full build | Delete 19 HTML files, `sitemap.xml` |
| 13 | Verify output matches current site | Visual comparison |

## Validation Criteria
- `hugo` builds with zero errors/warnings
- All 19 pages render at the same URLs as today
- HTML output is visually identical to current site
- Sitemap auto-generated with correct URLs and priorities
- JSON-LD structured data present on all pages
- Calculator tools fully functional
- GitHub Actions deploys successfully
- CNAME / custom domain works
