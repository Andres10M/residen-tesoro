function mostrarNivel5() {
    alert("Has encontrado a Ashely¿Los empiezan a perseguir a donde van?\n1.Al lago \n2.Al pueblo\n3.Al castillo");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("Respuesta incorrecta.Escapan al lago y son acorralados");
        reiniciarJuego();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta.El pueblo esta muy lejos y Ashely es atrapada.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("¡Correcto! el castillo es la mejor opcion para escapar");
        mostrarNivel6();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }