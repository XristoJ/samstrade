document.addEventListener("DOMContentLoaded", function(){
    scrollTo(0, 0);

    // CODE FOR THE SLIDER
    const SLIDE_TIME = 750;
    const ALL_SLIDES = document.querySelectorAll(".slide");
    const DOTS = this.documentElement.querySelectorAll("[data-single-dot]");
    let sliderInterval;

    let clickable = true; // this boolean helps us to make the next-and prev-button clickable after the slide-transition ended
    let activeSlide = null;  // this variable is assigned to the current active slide
    let newActiveSlide = null;   // this variable is assigned to the new upcoming active slide

    let activeDot = null;
    let newActiveDot = null;

    // This function initializes the transition- and animation duration of each slide 
    function initSlider() {
        ALL_SLIDES.forEach(slide => {
            slide.setAttribute(
                "style", 
                    `transition: opacity ${SLIDE_TIME}ms ease;
                    animation-duration: ${SLIDE_TIME}ms`
            );
            let video = slide.querySelector("video");
            if(slide.classList.contains("active")) {
                video.play();
            } else {
                video.pause();
            }
            video.setAttribute("not-playable", false);
        });
    }

    function initDots() {
        DOTS.forEach((dot) => {
            dot.setAttribute("style", `animation-duration: ${SLIDE_TIME}ms`);
        });
    }

    function changeSlide(){
        if(clickable) {
            clickable = false;
            activeSlide = document.querySelector(".slide.active"); // grab the active slide
            //const ACTIVE_SLIDE_INDEX = ALL_SLIDES.forEach(slide => {console.log(slide)}) // get the index of the active array-element
            let activeIndex;
            for(let i = 0; i < ALL_SLIDES.length; i++) {
                if(ALL_SLIDES[i].classList.contains("active")) {
                    activeIndex = i;
                    break;
                }
            }
            // The Modulos operation jumps always to the next slide and allows us to stay within the boundaries of the array/slides
            newActiveSlide = ALL_SLIDES[(activeIndex + 1) % ALL_SLIDES.length];
            activeSlide.classList.add("slideOutLeft");
            newActiveSlide.classList.add("slideInRight", "active");
            let video = newActiveSlide.querySelector("video");
            video.currentTime = 0;
            // Check if attribute "not-playable" is equal to false, which is only the case, when the page is not scrolled
            if(video.getAttribute("not-playable") === "false") {
                video.play();  
            }

            activeDot = document.querySelector("[data-single-dot].active");
            newActiveDot = DOTS[(activeIndex + 1) % DOTS.length];
            activeDot.classList.remove("active");
            newActiveDot.classList.add("active")
        }
    }

    function jumpToSlide(index) {
        if(clickable) {
            clearInterval(sliderInterval);
            sliderInterval = setInterval(() => {
                changeSlide();
            }, 4000);
            clickable = false;
            activeSlide = document.querySelector(".slide.active");
            activeDot = document.querySelector("[data-single-dot].active");
            
            newActiveSlide = ALL_SLIDES[index];
            activeSlide.classList.add("slideOutLeft");
            newActiveSlide.classList.add("slideInRight", "active");

            newActiveDot = DOTS[index];
            activeDot.classList.remove("active");
            newActiveDot.classList.add("active");

        }
    }

    // Event Listeners for each slide whenever the "transitionend"-Event occurs
    ALL_SLIDES.forEach(slide => {
        slide.addEventListener("transitionend", () => {
            if(slide === activeSlide && !clickable) {
                clickable = true;
                activeSlide.className = "slide";
                //setTimeout(() => {
                //    changeSlide();
                //}, 4000);
            }
        });
    });
    // Add Event-Listener to each Dot. The 2nd parameter in the callback-function rpresents the index of the Nodelist-Element
    DOTS.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            jumpToSlide(idx);
       });
    });

    // invoke the initSlider() function
    initSlider();
    initDots();

    sliderInterval = setInterval(() => {
        changeSlide();
    }, 4000);

    
    // INTERSECTION OBSERVER FOR THE TITLE TO VANISH, THE NAV AND FULLSCREEN-VIDEOS
    let nav = document.querySelector("nav");
    let allowBlurOnNav = false;
    let titles = document.querySelectorAll("h1");
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
                    titles.forEach(title => {
                        title.classList.add("vanish");
                    });
                    fullScreenImage.classList.add("add__filter");
                    ALL_SLIDES.forEach((slide) => {
                        let video = slide.querySelector("video");
                        video.setAttribute("not-playable", true);
                        video.pause();
                    });
                    allowBlurOnNav = true;
                } else {
                    titles.forEach(title => {
                        title.classList.remove("vanish");
                    });
                    fullScreenImage.classList.remove("add__filter");
                    ALL_SLIDES.forEach((slide) => {
                        let video = slide.querySelector("video");
                        video.setAttribute("not-playable", false);
                        video.play();
                    });
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
    let footer = document.querySelector("footer");
    let header = document.querySelector("header");
    navbarToggler.addEventListener("click", () => {
        document.querySelectorAll(".navigation > .nav__item").forEach((elem) => {
            elem.addEventListener("click", () => {
                navbarToggler.click();
            })
        });
        if(navigation.classList.contains("open")) {
            navigation.classList.remove("open");
            header.classList.remove("add__filter__on__open__nav");
            mainMenu.classList.remove("close");
            footer.classList.remove("close");
            toggleElementsOnOpenNav.forEach(element => {
                element.classList.remove("vanish");
            });
            window.scrollTo(0, scrollPosY);
        } else {
            scrollPosY = scrollY;
            console.log(scrollPosY);
            navigation.classList.add("open");
            header.classList.add("add__filter__on__open__nav");
            mainMenu.classList.add("close");
            footer.classList.add("close");
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