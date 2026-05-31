// ham. vars
let toggleHam = true;

// resizeFunctions
function resizeFunctions() {
    if (!window.matchMedia("(max-width: 728px)").matches) {
        toggleHam = false;

        const hamburger = document.getElementById("hamburger-content");
        const hamburgerlines = document.getElementsByClassName("line");

        hamburger.style.display = "none";

        hamburgerlines[0].style.transform = "";
        hamburgerlines[1].style.opacity = "1";
        hamburgerlines[2].style.transform = "";
    }

    if (window.matchMedia("(max-width: 686px)").matches) {
        const policies = document.getElementsByClassName("policies");
        for (let i = 0; i < policies.length; i++) {
            if (i === 0) {
                policies[i].innerHTML = `PP`;
            }
            if (i === 1) {
                policies[i].innerHTML = `ToS`;
            }
            if (i === 2) {
                policies[i].innerHTML = `CoPo`;
            }
        }
    }
    else if (!window.matchMedia("(max-width: 686px)").matches) {
        const policies = document.getElementsByClassName("policies");
        for (let i = 0; i < policies.length; i++) {
            if (i === 0) {
                policies[i].innerHTML = `Privacy Policy`;
            }
            if (i === 1) {
                policies[i].innerHTML = `Terms of Service`;
            }
            if (i === 2) {
                policies[i].innerHTML = `Cookie Policy`;
            }
        }
    }
}

// Hamburger
function toggleHamburger() {
    const hamburger = document.getElementById("hamburger-content");
    const hamburgerlines = document.getElementsByClassName("line");

    toggleHam = !toggleHam;

    hamburger.style.display = toggleHam ? "flex" : "none";

    hamburgerlines[0].style.transform = toggleHam
        ? "translateY(17.5px) rotate(45deg)"
        : "";

    hamburgerlines[1].style.opacity = toggleHam
        ? "0"
        : "1";

    hamburgerlines[2].style.transform = toggleHam
        ? "translateY(-17.5px) rotate(-45deg)"
        : "";
}

