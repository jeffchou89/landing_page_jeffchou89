// Global Variables
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");

// Build the nav-----------------------------------------------------
function buildNavbar(sections) {
    for(let section of sections) {
        let sectionID = section.getAttribute("id");
        let navLinkName = section.getAttribute("data-nav");

        const htmlLink = `<li><a href="#${sectionID}" class="menu__link">${navLinkName}</a></li>`;
        navbarList.insertAdjacentHTML("beforeend", htmlLink);
    };
}

// Smooth scroll to anchor ID
function smoothScrollTo(anchorID) {
    document.querySelector(anchorID).scrollIntoView({
        behavior: "smooth"
    });
}

function inViewport(section) {
    const sectionOffset = Math.floor(section.getBoundingClientRect().top);
    console.log("Line 25: " + sectionOffset);
    if (sectionOffset < 150 && sectionOffset >= -150) {
        console.log("Line 27");
        return true;
    } else {
        return false;
    };
}

function clearActive(section) {
    console.log("clearActive running");
    section.classList.remove("menu__link__active");
}

function isActive(isTrue, section) {
    console.log(section);
    if (isTrue) {
        console.log("isActive running");
        section.classList.add("menu__link__active");
    };
}

// Find location of current section
function activeSection() {
    for (let i = 0; i < sections.length; i++) {
        clearActive(sections[i]);
        isActive(inViewport(sections[i]), sections[i]);
    };
}

// MAIN EVENTS
// Build menu 
document.addEventListener("DOMContentLoaded", function() {
    buildNavbar(sections);
    window.addEventListener("scroll", activeSection);

    // Scroll to section on link click
    navbarList.addEventListener("click", function(e) {
        if (e.target.nodeName === "A") {
            //prevent default action
            e.preventDefault();
            // get clicked link
            const sectionToView = e.target.getAttribute("href");
            smoothScrollTo(sectionToView);
        };
    });
});