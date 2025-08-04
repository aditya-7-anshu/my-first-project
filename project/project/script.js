// Theme Toggling logic
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

themeToggle.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    htmlElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
});

// FAQ Accordion logic
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.parentElement;
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("svg");

    if (content.classList.contains("hidden")) {
      // Close other open accordions
      document.querySelectorAll(".faq-content").forEach((c) => {
        if (c !== content) {
          c.classList.add("hidden");
          c.previousElementSibling
            .querySelector("svg")
            .classList.remove("rotate-180");
        }
      });

      // Open this one
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      // Close this one
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");
    }
  });
});
