function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            nav = document.querySelector("nav");
        if (distanceY > shrinkOn) {
            nav.classList.add("small");
        } else {
            nav.classList.remove("small");
        }
    });
}
window.onload = init();