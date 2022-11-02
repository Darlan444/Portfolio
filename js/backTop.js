const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 250) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

function scrolltop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
