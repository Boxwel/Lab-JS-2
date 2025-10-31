const prompt = require("prompt-sync")();

function calcularProm() {
  let n1 = Number(prompt("Primera nota:"));
  let n2 = Number(prompt("Segunda nota:"));
  let n3 = Number(prompt("Tercera nota:"));

  let promedio = (n1 + n2 + n3) / 3;
  return promedio;
}

console.log("El promedio es: " + calcularProm());
