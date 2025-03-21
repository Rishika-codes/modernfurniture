// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is in viewport
function animateOnScroll() {
  const sections = document.querySelectorAll('.hero, .products, .about, .contact');
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Add event listener for scroll
window.addEventListener('scroll', animateOnScroll);

// Trigger animations on page load
window.addEventListener('load', () => {
  animateOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  function initializeSlider(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) {
          console.error(`Container ${containerSelector} not found`);
          return;
      }
      const productGrid = container.querySelector(".product-grid");
      const prevButton = container.querySelector(".prev");
      const nextButton = container.querySelector(".next");

      if (!productGrid || !prevButton || !nextButton) {
          console.error(`Missing elements in ${containerSelector}`);
          return;
      }

      productGrid.style.overflowX = "hidden"; // Hide scrollbar but allow scrolling
      productGrid.style.overflowY = "hidden"; // Disable vertical scroll
      productGrid.style.whiteSpace = "nowrap"; // Prevent line breaks
      productGrid.style.display = "flex"; // Ensure items are in a row
      productGrid.style.scrollBehavior = "smooth"; // Ensure smooth scrolling
      productGrid.style.scrollbarWidth = "none"; // Hide scrollbar for Firefox
      productGrid.style.msOverflowStyle = "none"; // Hide scrollbar for IE/Edge
      productGrid.style.WebkitOverflowScrolling = "touch"; // Enable smooth touch scrolling

      let scrollStep = productGrid.clientWidth / 2; // Adjust scroll amount per click

      prevButton.addEventListener("click", function () {
          if (productGrid.scrollLeft <= 0) {
              productGrid.scrollLeft = productGrid.scrollWidth - productGrid.clientWidth;
          } else {
              productGrid.scrollLeft -= scrollStep;
          }
      });

      nextButton.addEventListener("click", function () {
          if (productGrid.scrollLeft + productGrid.clientWidth >= productGrid.scrollWidth - 1) {
              productGrid.scrollLeft = 0;
          } else {
              productGrid.scrollLeft += scrollStep;
          }
      });
  }

  [".container1", ".container2", ".container3"].forEach(initializeSlider);
});



