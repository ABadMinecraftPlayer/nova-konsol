
// Swaps the 
function SwapInfo(x) {
    var swap = document.getElementById(`swapinfo_${x}`);
    var toswap = document.getElementById("card-1_display_img");

    toswap.style.backgroundImage = `url(${swap.src})`;
}