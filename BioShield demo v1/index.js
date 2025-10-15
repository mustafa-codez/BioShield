// ===== DNA ENCRYPTION =====
function encryptPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!input) {
    resultBox.innerText = "⚠️ Please enter a password!";
    return;
  }

  // DNA mapping (A, C, G, T)
  const mapping = ["A", "C", "G", "T"];
  let encoded = "";

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    encoded += mapping[charCode % 4];

    // Add space every 3 bases (like codons in DNA)
    if ((i + 1) % 3 === 0) encoded += " ";
  }

  resultBox.innerText = "🔐 DNA Encrypted: " + encoded.trim();
  resultBox.style.opacity = 0;

  // Smooth fade-in effect
  setTimeout(() => {
    resultBox.style.transition = "opacity 0.6s ease";
    resultBox.style.opacity = 1;
  }, 50);
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== FADE-IN ANIMATIONS =====
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
