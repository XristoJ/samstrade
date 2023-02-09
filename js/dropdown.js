document.addEventListener("DOMContentLoaded", function() {
    // DECLARE VARIABLES
    let dropdownButtons = document.querySelectorAll(".dropdownButton");
    let dropdownMenus = document.querySelectorAll(".dropdownMenu");

    // DECLARE FUNCTIONS
    function addClassOpen(dropdownMenu) {
        dropdownMenu.classList.add("open");
        dropdownMenu.classList.add("opacityIn");
    }
    function removeClassOpen(dropdownMenu) {
        dropdownMenu.classList.remove("open");
    }
    function closeAllDropDowns() {
        dropdownMenus.forEach(dropdownMenu => {
            removeClassOpen(dropdownMenu);
        });
    }

    // ADD EVENT-LISTENERS
    // THis will open/close the dropdonwMenu on click. It works for touch- and mouse-devices
    dropdownButtons.forEach(function(dropdownButton) {
        dropdownButton.addEventListener("click", function() {
            if(dropdownButton.nextElementSibling !== null) { // the toogle() method is perfect, when the event is singular (e.g. click-event)
                if(dropdownButton.nextElementSibling.classList.contains("open")) {
                    removeClassOpen(dropdownButton.nextElementSibling);
                } else if(!dropdownButton.nextElementSibling.classList.contains("open")) {
                    closeAllDropDowns();
                    addClassOpen(dropdownButton.nextElementSibling);
                }
                //dropdownButton.nextElementSibling.classList.toggle("open");
            }
        });
    });
    // For none-touch-devices
    if(!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)) {
        // This will open/close the dropdonwMenu on hover
        dropdownButtons.forEach(function(dropdownButton) {
            dropdownButton.addEventListener("mouseenter", function() {
                if(dropdownButton.nextElementSibling !== null) { // not all dropdonwButtons have as nextElementSibling a dropdownMenu ;)
                    addClassOpen(dropdownButton.nextElementSibling);
                }
            });
            dropdownButton.addEventListener("mouseleave", function() {
                if(dropdownButton.nextElementSibling !== null) { // not all dropdonwButtons have as nextElementSibling a dropdownMenu ;)
                    removeClassOpen(dropdownButton.nextElementSibling);
                }
            });
        });
        // This will keep the dropdownmenu  open, when the mouse is over it
        dropdownMenus.forEach(function(dropdownMenu) {
            dropdownMenu.addEventListener("mouseenter", function() {
                addClassOpen(dropdownMenu);
            });
            dropdownMenu.addEventListener("mouseleave", function() {
                removeClassOpen(dropdownMenu);
            });
        });
    }
});