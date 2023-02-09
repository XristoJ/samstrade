document.addEventListener("DOMContentLoaded", function(){
    scrollTo(0, 0);

    // CODE FOR THE SLIDER
    const SLIDE_TIME = 750;
    const ALL_SLIDES = document.querySelectorAll(".slide");
    const DOTS = document.querySelectorAll("[data-single-dot]");
    const SLIDE_CAPTIONS = document.querySelectorAll(".slide .introContent")
    
    let sliderInterval; // this handles the interval when the slider is 
    let clickable = true; // this boolean helps us to make the next-and prev-button clickable after the slide-transition ended
    let activeSlide = null;  // this variable is assigned to the current active slide
    let newActiveSlide = null;   // this variable is assigned to the new upcoming active slide
    let activeDot = null;   // this variable is assigned to the current active dot
    let newActiveDot = null;     // this variable is assigned to the new upcoming active dot

    // This function initializes the transition- and animation duration of each slide, as well as playing the video of the active slide.
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
            dot.setAttribute("style", `transition-duration: ${SLIDE_TIME}ms`);
            if(dot.classList.contains("active")) {
                dot.classList.add("unclickable")
            }
        });
    }
    function initSlideCaption() {
        SLIDE_CAPTIONS.forEach((caption) => {
            caption.setAttribute("style", `transition-duration: ${SLIDE_TIME}ms`);
        });
    }
    function changeSlide(index){
        if(clickable) {
            clickable = false;
            activeDot = document.querySelector("[data-single-dot].active"); // grab the active dot
            activeSlide = document.querySelector(".slide.active"); // grab the active slide
            // if statement is true when the slider is triggered by setInterval
            if(index === undefined) {
                // Get the index of the current active slide (and active dot)
                let activeIndex;
                for(let i = 0; i < ALL_SLIDES.length; i++) {
                    if(ALL_SLIDES[i].classList.contains("active")) {
                        activeIndex = i;
                        break;
                    }
                }
                // The Modulos operation jumps always to the next slide and allows us to stay within the boundaries of the array/slides
                newActiveSlide = ALL_SLIDES[(activeIndex + 1) % ALL_SLIDES.length];
                newActiveDot = DOTS[(activeIndex + 1) % DOTS.length];
            } else { // else when the slide is changed by clicking a dot
                clearInterval(sliderInterval);
                sliderInterval = setInterval(() => {
                    changeSlide();
                }, 4000);
                newActiveSlide = ALL_SLIDES[index];
                newActiveDot = DOTS[index];
            }
            
            activeSlide.classList.add("slideOutLeft");
            newActiveSlide.classList.add("slideInRight", "active");
            let video = newActiveSlide.querySelector("video");
            video.currentTime = 0;
            // Check if attribute "not-playable" is equal to false, which is only the case, when the page is not scrolled
            if(video.getAttribute("not-playable") === "false") {
                video.play();  
            }
            activeDot.classList.remove("active", "unclickable");
            newActiveDot.classList.add("active", "unclickable");
        }
    }
    // Event Listeners for each slide whenever the "transitionend"-Event occurs
    ALL_SLIDES.forEach(slide => {
        slide.addEventListener("transitionend", () => {
            if(slide === activeSlide && !clickable) {
                activeSlide.className = "slide";
                clickable = true;
            }
        });
    });
    // Add Event-Listener to each Dot. The 2nd parameter in the callback-function represents the index of the Nodelist-Element
    DOTS.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            if(clickable) {
                changeSlide(idx);
            }
        });
    });
    // invoke the initSlider(), initDots() und initSlideCaption() functions
    initSlider();
    initDots();
    initSlideCaption();

    sliderInterval = setInterval(() => {
        changeSlide();
    }, 4000);

    
    // INTERSECTION OBSERVER FOR THE TITLE TO VANISH, THE NAV AND FULLSCREEN-VIDEOS
    let nav = document.querySelector("nav");
    let allowBlurOnNav = false;
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
                    SLIDE_CAPTIONS.forEach(caption => {
                        caption.classList.add("vanish");
                    });
                    fullScreenImage.classList.add("add__filter");
                    ALL_SLIDES.forEach((slide) => {
                        let video = slide.querySelector("video");
                        video.setAttribute("not-playable", true);
                        video.pause();
                    });
                    allowBlurOnNav = true;
                } else {
                    SLIDE_CAPTIONS.forEach(caption => {
                        caption.classList.remove("vanish");
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
    navbarToggler.addEventListener("click", (e) => {
        toggleNavigationOnSmallDevices();
    });
    let navItems = document.querySelectorAll(".navigation > .nav__item");
    navItems.forEach((elem) => {
        elem.addEventListener("click", function (e) {
            closeNavigationOnSmallDevices();
        });
    });
    function toggleNavigationOnSmallDevices() {
        if(navigation.classList.contains("open")) {
            closeNavigationOnSmallDevices();
            window.scrollTo(0, scrollPosY);
        } else {
            openNavigationOnSmallDevices();
        }
    }
    function closeNavigationOnSmallDevices() {
        navigation.classList.remove("open");
        header.classList.remove("add__filter__on__open__nav");
        mainMenu.classList.remove("close__on__open__navigation");
        footer.classList.remove("close__on__open__navigation");
        toggleElementsOnOpenNav.forEach(element => {
            element.classList.remove("vanish");
        });
        SLIDE_CAPTIONS.forEach(caption => {
            caption.classList.remove("d__none__on__open__navigation");
        });
        console.log("Navigation CLOSED");
    }
    function openNavigationOnSmallDevices() {
        scrollPosY = scrollY;
        navigation.classList.add("open");
        header.classList.add("add__filter__on__open__nav");
        mainMenu.classList.add("close__on__open__navigation");
        footer.classList.add("close__on__open__navigation");
        toggleElementsOnOpenNav.forEach(element => {
            element.classList.add("vanish");
        });
        SLIDE_CAPTIONS.forEach(caption => {
            caption.classList.add("d__none__on__open__navigation");
        });
    }

    // CODE FOR VANISHING THE NAVIGATION WHEN SCROLLING DOWN AND SHOWING IT, WHEN SCROLLING UP
    let scrollDownListener = true; // Controller variable to allow vanishing navigation
    let scrollUpListener = true; // Controller variable to allow displaying navigation
    let scrollDown = false;
    let lastScroll = 0;

    function show_Hide_Navigation(bool) {
        if(bool) {
            nav.classList.add("vanish");
            nav.classList.remove("add__blur");
            scrollDownListener = false;
            scrollUpListener = true;
        } else {
            nav.classList.remove("vanish");
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


    // CODE FOR THE MODAL POP-UP
    let modalButtons = document.querySelectorAll("[data-open-modal]");
    modalButtons.forEach((modalBtn) => {
        modalBtn.addEventListener("click", () => {
            let modalTarget = modalBtn.getAttribute("href");
            let modal = document.querySelector(modalTarget);
            scrollPosY = scrollY;
            modal.classList.add("show");
            mainMenu.classList.add("close");
            footer.classList.add("close");
            toggleElementsOnOpenNav.forEach(element => {
                element.classList.add("vanish");
            });
            SLIDE_CAPTIONS.forEach(caption => {
                caption.classList.add("close");
            });
        });
    });
    let closeModalButtons = document.querySelectorAll("[data-close-modal]");
    closeModalButtons.forEach((modalCloseBtn) => {
        modalCloseBtn.addEventListener("click", () => {
            let modal = modalCloseBtn.closest(".modal-container");
            modal.classList.remove("show");
            mainMenu.classList.remove("close");
            footer.classList.remove("close");
            toggleElementsOnOpenNav.forEach(element => {
                element.classList.remove("vanish");
            });
            SLIDE_CAPTIONS.forEach(caption => {
                caption.classList.remove("close");
            });
            setTimeout(() => {
                window.scrollTo(0, scrollPosY);
            }, 0)
        });
    });


    // CODE FOR SCROLLING TO A CERTAIN SECTION WHEN CLICKING ON THE NAVIGATION-ELEMENTS
    let scrollElements = document.querySelectorAll("[data-scroll-to-section]");
    scrollElements.forEach((elem) => {
        elem.addEventListener("click", function(e) {
            e.preventDefault();
            setTimeout(() => {
                let section = document.querySelector(elem.getAttribute("data-scroll-to-section"));
                let scrollPosition = (section.getBoundingClientRect().top + document.documentElement.scrollTop - document.querySelector("nav").getBoundingClientRect().height)
                console.log(scrollPosition)
                scrollTo(0, scrollPosition);
            }, 0);
        });
    })
    
});