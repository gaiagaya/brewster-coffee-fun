const navbuttons = document.querySelectorAll(".navbutton");

navbuttons.forEach(el => {
    el.addEventListener("click", function(e){
        setActiveButton(e.target);
    });
});

// this function is called if a nav link is clicked *or* if a section is scrolled into view
// it takes a nav link element as a parameter
// it will create an array of all of the active links (there should only be one hopefully!)
// it will remove the active attribute from all of the links
// then it will add an active attribute onto the link it was passed as a parameter

function setActiveButton(el) {
        let active = document.querySelectorAll("[data-active]");

        active.forEach( el => {
            el.removeAttribute("data-active");
        });

        el.setAttribute("data-active", true);
}

// this is called if an element is scrolled into view, 
// it creates an array of all of the elements that have scrolled into view
// then for each of those elements it will call setActiveButton, 
// using the ID of the element that scrolled into view, plus the word 'link-' as a selector for the correct button to highlight

let scrolledIntoView = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let activeSelector = "link-" + entry.target.id;
            let activeLink = document.getElementById(activeSelector);
            setActiveButton(activeLink)
        }
    });
}

// configuration for intersection observer
let config = {
    root: document.getElementById("main"),
    rootMargin: "0px",
    threshold: 0.3
}

// create a new intersection observer which will call a function called scrolledIntoView, and will use the configuration set above
let observer = new IntersectionObserver(scrolledIntoView, config);

// get an array of every element that we want to observe (in this case it is all of the sections)
let observables = document.querySelectorAll(".observable");

// for each element in the observables array, observe the element to see when it is in view
observables.forEach(el => {
    observer.observe(el)
});