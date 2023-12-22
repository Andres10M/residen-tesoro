function mostrarNivel7() {
    alert("¿Treinta caballos de color blanco. En una sierra colorada, que cuando cabalgan machacan y trituran pero luego descansan.?\n1.las perlas\n2.los dientes\n3.los copos de nieve");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("Respuesta incorrecta.Las perlas no trituran");
        reiniciarJuego();
    } else if (respuestaUsuario === "2") {
        alert("¡Correcto!.Los dientes.");
        mostrarNivel8();
    } else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. Los copos de nieve trituran por millares.");
        reiniciarJuego();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }
  