// ham. vars
let toggleHam = true;

// car. vars
let index = 0;

const track = document.getElementById('track');
let visible = 5;

const items = track.children;
const max_length = items.length;

const leftbuttonscroll = document.getElementById('left-scroll')
const rightbuttonscroll = document.getElementById('right-scroll')

// resizeFunctions
function resizeFunctions() {
    if (!window.matchMedia("(max-width: 1488px)").matches) {
        toggleHam = false;

        const hamburger = document.getElementById("hamburger-content");
        const hamburgerlines = document.getElementsByClassName("line");

        hamburger.style.display = "none";

        hamburgerlines[0].style.transform = "";
        hamburgerlines[1].style.opacity = "1";
        hamburgerlines[2].style.transform = "";
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

// Swaps the card-1_display_img background image to the one of the clicked image in the side-scroll_product_info
function SwapInfo(x) {
    var swap = document.getElementById(`swapinfo_${x}`);
    var toswap = document.getElementById("card-1_display_img");

    toswap.style.backgroundImage = `url(${swap.src})`;
}

// Carousel
function carouselScroll(dir) {
    const first = items[0].getBoundingClientRect();
    const second = items[1].getBoundingClientRect();
    const step = second.left - first.left;

    if (dir === 'left' && index - 1 >= 0) index -= 1
    if (dir === 'right' && index + 1 < max_length - visible + 1) index += 1;

    if (index + 1 > max_length - visible) rightbuttonscroll.style.backgroundColor = '#88693ecb';
    else rightbuttonscroll.style.backgroundColor = '#c59756';

    if (index === 0) leftbuttonscroll.style.backgroundColor = '#88693ecb';
    else leftbuttonscroll.style.backgroundColor = '#c59756';

    track.style.transform = `translateX(-${index * step}px)`;
};