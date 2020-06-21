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
function setSectionInViewActive(sections) {
    for (let section of sections) {


        /**const getSections = document.querySelector(
            `a[href="#${section.getAttribute("id")}"]`
        );
        console.log("SELECTED LINK:  " + getSections);
        if (isInViewport(section)) {
            section.classList.add("active");
            getSections.classList.add("menu__link--active");
        } else {
            section.classList.remove("active");
            getSections.classList.remove("menu__link--active");
        }**/
    }
}

// Check if section is in viewport
function isInViewport(section) {
    var bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

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
    //ADDED 6/20------------------------------
    setSectionInViewActive(sections);
});