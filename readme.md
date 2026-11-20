# NodexUI

A lightweight, responsive CSS library and component showcase for building polished web interfaces quickly.

**Live site:** https://nodexui.github.io

## Features

- Responsive navigation and mobile menus
- Ready-to-copy HTML for buttons, cards, dropdowns, modals, navigation bars, heroes, grids, and typography
- Utility classes for colors, spacing, typography, shadows, and animation
- Browser-based JavaScript obfuscation tool
- Component search, copy-to-clipboard controls, and interactive documentation
- Resource and developer-tool directories

## Getting started

Add the NodexUI stylesheet to the `<head>` of your HTML document:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nodexui/npm@main/v1.0.0.css"
>
```

Then add a NodexUI component:

```html
<button class="btn bg-blue-300 text-black">Button</button>
```

Browse the complete setup guide and component examples at [NodexUI Docs](https://nodexui.github.io/docs.html).

## Project structure

```text
index.html          Landing page and marketing sections
style.css           Styles for the main website
script.js           Navigation, scroll, and quick-menu behavior
docs.html           Installation and component documentation
components/         Individual component documentation and demos
css_file/           Shared library, documentation, and animation styles
document/           Privacy policy, disclaimer, and terms of use
pages/              Additional tools and resource pages
img/                Repository images
logo.png            NodexUI logo
```

## Components

Component documentation is available in `components/`:

- [Buttons](https://nodexui.github.io/components/button.html)
- [Cards](https://nodexui.github.io/components/cards.html)
- [Dropdowns](https://nodexui.github.io/components/dropdown.html)
- [Grids](https://nodexui.github.io/components/grids.html)
- [Heroes](https://nodexui.github.io/components/hero.html)
- [Modals](https://nodexui.github.io/components/modal.html)
- [Navigation bars](https://nodexui.github.io/components/navbar.html)
- [Typography](https://nodexui.github.io/components/typography.html)

## Local development

This project is a static website and does not require a build step or package manager.

```bash
git clone https://github.com/nodexui/nodexui.github.io.git
cd nodexui.github.io
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Font Awesome
- GitHub Pages
- jsDelivr CDN

## Contributing

Bug reports and suggested changes are welcome:

- Open an issue in this repository
- Use the [bug report page](https://nodexui.github.io/report.html)
- Submit a pull request with focused changes

## Project status

NodexUI v1.0 is the current version. The roadmap includes additional components, advanced grids, animation utilities, and expanded theme and color tools.

## Legal

Review the project's [Terms of Use](https://nodexui.github.io/document/terms_use.html), [Privacy Policy](https://nodexui.github.io/document/privacy_policy.html), and [Disclaimer](https://nodexui.github.io/document/disclaimer.html).