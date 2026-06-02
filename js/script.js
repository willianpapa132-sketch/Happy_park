const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu a");

// Efeito no header ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

// Rolagem suave nos links com #
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      event.preventDefault();

      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

// Animação simples nos cards ao aparecer na tela
const cards = document.querySelectorAll(".card, .galeria-home img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach((card) => observer.observe(card));