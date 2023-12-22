function mostrarNivel6() {
    alert("En el castillo has visualizado en una pared tres puzzles, cuidado uno es una trampa¿cual escoges?\n1.Un juego numerico\n2.Un rompecabezas\n3.Un acertijo");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("Respuesta incorrecta.Has caido en una trampa y no puedes escapar");
        reiniciarJuego();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta.Al mover una pieza te el techo se cae y ambos quedan aplastados.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("¡Correcto! es hora de resolver el juego");
        mostrarNivel7();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }