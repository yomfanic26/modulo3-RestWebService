//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let letrasEncontradas = 0;
let intentos = 0;
let concidencias = 0;
let errores = 0;
esMayuscula = function (caracter) {
  caracter = caracter.toString(); // convierte la cadena a una string
  const codigoAscii = caracter.charCodeAt(0);
  if (codigoAscii >= 65 && codigoAscii <= 90) {
    return true;
  } else {
    return false;
  }
};

// funcion guardar palabra
guardarPalabra = function () {
  validacion = true;
  let getPalabra = recuperarTexto("txtSecreta");
  if (getPalabra.length != 5) {
    validacion = false;
    alert("Debe ingresar una palabra de 5 letrasmayuscula");
  } else {
    for (let i = 0; i < getPalabra.length; i++) {
      if (!esMayuscula(getPalabra.charAt(i))) {
        validacion = false;
        alert("Todas las letras deben ser mayúsculas.");
        break; // apenas encuentre una letra minuscula sale del bucle
      }
    }
  }
  if (validacion) {
    palabraSecreta = getPalabra;
  }
};

mostrarLetra = function (letra, posicion) {
  for (let i = 0; i <= 4; i++) {
    if (posicion == i) {
      mostrarTexto("div" + i, letra);
      break; // Salimos del bucle después de encontrar la posición correcta
    }
  }
};

validar = function (letra) {
  letrasEncontradas = 0;
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta.charAt(i) == letra) {
      mostrarLetra(letra, i);
      letrasEncontradas += 1;
      concidencias += 1
    }
  }
  if (letrasEncontradas == 0) {
    alert("LA LETRA NO ES PARTE DE LA PALABRA");
    errores += 1;
    mostrarAhorcado();
  }
};

ingresarLetra = function () {
  let getLetra = recuperarTexto("txtLetra");
  if (esMayuscula(getLetra)) {
    intentos = intentos + 1; // Incrementar intentos en cada intento válido
    validar(getLetra)
    if (concidencias == 5) {
        mostrarImagen("ahorcadoImagen","ganador.gif")
    } else if (intentos == 10) {
        mostrarImagen("ahorcadoImagen","gameOver.gif")
    }
  } else {
    alert("SOLO SE ACEPTAN MAYÚSCULAS");
  }
};

mostrarAhorcado = function(){
    for (error=1;error<=9;error++){
        if(error==errores){
            mostrarImagen("ahorcadoImagen","Ahorcado_0"+error+".png")
        }
    }
 
}
