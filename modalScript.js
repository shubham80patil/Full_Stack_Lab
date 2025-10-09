// Responsive navigation toggle
 const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

// Modal functionality
const modal = document.getElementById("discountModal");
const closeModal = document.getElementById("closeModal");

// Show modal automatically when the site loads
window.addEventListener("load", () => {
  setTimeout(() => {
    modal.style.display = "flex";
  }, 1000); // 1-second delay for smoother UX
});

// Close modal when clicking X or outside modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

