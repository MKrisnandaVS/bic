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
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (
    hamburger &&
    navMenu &&
    !hamburger.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Submenu Toggle
const submenuLink = document.querySelector(".submenu-link");
const submenu = document.querySelector(".submenu");
submenuLink?.addEventListener("click", () => {
  submenu.classList.toggle("active-submenu");
  submenu.classList.toggle("inactive-submenu");
});

// Pages Submenu Mouseover
const pages = document.querySelector("#pages");
const pagesList = document.querySelector("#pages-list");
pages?.addEventListener("mouseover", () => {
  pagesList.classList.remove("pages-submenu-inactive");
});

pages?.addEventListener("mouseout", () => {
  pagesList.classList.add("pages-submenu-inactive");
});

// Sticky Header Based on Scroll
const main = document.querySelector("main");
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY >= 10) {
      header.classList.remove("relative");
      header.classList.add("fixed", "h-20");
      header.classList.remove("h-[100px]d", "md:h-[110px]");
      main.classList.add("pt-[100px]");
      nav?.classList.add("mt-4");
    } else {
      header.classList.add("relative");
      header.classList.remove("fixed", "h-20");
      header.classList.add("h-[100px]d", "md:h-[110px]");
      main.classList.remove("pt-[100px]");
      nav?.classList.remove("mt-4");
    }
  },
  { passive: true }
);

// Dropdown Menu Toggle
const menuIcon = document.querySelector(".menu-icon");
menuIcon?.addEventListener("click", () => {
  const path = menuIcon.childNodes[1];
  const currentPath = path?.getAttribute("d");
  const newPath =
    currentPath === "M4 6h36M4 12h8m-8 6h36"
      ? "M6 18L18 6M6 6l12 12"
      : "M4 6h36M4 12h8m-8 6h36";
  path?.setAttribute("d", newPath);

  nav.classList.toggle("active-menu");
  nav.classList.toggle("inactive-menu");

  if (nav.classList.contains("active-menu")) {
    nav.setAttribute("aria-label", "dropdown");
  } else {
    nav.removeAttribute("aria-label");
  }
});

// Close Dropdown Menu When Nav Link is Clicked
const dropdownNavLinks = document.querySelectorAll('.nav ul li a[href^="#"]');
dropdownNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");
    menuIcon.childNodes[1]?.setAttribute("d", "M4 6h16M4 12h8m-8 6h16");
  });
});

// Sub-item Toggle
const subItem = document.querySelector("#sub-item");
const subItemParent = subItem?.closest(".group");
subItemParent?.addEventListener("click", () => {
  const isVisible = subItem.classList.contains("opacity-100");

  if (isVisible) {
    subItem.classList.remove("opacity-100", "visible", "translate-y-0");
    subItem.classList.add("opacity-0", "invisible", "translate-y-2");
  } else {
    subItem.classList.add("opacity-100", "visible", "translate-y-0");
    subItem.classList.remove("opacity-0", "invisible", "translate-y-2");
  }
});
