# Ivaylo portfolio

A static, frontend-only portfolio using the skills and work areas in the profile README.

- Interactive perspective-projected 3D orbital visual, with pause and reduced-motion support.
- Six animated work areas alongside real commits from this profile repository.
- Public GitHub commits load directly in the browser without credentials. A verified snapshot from 10 September 2026 remains available if the request fails.
- Responsive layout and keyboard-accessible controls.
- No application server, API keys, database, package installation, or build step.

Preview: https://ivaylo-engineering.kwoter.chatgpt.site (owner-private).

Serve this directory with any static HTTP server to preview it locally. The three site files can also be served by GitHub Pages by selecting the main branch and /docs folder after merging. GitHub Pages publication is not enabled by this pull request. Google Fonts is optional; local system fonts are used as fallback.

Edit `work` and `stack` in app.js to update profile content. Commit history refreshes on page load; its chart covers the last 12 weeks and is limited to the latest 100 commits in this repository. It is not an account-wide contribution chart.