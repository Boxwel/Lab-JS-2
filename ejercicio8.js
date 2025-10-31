const prompt = require("prompt-sync")();

function convertirMoneda(monto, monedaDestino) {
  if (monedaDestino === "USD") {
    return monto / 3880;
  }
  if (monedaDestino === "EUR") {
    return monto / 4492;
  }
  return "Moneda no válida";
}

let monto = prompt("Poner valor en pesos: ");
let moneda = prompt("Conversion a USD o EUR: ");

console.log("La conversion es: " + convertirMoneda(monto, moneda));
