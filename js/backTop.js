const toTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 250) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})


$(".scroll-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });