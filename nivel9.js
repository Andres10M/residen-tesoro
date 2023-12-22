function mostrarNivel9() {
    alert("Legas a la isla, rescatas a Ashely,Es hora de enfrentarte a Saddler. ¿Qué haces?\n1.Ocultas a Ashley\n2Decides llevar a Ashely contigo.\n3Escapas con Ashely");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("¡Correcto!Debes poner a salvo a Ashley para poder enfrentar a Saddler.");
        mostrarNivel10();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta.Saddler ha matado a Ashely, no debiste llevarla contigo.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta.No puedes escapar sin vencer a Saddler, el tiene la llave la muestra del virus que necesitas.");
        reiniciarJuego();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
    }
  }