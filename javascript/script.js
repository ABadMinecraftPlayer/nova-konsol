
// Swaps the card-1_display_img background image to the one of the clicked image in the side-scroll_product_info
function SwapInfo(x) {
    var swap = document.getElementById(`swapinfo_${x}`);
    var toswap = document.getElementById("card-1_display_img");

    toswap.style.backgroundImage = `url(${swap.src})`;
}

function AutoManualSwap(x) {
    setTimeout(() => {
        
    }, 5000);
}