// CONTACT PANEL TOGGLE
const contactToggle = document.getElementById("contactToggle");
const contactPanel = document.getElementById("contactPanel");

if (contactToggle && contactPanel) {
  contactToggle.addEventListener("click", () => {
    const isOpen = contactPanel.style.maxHeight;
    if (isOpen) {
      contactPanel.style.maxHeight = null;
      contactToggle.textContent = "Open Contact Form";
    } else {
      contactPanel.style.maxHeight = contactPanel.scrollHeight + "px";
      contactToggle.textContent = "Close Contact Form";
    }
  });
}

// SKILL CHIP TOGGLE
document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("active");
  });
});

// POWER BI PROJECT FILTERS
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // update button state
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // filter projects
    projectCards.forEach((card) => {
      const tags = card.getAttribute("data-tags") || "";
      const matches =
        filter === "all" || tags.toLowerCase().includes(filter.toLowerCase());

      if (matches) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
