console.log("moin")

const nav = document.getElementById("nav");

const mobileNavToggler = document.getElementById("mobile-nav-toggler");

let stickyBreakpoint = null;

window.addEventListener("scroll", () => {

    if (stickyBreakpoint == null) {
        stickyBreakpoint = nav.offsetTop;
    }

    console.log(stickyBreakpoint)

    if (stickyBreakpoint < window.scrollY) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
})

mobileNavToggler.addEventListener("click", () => {
    console.log(" OAjsndoiasd")

    if (nav.classList.contains("open")) {
        nav.classList.add("close");
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
        nav.classList.remove("close");
    }
})