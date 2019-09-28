

var css = document.querySelector("h3");
var color_1 = document.querySelector(".color-1");
var color_2 = document.querySelector(".color-2");
var body = document.getElementById("gradient");

 console.log(css);
// console.log(color_2);
// console.log(color_1);
console.log(body);

function setGradient() {
    body.style.background = "linear-gradient(to right ," + color_1.value + ", " + color_2.value + ")";
css.textContent = body.style.background+";"
}
color_1.addEventListener("input",setGradient);
color_2.addEventListener("input",setGradient);
