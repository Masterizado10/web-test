// --- Catalogo de juegos por consola ---
const catalogos = {
  ps2: [
    { nombre: "GTA: San Andreas", precio: 25, img:"https://i.imgur.com/hw0B7yE.png" },
    { nombre: "God of War II", precio: 30, img:"https://i.imgur.com/ke3MhxO.png" },
    { nombre: "Shadow of the Colossus", precio: 28, img:"https://i.imgur.com/hRKw4hv.png" },
    // ... (los demás 17 juegos que listamos antes)
  ],
  xbox: [
    { nombre: "Halo: Combat Evolved", precio: 25, img:"https://i.imgur.com/bG8F74a.png" },
    { nombre: "Halo 2", precio: 28, img:"https://i.imgur.com/xcsw2A2.png" },
    // ... resto
  ],
  gamecube: [
    { nombre: "Super Smash Bros Melee", precio: 30, img:"https://i.imgur.com/DhvWeqV.png" },
    { nombre: "Metroid Prime", precio: 25, img:"https://i.imgur.com/pyF2yfa.png" },
    // ... resto
  ],
  ps1: [
    { nombre: "Final Fantasy VII", precio: 25, img:"https://i.imgur.com/xR84mdC.png" },
    { nombre: "Crash Bandicoot", precio: 20, img:"https://i.imgur.com/K0vPK1e.png" },
    // ... resto
  ]
};

// --- Variables ---
let carrito = [];
const catalogoDiv = document.getElementById("catalogo");
const tituloConsola = document.getElementById("tituloConsola");
const verCarrito = document.getElementById("verCarrito");
const carritoModal = document.getElementById("carritoModal");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalTexto = document.getElementById("total");
const comprarBtn = document.getElementById("comprar");

// --- Mostrar catálogo de una consola seleccionada ---
function mostrarCatalogo(consola){
  catalogoDiv.innerHTML = "";
  tituloConsola.textContent = "Juegos de " + consola.toUpperCase();
  catalogos[consola].forEach((juego, idx) => {
    const card = document.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
      <img src="${juego.img}" alt="${juego.nombre}">
      <h3>${juego.nombre}</h3>
      <p><strong>$${juego.precio}</strong></p>
      <button data-consola="${consola}" data-idx="${idx}">Agregar</button>
    `;
    catalogoDiv.appendChild(card);
  });
}

// --- Eventos en navbar ---
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const consola = btn.dataset.consola;
    mostrarCatalogo(consola);
  });
});

// --- Agregar al carrito ---
catalogoDiv.addEventListener("click", e => {
  if(e.target.tagName === "BUTTON"){
    const { consola, idx } = e.target.dataset;
    const juego = catalogos[consola][idx];
    carrito.push(juego);
    actualizarCarrito();
    alert(`${juego.nombre} añadido al carrito ✔`);
  }
});

// --- Carrito ---
verCarrito.addEventListener("click", () => {
  actualizarCarrito();
  carritoModal.classList.remove("oculto");
});
cerrarCarrito.addEventListener("click", () => carritoModal.classList.add("oculto"));

function actualizarCarrito(){
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((juego, i) => {
    const li = document.createElement("li");
    li.textContent = `${juego.nombre} - $${juego.precio}`;
    total += juego.precio;
    listaCarrito.appendChild(li);
  });
  totalTexto.textContent = "Total: $" + total;
}

comprarBtn.addEventListener("click", () => {
  if(carrito.length > 0){
    alert("¡Compra realizada con éxito!");
    carrito = [];
    actualizarCarrito();
    carritoModal.classList.add("oculto");
  } else {
    alert("Tu carrito está vacío");
  }
});