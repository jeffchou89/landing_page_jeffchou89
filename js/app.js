/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

// Global Variables
const sections = document.getElementsByTagName("section");
const navbarList = document.querySelector("#navbar__list");
console.log(navbarList);

// build the nav-----------------------------------------------------
function buildNavbar(sections) {
    console.log("line 15");
    console.log(sections);
    for(let section of sections) {
        let sectionID = section.getAttribute("id");
        console.log("sectionID: " + sectionID);

        let navLinkName = section.getAttribute("data-nav");
        console.log("navLinkName: " + navLinkName);

        const htmlLink = `<li><a href="#${sectionID}" class="menu__link">${navLinkName}</a></li>`;
        navbarList.insertAdjacentHTML("beforeend", htmlLink);
    }
}

// Add class 'active' to section when near top of viewport


// Smooth scroll to anchor ID
function smoothScrollTo(anchorID) {
    document.querySelector(anchorID).scrollIntoView({
        behavior: "smooth"
    });
}

// MAIN EVENTS
// Build menu 
document.addEventListener("DOMContentLoaded", function() {
    buildNavbar(sections);

    // Scroll to section on link click
    navbarList.addEventListener("click", function(e) {
        if (e.target.nodeName === "A") {
            //prevent default action
            e.preventDefault();
            // get clicked link
            const sectionToView = e.target.getAttribute("href");
            console.log(sectionToView);

            smoothScrollTo(sectionToView);
        }
    }) ;
    // Set sections as active
    
});