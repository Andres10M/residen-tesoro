function starGame() {
    alert("¡Bienvenido a Resident Evil!");
  
    const confirmacion = confirm("¿Estás listo para enfrentar el peligro en Resident Evil?");
    
    if (confirmacion) {
      alert("¡Excelente! Prepárate para responder preguntas sobre Resident Evil.");
  
    
      mostrarNivel1();
    } else {
      alert("¡Hasta luego! Si cambias de opinión, recarga la página para volver a intentarlo.");
    }
  }

 