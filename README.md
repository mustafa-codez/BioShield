# 🧬 BioShield

A small front-end demo that turns a password into a DNA-style string of bases (A, C, G, T), styled with a glassmorphism look and neon-glow animations.

Built with **HTML, CSS and JavaScript** (no dependencies).

## Features
- Maps each character to one of four bases (`A`, `C`, `G`, `T`) and groups them in threes, like codons
- Live output in the page
- Responsive glassmorphism UI with fade-in and glow effects

## Run it
Open `BioShield demo v1/index.html` in a browser.

## Important note
This is an **early visual demo (v1)**, not real encryption. Each character is reduced to `charCode % 4`, so the output is lossy, cannot be decrypted, and gives no security. Do not use it for real passwords. It was built to explore the DNA-encoding idea and the UI.

## Ideas for a next version
- A reversible DNA encoding (2 bits per base, so 4 bases per byte)
- Real cryptography underneath (for example AES-GCM via the Web Crypto API) with DNA encoding as the output format
