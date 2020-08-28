window.onload = function (){
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = '<svg class="header-navbars-burger-close-svg"><use href="sprite.svg#icon-close"></use></svg>';
        } else {
            menu.classList.remove("active");
            this.innerHTML = '<svg class="header-navbars-burger-open-svg"><use href="sprite.svg#icon-menu"></use></svg>';
        }
    }
}