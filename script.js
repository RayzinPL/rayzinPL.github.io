
const year = document.querySelector("#year");
const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#nav-links");
const detailsButtons = document.querySelectorAll(".details-button");
const skillTabs = document.querySelectorAll(".skill-tab[data-tab]");
const skillPanels = document.querySelectorAll(".skill-panel");

year.textContent = new Date().getFullYear();

// Menu para dispositivos móveis
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", open);
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = open ? "×" : "☰";
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.textContent = "☰";
  });
});

// Alternar Hard Skills e Soft Skills
skillTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;

    skillTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active);
    });

    skillPanels.forEach(panel => {
      panel.hidden = panel.id !== selected;
    });
  });
});

// Expandir detalhes dos projetos
detailsButtons.forEach(button => {
  button.addEventListener("click", () => {
    const details = document.getElementById(button.dataset.detailsTarget);
    const open = button.getAttribute("aria-expanded") === "true";

    details.hidden = open;
    button.setAttribute("aria-expanded", !open);
    button.textContent = open ? "Mais detalhes +" : "Menos detalhes −";
  });
});
