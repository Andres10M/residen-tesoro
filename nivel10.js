function mostrarNivel10() {
    alert("Estás en la isla enfrentándote a Saddler, el líder de Los Illuminados. ¿Cómo planeas derrotarlo?\n1. Utilizas el lanzacohetes\n2. Buscas un punto débil\n3. Le disparas con la pistola");
  
    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");
  
    if (respuestaUsuario === "1") {
      alert("¡Correcto! Has derrotado a Saddler con el lanzacohetes. ¡Felicidades, has completado el juego!");
      reiniciarJuego();
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
  