document.addEventListener("DOMContentLoaded", function(){

    // CODE FOR THE SLIDER
    const SLIDE_TIME = 750;
    const ALL_SLIDES = [...document.querySelectorAll(".slide")];

    let clickable = true; // this boolean helps us to make the next-and prev-button clickable after the slide-transition ended
    let active = null;  // this variable is assigned to the current active slide
    let newActive = null;   // this variable is assigned to the new upcoming active slide

    // This function initializes the transition- and animation duration of each slide 
    function initSlider() {
        ALL_SLIDES.forEach(slide => {
            slide.setAttribute(
                "style", 
                    `transition: opacity ${SLIDE_TIME}ms ease;
                    animation-duration: ${SLIDE_TIME}ms`
            );
            slide.querySelector("video").pause();
        });
    }

    function changeSlide(){
        if(clickable) {
            clickable = false;
            active = document.querySelector(".slide.active"); // grab the active slide
            const ACTIVE_SLIDE_INDEX = ALL_SLIDES.indexOf(active) // get the index of the active array-element
            // The Modulos operation jumps always to the next slide and allows us to stay within the boundaries of the array/slides
            newActive = ALL_SLIDES[(ACTIVE_SLIDE_INDEX + 1) % ALL_SLIDES.length];
            active.classList.add("slideOutLeft");
            active.querySelector("video").pause();
            newActive.classList.add("slideInRight", "active");
            //newActive.querySelector("video").play();
            
        }
    }

    // Event Listeners for each slide whenever the "transitionend"-Event occurs
    ALL_SLIDES.forEach(slide => {
        slide.addEventListener("transitionend", () => {
            if(slide === active && !clickable) {
                newActive.querySelector("video").play();
                clickable = true;
                active.className = "slide";
                setTimeout(() => {
                    changeSlide();
                }, 3250);
            }
        });
    });

    // invoke the initSlider() function
    initSlider();

    setTimeout(() => {
        changeSlide();
    }, 3250);

    
    // INTERSECTION OBSERVER FOR THE TITLE AND FULLSCREEN-VIDEOS
    let nav = document.querySelector("nav");
    let allowBlurOnNav = false;
    let title = document.querySelector("h1");
    let titleBottom = title.getBoundingClientRect().bottom;
    let mainMenu = document.querySelector("main"); // The main tag is gonna be observed
    let fullScreenImage = document.querySelector("[data-toggle-filter]");

    const mainMenuOptions = {
        root: null,     // the viewport is the area where the elements are intersecting/not-intersecting
        threshold: 0,   // range from 0 to 1, meaning either the whole element has to be in the viewport or just a peacr of it
        rootMargin: "0px 0px -1px 0px"
    };

    const mainMenuObserver = new IntersectionObserver(
        function(entries, mainMenuObserver) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    title.classList.add("vanish");
                    fullScreenImage.classList.add("add__filter");
                    allowBlurOnNav = true;
                } else {
                    title.classList.remove("vanish");
                    fullScreenImage.classList.remove("add__filter");
                    nav.classList.remove("add__blur")
                    allowBlurOnNav = false;
                }
            });
        }, mainMenuOptions
    );

    mainMenuObserver.observe(mainMenu);

    // CODE FOR OPEN NAVIGATION ON SMALL DEVICES
    let navbarToggler = document.querySelector("[data-toggle-navbar]");
    let navigation = document.querySelector(".navigation");
    let toggleElementsOnOpenNav = document.querySelectorAll("[data-toggle-Elem-on-open-Nav]");
    let scrollPosY;
    navbarToggler.addEventListener("click", () => {
        document.querySelectorAll(".navigation > .nav__item").forEach((elem) => {
            elem.addEventListener("click", () => {
                navbarToggler.click();
            })
        });
        if(navigation.classList.contains("open")) {
            navigation.classList.remove("open");
            mainMenu.classList.remove("close");
            toggleElementsOnOpenNav.forEach(element => {
                element.classList.remove("vanish");
            });
            window.scrollTo(0, scrollPosY);
        } else {
            scrollPosY = scrollY;
            console.log(scrollPosY);
            navigation.classList.add("open");
            mainMenu.classList.add("close");
            toggleElementsOnOpenNav.forEach(element => {
                element.classList.add("vanish");
            });
        }
        //navigation.classList.toggle("open");
        //mainMenu.classList.toggle("close");
    });

    // CODE FOR VANISHING THE NAVIGATION WHEN SCROLLING DOWN AND SHOWING IT, WHEN SCROLLING UP
    let navElements = document.querySelectorAll("nav > *");
    let scrollDownListener = true; // Controller variable to allow vanishing navigation
    let scrollUpListener = true; // Controller variable to allow displaying navigation
    let scrollDown = false;
    let lastScroll = 0;

    function show_Hide_Navigation(bool) {
        if(bool) {
            navElements.forEach((navElement) => {
                navElement.classList.add("vanish");
            });
            nav.classList.remove("add__blur");
            scrollDownListener = false;
            scrollUpListener = true;
        } else {
            navElements.forEach(navElement => {
                navElement.classList.remove("vanish");
            });
            if(allowBlurOnNav) {
                nav.classList.add("add__blur");
            }
            
            scrollUpListener = false;
            scrollDownListener = true;
        }
    }

    function checkScrollDirection() {
        // The code-Section Below is from https://stackoverflow.com/questions/31223341/detecting-scroll-direction
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // get current scroll value
        if(currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            return true;
        } else {
            lastScroll = currentScroll;
            return false;
        }
    }

    window.addEventListener("scroll", () => {
        scrollDown = checkScrollDirection();
        if(scrollDown && scrollDownListener) {
            show_Hide_Navigation(scrollDown);
        } else if(!scrollDown && scrollUpListener) {
            show_Hide_Navigation(scrollDown);
        }
    });
    
});