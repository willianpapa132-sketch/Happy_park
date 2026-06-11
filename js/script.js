document.addEventListener("DOMContentLoaded", () => {
  function setupCarousel(carouselId, prevId, nextId, itemClass, desktopQtd, mobileQtd) {
    const carousel = document.getElementById(carouselId);
    const btnPrev = document.getElementById(prevId);
    const btnNext = document.getElementById(nextId);

    let currentIndex = 0;

    function getItemsPerPage() {
      return window.innerWidth <= 768 ? mobileQtd : desktopQtd;
    }

    function updateCarousel() {
      if (!carousel) return;

      const items = carousel.querySelectorAll(itemClass);
      const itemsPerPage = getItemsPerPage();
      const maxIndex = Math.max(0, items.length - itemsPerPage);

      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      items.forEach((item, index) => {
        item.style.display =
          index >= currentIndex && index < currentIndex + itemsPerPage
            ? "block"
            : "none";
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
  }

  setupCarousel("decoracoesCarousel", "btnPrev", "btnNext", ".decoracao-item", 12, 6);
  setupCarousel("kitCarousel", "kitPrev", "kitNext", ".kit-item", 4, 4);

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  if (modal && modalImg && closeModal) {
    const imagens = document.querySelectorAll(".decoracao-item img, .kit-item img, .galeria-grid img");

    imagens.forEach((img) => {
      img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});