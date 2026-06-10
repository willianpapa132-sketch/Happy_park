const carousel = document.getElementById("decoracoesCarousel");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

let currentIndex = 0;

function getItemsPerPage() {
  return window.innerWidth <= 768 ? 6 : 12;
}

function updateCarousel() {
  if (!carousel) return;

  const items = document.querySelectorAll(".decoracao-item");
  const itemsPerPage = getItemsPerPage();
  const maxIndex = Math.max(0, items.length - itemsPerPage);

  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;

  items.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + itemsPerPage) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

if (carousel && btnPrev && btnNext) {
  btnNext.addEventListener("click", () => {
    currentIndex += getItemsPerPage();
    updateCarousel();
  });

  btnPrev.addEventListener("click", () => {
    currentIndex -= getItemsPerPage();
    updateCarousel();
  });

  window.addEventListener("resize", () => {
    currentIndex = 0;
    updateCarousel();
  });

  updateCarousel();
}