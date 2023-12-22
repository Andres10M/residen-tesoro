function mostrarNivel4() {
  alert("llegas a la iglesia debes responder un acertijo para entrar\¿En la noche salen sin ser vistas y en el dia duermen?\n1.las estrellas\n2.los ratones\n3.las nubes");

  const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");

  if (respuestaUsuario === "1") {
      alert("¡Correcto! las estrellas, ahora puedes entrar a la iglesia");
      mostrarNivel5();
  } else if (respuestaUsuario === "2") {
      alert("Respuesta incorrecta.los ratones tambien salen en el dia");
      reiniciarJuego();
  } else if (respuestaUsuario === "3") {
      alert("Respuesta incorrecta.Las nubes estan en el cielo todo el tiempo");
      reiniciarJuego();
  } else {
      alert("Respuesta no válida. ¡El juego ha terminado!");
      reiniciarJuego();
   }
}