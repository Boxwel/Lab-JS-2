const prompt = require("prompt-sync")();

function valClave(clave) {
  let tiene8 = clave.length >= 8;
  let tieneNumero = /[0-9]/.test(clave);
  let tieneMayuscula = /[A-Z]/.test(clave);

  if (tiene8 && tieneNumero && tieneMayuscula) {
    return true;
  } else {
    return false;
  }
}

let clave = prompt("Escribe una clave: ");
console.log(valClave(clave));
