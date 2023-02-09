document.addEventListener("DOMContentLoaded", function(event){

    let changeBG = document.querySelector(".fullScreenImage"); // get parent-element of the fullscreen element, because of rotated Logo on unternehmen.html
    let introContent = document.querySelector(".introContent"); // element with the bouncing arrow    

    function overlayDarkFilter() {
        if(window.scrollY > 30) {
            changeBG.classList.add("addFilter");
            introContent.classList.add("scale-0");
        } else {
            changeBG.classList.remove("addFilter");
            introContent.classList.remove("scale-0");
        }
    }

    window.addEventListener("scroll", overlayDarkFilter);
});