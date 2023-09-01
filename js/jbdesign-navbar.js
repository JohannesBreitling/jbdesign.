console.log("moin")

const nav = document.getElementById("nav");

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