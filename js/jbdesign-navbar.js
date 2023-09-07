console.log("moin")

const nav = document.getElementById("nav");

const mobileNavToggler = document.getElementById("mobile-nav-toggler");

/*
const submenus = document.getElementsByClassName("submenu");

for (let i = 0; i < submenus.length; i++) {
    console.log(submenus[i])

    console.log(submenus[i].children)
}
*/


const navItems = document.getElementsByClassName("item-container")
console.log(navItems)

let findChild = (parent, childClass) => {
    for (let child of parent.children) {
        if (child.classList.contains(childClass)) return child;
    }

    return null;
}

for (let navItem of navItems) {

    // Find submenu
    let submenu = findChild(navItem, "submenu");
    // Skip the rest if there is no submenu in this child
    if (submenu == null) {
        continue;
    }

    // Find the button to open the submenu
    let openLink = findChild(navItem, "item");

    console.log(submenu, openLink)
}




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

