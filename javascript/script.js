// Swaps the card-1_display_img background image to the one of the clicked image in the side-scroll_product_info
function SwapInfo(x) {
    var swap = document.getElementById(`swapinfo_${x}`);
    var toswap = document.getElementById("card-1_display_img");

    toswap.style.backgroundImage = `url(${swap.src})`;
}

// Carousel (Claude)
const total = 9;
const visible = 5;

let offset = 0;
let tracks = [];

function getMetrics() {
    const vw = window.innerWidth / 100;
    const slideW = 17 * vw;
    const gap = 2 * vw;
    const step = slideW + gap;
    const trackW = total * (slideW + gap);
    return { slideW, gap, step, trackW, vw };
}

function setPos(t, px, animate) {
    t.el.style.transition = animate ? "left 0.35s cubic-bezier(.4,0,.2,1)" : "none";
    t.el.style.left = px + "px";
    t.pos = px;
}

function buildClone(leftPx) {
    const original = document.getElementById("track");
    const clone = original.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.position = "absolute";
    clone.style.top = "0";
    clone.style.left = leftPx + "px";
    clone.style.transition = "none";
    original.parentElement.appendChild(clone);
    return { el: clone, pos: leftPx };
}

function initCarousel() {
    const { trackW } = getMetrics();

    // remove any existing clones from previous init
    document.querySelectorAll("#view-track .track-clone").forEach(el => el.remove());

    const original = document.getElementById("track");
    original.style.position = "absolute";
    original.style.top = "0";
    original.style.left = "0px";
    original.style.transition = "none";

    const clone = original.cloneNode(true);
    clone.removeAttribute("id");
    clone.classList.add("track-clone");
    clone.style.position = "absolute";
    clone.style.top = "0";
    clone.style.left = trackW + "px";
    clone.style.transition = "none";
    original.parentElement.appendChild(clone);

    offset = 0;
    const outer = document.getElementById("view-track");
    outer.style.transition = "none";
    outer.style.transform = "translateX(0px)";

    tracks = [
        { el: original, pos: 0 },
        { el: clone, pos: trackW }
    ];
}

function carouselScroll(direction) {
    const { step, trackW, vw } = getMetrics();
    const viewportW = 90 * vw;

    offset -= direction * step;

    const outer = document.getElementById("view-track");
    outer.style.transition = "transform 0.35s cubic-bezier(.4,0,.2,1)";
    outer.style.transform = `translateX(${offset}px)`;

    const viewL = -offset;
    const viewR = -offset + viewportW;

    tracks.forEach(t => {
        if (direction > 0) {
            // scrolling right — teleport leftmost track to the right
            if (t.pos + trackW < viewL - step) {
                const rightmost = tracks.reduce((a, b) => a.pos > b.pos ? a : b);
                setPos(t, rightmost.pos + trackW, false);
            }
        } else {
            // scrolling left — teleport rightmost track to the left
            if (t.pos > viewR + step) {
                const leftmost = tracks.reduce((a, b) => a.pos < b.pos ? a : b);
                setPos(t, leftmost.pos - trackW, false);
            }
        }
    });
}

window.addEventListener("resize", initCarousel);
document.addEventListener("DOMContentLoaded", initCarousel);