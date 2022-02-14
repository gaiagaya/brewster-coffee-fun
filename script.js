const navbuttons = document.querySelectorAll(".navbutton");

navbuttons.forEach(el => {
    el.addEventListener("click", function(e){
        setActiveButton(e.target);
    });
});

function setActiveButton(el) {
        let active = document.querySelectorAll("[data-active]");

        active.forEach( el => {
            el.removeAttribute("data-active");
        });

        el.setAttribute("data-active", true);
}

let options = {
    root: document.getElementById("main"),
    rootMargin: "0px",
    threshold: 0.3
}

let setActive = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let activeSelector = "link-" + entry.target.id;
            let activeLink = document.getElementById(activeSelector);
            setActiveButton(activeLink)
        }
    })
}

let observer = new IntersectionObserver(setActive, options)

let observables = document.querySelectorAll(".observable");

observables.forEach(el => {
    observer.observe(el)
});