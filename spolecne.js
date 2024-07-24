const menuButton = document.querySelector("#menu-tlacitko");
const menuItems = document.querySelector("#menu-polozky");
const menuIconOpen = '<i class="fas fa-bars"></i>';
const menuIconClose = '<i class="fas fa-xmark"></i>';

const toggleMenu = () => {
    menuItems.classList.toggle("show");
};

const updateButtonIcon = () => {
    if (menuItems.classList.contains("show")) {
        menuButton.innerHTML = menuIconClose;
    } else {
        menuButton.innerHTML = menuIconOpen;
    }
};

menuButton.addEventListener('click', () => {
    toggleMenu();
    updateButtonIcon();
});

