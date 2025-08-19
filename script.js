// Catálogo de juegos simulados
const juegos = [
  { id: 1, nombre: "Super Mario Bros", precio: 15, img: "https://i.imgur.com/oXjZSRD.png" },
  { id: 2, nombre: "The Legend of Zelda", precio: 20, img: "https://i.imgur.com/4u9rvzB.png" },
  { id: 3, nombre: "Pac-Man", precio: 10, img: "https://i.imgur.com/lFdfQYC.png" },
  { id: 4, nombre: "Street Fighter II", precio: 18, img: "https://i.imgur.com/JLu8aOz.png" }
];

const catalogoDiv = document.getElementById("catalogo");
const verCarrito = document.getElementById("verCarrito");
const carritoModal = document.getElementById("carritoModal");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalTexto = document.getElementById("total");
const comprarBtn = document.getElementById("comprar");

let carrito = [];

// Renderizar catálogo
function mostrarCatalogo() {
  juegos.forEach(juego => {
    const card = document.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
      <img src="${juego.img}" alt="${juego.nombre}">
      <h3>${juego.nombre}</h3>
      <p><strong>$${juego.precio}</strong></p>
      <button data-id="${juego.id}">Agregar al carrito</button>
    `;
    catalogoDiv.appendChild(card);
  });
}

// Agregar producto
catalogoDiv.addEventListener("click", e => {
  if(e.target.tagName === "BUTTON"){
    const id = parseInt(e.target.getAttribute("data-id"));
    const juego = juegos.find(j => j.id === id);
    carrito.push(juego);
    alert(`${juego.nombre} añadido al carrito ✔`);
  }
});

// Mostrar Carrito
verCarrito.addEventListener("click", () => {
  actualizarCarrito();
  carritoModal.classList.remove("oculto");
});

cerrarCarrito.addEventListener("click", () => {
  carritoModal.classList.add("oculto");
});

// Actualizar Carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    total += item.precio;
    listaCarrito.appendChild(li);
  });

  totalTexto.textContent = "Total: $" + total;
}

// Finalizar compra
comprarBtn.addEventListener("click", () => {
  if(carrito.length === 0){
    alert("Tu carrito está vacío.");
  } else {
    alert("¡Compra realizada con éxito! 🎉");
    carrito = [];
    carritoModal.classList.add("oculto");
  }
});

// Inicializar catálogo
mostrarCatalogo();