# Nexora Enterprise Content Hub

A performance-first, modular enterprise website built using Adobe AEM Franklin.
This project demonstrates how to design, author, and deliver scalable content platforms using a block-based architecture.

> ⚠️ **Disclaimer:**
> This is a **portfolio project**, but it is intentionally designed to reflect **real-world enterprise Franklin implementations**, not tutorials or demos.


---

## Project Goals

- Apply **Adobe Franklin best practices** in a real-world style website
- Design **modular, reusable blocks** and sections
- Ensure **SEO-ready semantic markup**
- Optimize for **Core Web Vitals**
- Demonstrate front-end decision-making beyond boilerplate setup

---

## Environments

- **Preview:** https://main--enterprise-content-delivery--bluedeepart.aem.page/
- **Live:** https://main--enterprise-content-delivery--bluedeepart.aem.live/

---

## Case Study Scope

### Included

- Custom Franklin blocks
- Section-based page composition
- Minimal, performance-first JavaScript
- Modular CSS per block
- Author-friendly content structure

### Excluded

- Client or proprietary data
- Paid Adobe services
- Enterprise integrations (simulated where applicable)

---

## Adobe Franklin Architecture

This project follows Franklin’s **content-first architecture**:

- Pages are composed of **sections**
- Sections contain **blocks**
- Blocks are responsible for a **single UI concern**
- Progressive enhancement is preferred over heavy client-side logic

All blocks are designed to be:

- Reusable
- Author-friendly
- Performance-aware
- Easy to maintain

---

## SEO & Performance Strategy

SEO and performance were treated as **core requirements**, not add-ons.

Key considerations:

- Semantic HTML5 structure
- Logical heading hierarchy
- Crawl-friendly content layout
- Minimal JavaScript execution
- Optimized assets and embeds
- Alignment with Core Web Vitals

---

## Documentation

Before working with this project, review the official Adobe Franklin documentation:

1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance (Keeping it 100)](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

---

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
