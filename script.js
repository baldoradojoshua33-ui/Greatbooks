
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});


navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


document.querySelectorAll(".analysis-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    content.hidden = isExpanded;
    button.querySelector(".toggle-icon").textContent = isExpanded ? "+" : "−";
  });
});


const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navigation a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-25% 0px -65% 0px" });

sections.forEach(section => observer.observe(section));
