// Función principal para buscar y redirigir
function buscarTema() {
    // Captura el texto, lo pasa a minúsculas y quita espacios vacíos al inicio/final
    let terminoBusqueda = document.getElementById('inputBusqueda').value.toLowerCase().trim();

    // Si el usuario no escribió nada, lanza una alerta amigable
    if (terminoBusqueda === "") {
        alert("Por favor, escribe el nombre de algún tema o hechizo para buscar en el reino.");
        return;
    }

    // Diccionario de Caminos 
    if (terminoBusqueda.includes("virtual") || terminoBusqueda.includes("maquina")) {
        window.location.href = "virtualizacion.html";
    } 
    else if (terminoBusqueda.includes("base") || terminoBusqueda.includes("datos") || terminoBusqueda.includes("sql")) {
        window.location.href = "bases.html";
    } 
    else if (terminoBusqueda.includes("red") || terminoBusqueda.includes("topolo")) {
        window.location.href = "redes.html";
    } 
    else if (terminoBusqueda.includes("ethernet") || terminoBusqueda.includes("cable")) {
        window.location.href = "ethernet.html";
    } 
    else if (terminoBusqueda.includes("normalización") || terminoBusqueda.includes("diseño")) {
        window.location.href = "diseño.html";
    } 
    else {
        // Mensaje temático si no encuentra el tema
        alert("Ese conocimiento no se encuentra en este grimorio. ¡Prueba con otro término!");
    }
}

// --- Escuchador de Eventos para la tecla Enter ---
// Espera a que el HTML cargue por completo antes de buscar el elemento
document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("inputBusqueda");
    
    // Si encuentra el buscador en la página, le añade el evento de teclado
    if (input) {
        input.addEventListener("keypress", function(event) {
            // Si la tecla presionada es "Enter" (código 13)
            if (event.key === "Enter") {
                event.preventDefault(); // Evita que la página se recargue por defecto
                buscarTema();           // Invoca la función de búsqueda
            }
        });
    }
});