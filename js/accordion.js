document.addEventListener("DOMContentLoaded", () => {
  
  // সব accordion ধরো
  const accordions = document.querySelectorAll("#accordion, #accordion-2");
  if (!accordions.length) return;

  accordions.forEach(accordion => {
    const single = accordion.dataset.accordion === "single";
    const items = accordion.querySelectorAll(".ac__items");

    //  Function to close all items in this accordion
    const closeAll = () => {
      items.forEach(item => {
        const btn = item.querySelector("button[aria-controls]");
        const panel = document.getElementById(btn?.getAttribute("aria-controls"));
        const text = btn?.querySelector("p");
        const icon = btn?.querySelector(".ac__close__icon,.ac__close__icon__2");

        btn?.setAttribute("aria-expanded", "false");
        if (panel) panel.style.gridTemplateRows = "0fr";

        item.classList.remove("active");
        text?.classList.remove("ac");
        icon?.classList.remove("ac");
      });
    };

    //  Function to open specific item
    const openItem = (item) => {
      const btn = item.querySelector("button[aria-controls]");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const text = btn.querySelector("p");
      const icon = btn.querySelector(".ac__close__icon,.ac__close__icon__2");

      btn.setAttribute("aria-expanded", "true");
      panel.style.gridTemplateRows = "1fr";

      item.classList.add("active");
      text?.classList.add("ac");
      icon?.classList.add("ac");
    };

    //  Default: প্রথম item open
    if (items.length) {
      openItem(items[0]);
    }

    //  Click event (Event Delegation)
    accordion.addEventListener("click", (e) => {
      const btn = e.target.closest("button[aria-controls]");
      if (!btn) return;

      const item = btn.closest(".ac__items");
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      if (single) {
        closeAll();
      }

      if (!isOpen) {
        openItem(item);
      } else if (single) {
        closeAll();
      } else {
        // Toggle only this item if multi-open allowed
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        const text = btn.querySelector("p");
        const icon = btn.querySelector(".ac__close__icon,.ac__close__icon__2");

        btn.setAttribute("aria-expanded", "false");
        panel.style.gridTemplateRows = "0fr";
        item.classList.remove("active");
        text?.classList.remove("ac");
        icon?.classList.remove("ac");
      }
    });
  });
});