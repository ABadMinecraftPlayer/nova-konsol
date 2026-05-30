// car. vars
let index = 0;

const track = document.getElementById('track');
let visible = 5;

const items = track.children;
const max_length = items.length;

const leftbuttonscroll = document.getElementById('left-scroll')
const rightbuttonscroll = document.getElementById('right-scroll')

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