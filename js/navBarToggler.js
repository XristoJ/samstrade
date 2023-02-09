document.addEventListener("DOMContentLoaded", function(event) {
    
    // DECLARE VARIABLES
    let navbarToggler = document.querySelector(".navbarToggler");
    let clickable = true;
    let getScroll = true
    let time = 1000;
    let scrollPosY;

    // DECLARE FUNCTIONS
    // Function to make the navbar-toggler again clickable
    function makeClickable() {
        setTimeout(() => {
            clickable = true;
        }, time);
    }
    function getScrollYPos() {
        getScroll = false;
        scrollPosY = window.scrollY;
    }
    function setScrollYPos() {
        getScroll = true;
        window.scrollTo(0, scrollPosY);
    }

    // EVENT-LISTENERS
    navbarToggler.addEventListener("click", function() {
        if(clickable) {
            clickable = false;
            if(getScroll) {
                getScrollYPos();
            }
            let removeElementsOnToggledNavbar = document.querySelectorAll(".removeElementsOnToggledNavbar");
            let navLists = document.querySelectorAll(".nav-list");
            let navigation = document.querySelector(".navigation");

            navLists.forEach(navList => {
                if(navList.classList.contains("scaleIn")) { // when responsive navigation is opened
                    navList.classList.remove("scaleIn");
                    navList.classList.add("scaleOut");
                    setTimeout(() => {
                        // display: block; is still not animateabel, that's why we sue this setTimeout() function, to add this CSS-
                        // declaration after the animation is finished.
                        navList.classList.remove("display-block");
                    }, time);
                } else if(!navList.classList.contains("scaleIn")) { // when responsive navigation is closed
                    navList.classList.remove("scaleOut");
                    navList.classList.add("scaleIn", "display-block");
                }
            });
            removeElementsOnToggledNavbar.forEach(removeElement => {
                if(!removeElement.classList.contains("display-none")) { // when responsive navigation is opened
                    removeElement.classList.add("scaleOut");
                    removeElement.classList.remove("scaleIn");
                    setTimeout(() => {
                        removeElement.classList.add("display-none");
                    }, time);
                }
                else if(removeElement.classList.contains("display-none")) { // when responsive navigation is closed
                    removeElement.classList.remove("display-none", "scaleOut");
                    removeElement.classList.add("scaleIn");
                    setScrollYPos();
                }
            });
            makeClickable();
            if(navigation.classList.contains("position-absolute")) {
                navigation.classList.remove("position-absolute");
            } else if(!navigation.classList.contains("position-absolute")) {
                setTimeout(() => {
                    navigation.classList.add("position-absolute");
                    // The Tab-Menu on touch-devices (< 1200px) makes it difficult to read the open navigation, when Tab-Menu is opened, AMK!!!
                    scrollTo(0,0);
                }, time);
            }
        }
    });

});