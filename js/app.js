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
    /*const navbarIDAndLinkNameArr = [];*/
    console.log("line 15");
    console.log(sections);
    for(let section of sections) {
        let sectionID = section.getAttribute("id");
        console.log("sectionID: " + sectionID);
        let navLinkName = section.getAttribute("data-nav");
        console.log("navLinkName: " + navLinkName);
        /*let navInfo = [sectionID, navLinkName];
        navbarIDAndLinkNameArr.push(navInfo);
        console.log(navbarIDAndLinkNameArr);*/
        const htmlLink = `<li><a href="#${sectionID}">${navLinkName}</a></li>`;
        console.log("line27");
        navbarList.insertAdjacentHTML("beforeend", htmlLink);
    }

    /*createNavLink(navbarIDAndLinkNameArr)*/
    /*return navbarIDAndLinkNameArr;*/
}

/*const createNavLink = (navData) => {
    for(data of navData) {
        let 
        const htmlLink = "<li><a href='"
    }
    const htmlLink = "<li>"
}*/


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


// MAIN EVENTS
// Build menu 
document.addEventListener("DOMContentLoaded", function() {
    buildNavbar(sections);

// Scroll to section on link click

// Set sections as active

});