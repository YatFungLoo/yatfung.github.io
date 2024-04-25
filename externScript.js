/**
 *
 * @param {color} newColor some color
 */
function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

function myFunction() {
    document.getElementById("demo1").innerHTML = "Paragraph changed.";
}