# 🧬 BioShield — Cyber Edition
   **Live demo:** https://mustafa-codez.github.io/BioShield/

A single-file web demo that rewrites text as a strand of DNA bases (A, C, G, T), locks it with a secret key, and then lets you attack your own cipher to see why it breaks.

Open `index.html` in any browser. No install, no server, no dependencies.

## What it does

**Cipher tab**
- Your text is converted to UTF-8 bytes, and each byte becomes **4 bases** (2 bits per base: A=0, C=1, G=2, T=3).
- A secret key shifts each base around the A → C → G → T wheel. Two key modes:
  - **1 shift per letter:** each key letter gives one shift (0–3). Only 4 options per letter.
  - **4 shifts per letter:** each key letter gives four shifts, using all 8 bits. 256 options per letter.
- **4 random salt bases** are placed at the front, so the same message looks different every time. The salt is public, so it adds variety, not secrecy.
- Bases are displayed in groups of three, like codons. Paste a strand back in with the same key and press **Decode** to recover the text.
- Stats shown: bytes in, bases out, codons, GC content.

**Break It tab**
- **Crack my last encryption:** brute-forces short keys and shows the readable results, with a step-by-step "under the hood" walkthrough.
- **Smart attack:** frequency analysis (index of coincidence) that recovers the 4-shift key one letter at a time, without guessing whole keys.

**About tab**
- Why the project exists, and an honest note on its limits.

## Important note

This is a **learning demo, not real security.** It is a Vigenère-style cipher. The Break It tab shows how it falls to brute force (mode 1) and frequency analysis (mode 4). Real systems use vetted algorithms such as AES, and hash passwords instead of encrypting them. **Never enter a real password.**

BioShield only borrows the look of DNA. It uses A, C, G and T as letters and never touches anyone's real genetic data.

## Version history
- **Cyber Edition (v2):** reversible 2-bit-per-base encoding, key modes, salt, decoding, and the Break It attack lab.
- **v1:** simple demo that mapped each character to one base (lossy, not reversible).
