/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

// Global Variables
const sections = document.getElementsByTagName("section");
const navbarList = document.getElementById("navbar__list");

// Start Helper Functions


// Begin Main Functions

// build the nav
const buildNavbar = (sections) => {
    const navbarIDAndLinkNameArr = [];

    for(let section of sections) {
        let sectionID = section.getAttribute("id");
        let navLinkName = section.getAttribute("data-nav");
        let navInfo = [sectionID, navLinkName];
        navbarIDAndLinkNameArr.push(navInfo);
        console.log(navbarIDAndLinkNameArr);
    }

    return navbarIDAndLinkNameArr;
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


// MAIN EVENTS
// Build menu 
document.addEventListener("DOMContentLoaded", () => {
    const navbarDataArr = buildNavbar(sections);
    console.log("IN BUILD MENU");
    console.log(navbarDataArr);

// Scroll to section on link click

// Set sections as active

});
