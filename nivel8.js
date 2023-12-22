function mostrarNivel8() {
    alert("Avanzas por el castillo, secuentran a Ashely, vas al rescate¿que camino escoges?\n1.las alcantarillas\n2.el sotano\n3.Salir del castillo.");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("Respuesta incorrecta.Las alcantarillas estan infestadas de criaturas.");
        reiniciarJuego();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta.Es demasiado dificil pasar por aqui, te has perdido.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("¡Correcto! Saliste del castillo, te diriges a otra isla a salvar a Ashely");
        mostrarNivel9();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }