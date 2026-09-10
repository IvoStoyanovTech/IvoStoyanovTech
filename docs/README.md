# Ivaylo Tech portfolio

Static frontend in HTML, CSS and JavaScript. No backend, credentials, database, packages, or build required.

- Compact, softly rounded editorial layout with colorful local technology badges.
- An interactive agent workbench with four stages: Capture (Obsidian / Graphify), Plan (Hermes / Claude), Build (Codex), and Review (Developer). Select a stage or play the illustrative voice-agent workflow. Nothing is executed and no model is called.
- Account contribution calendar: 365 days, 53 columns, 1,511 contributions. Lightweight transform/opacity column waves replace per-cell 3D/filter animation. Hover, focus, or tap for daily counts; arrow keys move between dates.
- Calendar data is a static snapshot for 11 September 2025 through 10 September 2026, stored in contributions.json. It does not refresh automatically. Never put GitHub credentials into browser code.
- Latest profile-repository commits refresh from the public GitHub REST API, with a saved fallback.
- Keyboard work tabs, motion pause, reduced-motion support, and one-time scroll reveals. Workflow playback stops when offscreen or when the tab is hidden; there is no continuous rendering loop.

Private preview: https://ivaylo-engineering.kwoter.chatgpt.site

Serve this directory with a static HTTP server. After merging, GitHub Pages can serve main /docs; publication has not been enabled. Google Fonts uses system fallbacks.