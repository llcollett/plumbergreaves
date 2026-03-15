/* toggle logos from orange to blue */
let currentImg = 1;
const images = ["./resources/images/PG-logotype-orange.png", "./resources/images/PG-logotype-blue.png"];
function toggleImage() {
    if(currentImg >= images.length) {
        currentImg = 0;
    }
    document.getElementById("header-logo-img").src = images[currentImg];
    currentImg++;
}

/* toggle color of plumber greaves text from blue to orange */
let currentColor = 1;
const colors = ["#006997", "#ea5b0c"];
function toggleNameColor() {
    if(currentColor >= colors.length) {
        currentColor = 0;
    }
    document.getElementById("name-text").style.color = colors[currentColor];
    currentColor++;
}
