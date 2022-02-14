var navbuttonContainer = document.getElementById("navbar");
var navbuttons = navbuttonContainer.getElementsByClassName("navbutton");
for (var i = 0; i < navbuttons.length; i++) {
    navbuttons[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace (" active","");
        }
        this.ClassName += " active";
    });
}