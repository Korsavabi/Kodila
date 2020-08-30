(() => {
    const menuBtnRef = document.querySelector("[data-logo-button]");
    const mobileLogoRef = document.querySelector("[data-logo]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileLogoRef.classList.toggle("is-open");
    });
  })();