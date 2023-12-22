function mostrarNivel3() {
    alert("Te encuentras con un gigante con una bolsa en la espalda. ¿Cómo reaccionas?\n1. Le disparas a la bolsa\n2. Intentas huir\n3. Lanzas granadas");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has debilitado al gigante al dispararle a la bolsa.");
        mostrarNivel4();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta.El gigante es muy rapido para huir te ha atrapado y te ha devorado.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta.Las granadas lo estan debilitando, !oh nooo! no tienes suficientes, el gigante se levanta y te aplasta.");
        reiniciarJuego();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
     }
  }
  