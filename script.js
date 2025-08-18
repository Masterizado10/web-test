window.onload = () => {
  alert("¡Bienvenido a Mis Platos de Comida!");
};

function mostrarSubplatos(tipo) {
  // Ocultar galería principal
  document.getElementById('galeria').style.display = 'none';

  // Ocultar todas las subgalerías
  document.getElementById('subplatos-pasta').style.display = 'none';
  document.getElementById('subplatos-sushi').style.display = 'none';
  document.getElementById('subplatos-tacos').style.display = 'none';

  // Mostrar la seleccionada
  document.getElementById('subplatos-' + tipo).style.display = 'block';
}

function cerrarSubplatos() {
  // Ocultar todas
  document.getElementById('subplatos-pasta').style.display = 'none';
  document.getElementById('subplatos-sushi').style.display = 'none';
  document.getElementById('subplatos-tacos').style.display = 'none';

  // Mostrar principal
  document.getElementById('galeria').style.display = 'flex';
}