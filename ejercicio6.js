const prompt = require("prompt-sync")();

function contarPalabras(texto) {
  let contador = 1;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == " ") {
      contador++;
    }
  }
  return contador;
}

let texto = prompt("Escribe palabras: ");
console.log("Numero de palabras: " + contarPalabras(texto));
