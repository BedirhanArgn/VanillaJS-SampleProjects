window.onscroll = function()
{
    var left = document.querySelector(".l-header");

     console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 60) {
        left.classList.add("is-sticky");
    } 
    if (document.documentElement.scrollTop === 0) {
        left.classList.remove("is-sticky");
    } 
}