function mostrarNivel2() {
    alert("Dentro de la iglesia, te encuentras con el comerciante. ¿Qué decides comprar?\n1. Una nueva arma\n2. Munición para la pistola\n3. Un mapa del área");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "2") {
        alert("¡Correcto! Has asegurado munición para enfrentar nuevos desafíos.");
        mostrarNivel3();
    } else if (respuestaUsuario === "1") {
        alert("Respuesta incorrecta.De nada te sirve la nueva arma si no tiene suficiente municion.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. El mapa puede ser util pero lamentablemente debes saber que el protegerte y sobrevivir el primordial.");
        reiniciarJuego();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }