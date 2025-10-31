const prompt = require("prompt-sync")();

function sacarDinero(total, monto) {
  if (monto > total) {
    return "Fondos insuficientes";
  } else {
    return "Nuevo total: " + (total - monto);
  }
}

let total = Number(prompt("Dinero actual: "));
let monto = Number(prompt("Monto a retirar: "));
console.log(sacarDinero(total, monto));
