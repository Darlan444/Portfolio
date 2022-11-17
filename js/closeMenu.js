function closeMenu() {
    let el = document.getElementById('menuClass');
    el.classList.remove('active');

    let icon = document.getElementById('icon-menu')
    icon.style.visibility="visible";
}