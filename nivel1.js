function mostrarNivel1() {
    alert("Te encuentras en el pueblo. De repente, un grupo de Ganados te rodea. ¿Qué haces?\n1. Corres hacia la iglesia\n2. Les disparas con la pistola\n3. Intentas esquivarlos");

    const respuestaUsuario = prompt("Elige una opción (1, 2 o 3):");

    if (respuestaUsuario === "1") {
        alert("¡Correcto! Has llegado a la iglesia a salvo.");
        mostrarNivel2();
    } else if (respuestaUsuario === "2") {
        alert("Respuesta incorrecta. No tienes suficientes balas, has perdido.");
        reiniciarJuego();
    } else if (respuestaUsuario === "3") {
        alert("Respuesta incorrecta. Son demasiados y te han atrapado, has perdido el juego.");
        reiniciarJuego();
    } else {
        alert("Respuesta no válida. ¡El juego ha terminado!");
        reiniciarJuego();
    }
}
