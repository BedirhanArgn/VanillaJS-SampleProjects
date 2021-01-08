window.onscroll = function() {
    var left = document.querySelector(".l-header");

    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 60) {
        left.classList.add("is-sticky");
    }
    if (document.documentElement.scrollTop === 0) {
        left.classList.remove("is-sticky");
    }
}

let el = document.querySelector('.hamburger-box');

el.addEventListener("click", function() {
    let navEl = document.querySelector('.navigation-container');

    let hamburger = document.querySelector('.hamburger');
    if (hamburger.classList.contains("is-active")) {
        hamburger.classList.remove("is-active")
        navEl.classList.remove("is-actives");
    } else {
        hamburger.classList.add("is-active");
        navEl.classList.add("is-actives");
    }

})