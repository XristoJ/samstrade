document.addEventListener("DOMContentLoaded", function(event){

    let navigation = document.querySelector(".navigation");
    let navigationElements = document.querySelectorAll(".navigation > *");
    let scrollDown = false;
    let lastScroll = 0;
    let screenWidthControler = false;

    function checkScrollDirection() {
        // The code-Section Below is from https://stackoverflow.com/questions/31223341/detecting-scroll-direction
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // get current scroll value
        if(currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            scrollDown = true;
        } else {
            lastScroll = currentScroll;
            scrollDown = false;
        }
        show_Hide_Navigation();
    }

    function show_Hide_Navigation() {
        if(screenWidthControler) {
            if(scrollDown) {
                navigationElements.forEach(navigationElement => {
                    navigationElement.classList.add("scale-0");
                });
            } else {
                navigationElements.forEach(navigationElement => {
                    navigationElement.classList.remove("scale-0");
                });
            }
        }
    }

    function checkScreenWith() {
        if(window.innerWidth > 1200) {
            screenWidthControler = true;
        } else {
            screenWidthControler =  false;
        }

    }

    window.addEventListener("load", checkScreenWith);
    window.addEventListener("resize", checkScreenWith);
    window.addEventListener("scroll", checkScrollDirection);

});