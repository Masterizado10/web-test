
window.onload = () => {
  alert("¡Bienvenido a Mis Platos de Comida!");
};

function mostrarSubplatos(tipo) {
  if (tipo === 'pasta') {
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('subplatos-pasta').style.display = 'block';
  }
}

function cerrarSubplatos() {
  document.getElementById('galeria').style.display = 'flex';
  document.getElementById('subplatos-pasta').style.display = 'none';
}