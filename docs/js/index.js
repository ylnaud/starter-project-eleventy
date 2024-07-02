document.addEventListener("DOMContentLoaded", function () {
  // Añade aquí todas las rutas válidas de tu sitio generadas por Eleventy
  const validPaths = ["/", "/contacto/", "/acerca/", "/blog/"];

  console.log(validPaths.includes(window.location.pathname));
  // Verifica si la ruta actual es válida
});
