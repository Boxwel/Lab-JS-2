const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje) {
  return total + (total * porcentaje / 100);
}

let total = Number(prompt("Costo de la cuenta: "));
let porcentaje = Number(prompt("Porcentaje de la propina: "));

console.log("Total con propina: " + calcularPropina(total, porcentaje));