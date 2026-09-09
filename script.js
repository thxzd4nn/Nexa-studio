const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const counters = document.querySelectorAll("[data-target]");

counters.forEach(counter => {
  const target = Number(counter.dataset.target);
  let current = 0;

  const update = () => {
    const increment = Math.max(1, Math.ceil(target / 60));

    current += increment;

    if (current >= target) {
      counter.textContent = target + (target === 100 ? "%" : "+");
      return;
    }

    counter.textContent = current;
    requestAnimationFrame(update);
  };

  update();
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const button = e.target.querySelector("button");

  button.textContent = "Mensaje enviado ✓";

  setTimeout(() => {
    button.textContent = "Enviar mensaje";
    e.target.reset();
  }, 2500);
});