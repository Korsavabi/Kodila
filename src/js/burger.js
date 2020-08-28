window.onload = function (){
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = '<svg class="button-burger-close-svg"><use href="images/img-project/svg/sprite.svg#icon-menu"></use></svg>';
        } else {
            menu.classList.remove("active");
            this.innerHTML = '<svg class="button-burger-open-svg"><use href="images/img-project/svg/sprite.svg#icon-close"></use></svg>';
        }
    }
}