var cars = ["BMW", "Volvo", "Saab", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("cars").innerHTML = text;
document.getElementById("cars").style.fontSize = "20px";
document.getElementById("cars").style.color = "cornflowerblue";
document.getElementById("cars").style.fontWeight = "lighter";
document.getElementById("cars").style.fontFamily = "sans-serif";
document.getElementById("cars").style.fontStyle = "sans-serif";
