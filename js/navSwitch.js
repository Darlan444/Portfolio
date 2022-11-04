let navSwitch = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset = 0) {
        navSwitch.style.backgroundColor = "red";
    }
})