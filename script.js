function openNav() {
    const nav = document.querySelector(".nav-slides");

    if (nav) {
        nav.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeNav() {
    const nav = document.querySelector(".nav-slides");

    if (nav) {
        nav.classList.remove("open");
        document.body.style.overflow = "";
    }
}

//phone size responses when you click on the 
document.addEventListener("DOMContentLoaded", function () {
    //Target every links in the NAV
    const links = document.querySelectorAll(
        ".nav-slides a:not(.closebtn)"
    );

    //for any each link in NAV click, close NAV
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            closeNav();
        });
    });

});


//if resized to laptop size, close NAV
window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {
        closeNav();
    }

});

