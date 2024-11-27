// Seleccionar el audio
var audio = document.querySelector("audio");

// Intentar reproducir automáticamente la música al cargar la página
window.addEventListener("load", function () {
  audio.play().catch((error) => {
    console.log(
      "El navegador bloqueó la reproducción automática. Se requiere interacción del usuario."
    );
  });
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}



// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-audio");

  // Intenta reproducir automáticamente
  audio.play().catch((error) => {
    console.log("Reproducción automática bloqueada. Se requiere interacción.");
  });

  // Opción para iniciar manualmente (si es necesario)
  document.body.addEventListener("click", function () {
    audio.play();
  });
});

document.getElementById("download-btn").addEventListener("click", function () {
  // Ruta del archivo PDF
  const pdfURL = "downloads/Armonia.pdf";

  // 1. Descargar el archivo
  const a = document.createElement("a");
  a.href = pdfURL;
  a.download = "Armonia.pdf"; // Nombre con el que se descargará
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // 2. Abrir el archivo en una nueva pestaña
  setTimeout(() => {
    window.open(pdfURL, "_blank");
  }, 1000); // Espera un segundo para evitar conflictos entre descarga y apertura
});
