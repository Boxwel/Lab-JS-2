const prompt = require("prompt-sync")();

const usuarios = [
  { nombre: "Santiago", edad: 23 },
  { nombre: "Martin", edad: 14 },
  { nombre: "Patricia", edad: 30 }
];

function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(u => u.edad >= edadMinima);
}

let edad = Number(prompt("Edad minima: "));
let resultado = filtrarUsuarios(usuarios, edad);

console.log("Usuarios con más de " + edad + " años: " + resultado.map(u => u.nombre).join(", "));
