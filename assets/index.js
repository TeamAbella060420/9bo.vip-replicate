function handleResponsiveLayout() {
    var screenWidth = window.innerWidth;
    var imageContainer = document.querySelector(".image");
    var contentImage = document.querySelector(".content img");
    var contentContainer = document.querySelector(".content");

    if (imageContainer) {
        if (screenWidth <= 768) {
            imageContainer.classList.add("box-container");
            imageContainer.classList.remove("image");
        } else {
            imageContainer.classList.remove("box-container");
            imageContainer.classList.add("image");
        }
    }

    if (contentImage && contentContainer) {
        if (screenWidth <= 768) {
            contentContainer.style.display = "grid";
            contentContainer.style.gridTemplateColumns = "1fr";
            contentImage.style.width = "100%";
        } else {
            contentContainer.style.display = "block";
            contentContainer.style.gridTemplateColumns = "auto";
            contentImage.style.width = "100%";
        }
    }
}

// Call the function on page load
handleResponsiveLayout();

// Call the function whenever the screen is resized
window.addEventListener("resize", handleResponsiveLayout);

// Check the screen size on page load and revert layout changes if necessary
window.addEventListener("DOMContentLoaded", function() {
    var screenWidth = window.innerWidth;
    var desktopBreakpoint = 768; // Set your desktop breakpoint here

    if (screenWidth > desktopBreakpoint) {
        // Revert the layout changes to normal
        var imageContainer = document.querySelector(".image");
        var contentContainer = document.querySelector(".content");

        if (imageContainer) {
            imageContainer.classList.remove("box-container");
            imageContainer.classList.add("image");
        }

        if (contentContainer) {
            contentContainer.style.display = "block";
            contentContainer.style.gridTemplateColumns = "auto";
        }
    }
});