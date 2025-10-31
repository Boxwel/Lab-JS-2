const prompt = require("prompt-sync")();

const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 }
];

function buscarProd(nombre) {
  let producto = inventario.find(p => p.nombre === nombre);
  return producto || "null";
}

let nombreBuscado = prompt("Nombre de prenda: ");
console.log(buscarProd(nombreBuscado));
