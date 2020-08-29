window.onload = function (){
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = '<svg x="50" y="100" class="openMenu-svg-close"><use href="./images/svg/sprite.svg#icon-close"></use></svg>';
        } else {
            menu.classList.remove("active");
            this.innerHTML = '<svg x="50" y="100" class="openMenu-svg"><use href="./images/svg/sprite.svg#icon-menu"></use></svg>';
        }
    }
}