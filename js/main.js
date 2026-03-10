
/* PAGE LOADER */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, 300);
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const triggers = document.querySelectorAll(".gallery-trigger");
const sections = document.querySelectorAll(".gallery-section");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const closeBtn = document.querySelector(".close");

let currentImages = [];
let currentIndex = 0;

/* hide all galleries first */
sections.forEach(section => section.classList.remove("active"));

/* service card click with toggle open/close */
triggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const target = trigger.getAttribute("data-target");
    const targetSection = document.getElementById(target);
    const isAlreadyActive = trigger.classList.contains("active");

    /* reset everything */
    triggers.forEach(t => t.classList.remove("active"));
    sections.forEach(section => section.classList.remove("active"));

    /* if clicked card was not already open, open it */
    if (!isAlreadyActive && targetSection) {
      trigger.classList.add("active");
      targetSection.classList.add("active");

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

function openLightbox(images, index) {
  currentImages = Array.from(images);
  currentIndex = index;
  lightboxImg.src = currentImages[currentIndex].src;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

function showNext() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

function showPrev() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

sections.forEach(section => {
  const images = section.querySelectorAll(".gallery-img");
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(images, index);
    });
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", closeLightbox);
}

if (nextBtn) {
  nextBtn.addEventListener("click", showNext);
}

if (prevBtn) {
  prevBtn.addEventListener("click", showPrev);
}

if (lightbox) {
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", e => {
  if (!lightbox || !lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

/* lightbox */
function openLightbox(images, index) {
  currentImages = Array.from(images);
  currentIndex = index;
  lightboxImg.src = currentImages[currentIndex].src;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

function showNext() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

function showPrev() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

sections.forEach(section => {
  const images = section.querySelectorAll(".gallery-img");
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(images, index);
    });
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", closeLightbox);
}

if (nextBtn) {
  nextBtn.addEventListener("click", showNext);
}

if (prevBtn) {
  prevBtn.addEventListener("click", showPrev);
}

if (lightbox) {
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", e => {
  if (!lightbox || !lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

