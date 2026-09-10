# Ivaylo portfolio

Static frontend in HTML, CSS and JavaScript. No build, backend, database, credentials, or packages required.

- Black and white layout, numbered work index, and an animated detail panel with flow diagrams.
- Interactive perspective-projected 3D signal field: drag or use arrow keys to rotate, switch between field and structure, and pause motion.
- Real GitHub account contribution calendar: 365 days, 53 week columns, 1,511 contributions, green intensity squares with a left-to-right wave reveal and replay control.
- Calendar data in contributions.json is a verified snapshot for 11 September 2025 through 10 September 2026. It does not refresh automatically. Update this static file with a fresh GitHub contributionCalendar export to refresh it. Do not put GitHub credentials in browser code.
- Latest profile-repository commits refresh directly from the public GitHub REST API on page load, with a saved fallback.
- Responsive layout, keyboard-operated work tabs, reduced-motion support and an animation pause button.

Private preview: https://ivaylo-engineering.kwoter.chatgpt.site

Serve this directory with any static HTTP server. After merging, GitHub Pages can serve the main branch's /docs folder; publication has not been enabled. Google Fonts has system-font fallbacks.