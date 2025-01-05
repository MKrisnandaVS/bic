// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik luar hamburger
window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


// coba
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;
  const slideWidth = slider.children[0].offsetWidth; // Lebar setiap slide
  const totalSlides = slider.children.length; // Total jumlah slide
  const maxIndex = Math.max(0, totalSlides - 3); // Indeks maksimum (sisa slide setelah tampil 3)

  // Fungsi untuk memperbarui posisi slider
  const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  // Fungsi untuk mengaktifkan/mematikan tombol navigasi
  const updateButtonState = () => {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
    prevButton.classList.toggle("opacity-50", currentIndex === 0);
    nextButton.classList.toggle("opacity-50", currentIndex === maxIndex);
  };

  // Klik tombol "Previous"
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
      updateButtonState();
    }
  });

  // Klik tombol "Next"
  nextButton.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSliderPosition();
      updateButtonState();
    }
  });

  // Inisialisasi
  updateSliderPosition();
  updateButtonState();
});

