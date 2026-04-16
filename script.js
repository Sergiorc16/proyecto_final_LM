// ============================================
// THE GARAGE - E-COMMERCE DE VIDEOJUEGOS
// Script principal + Sistema de Puntos y Ruleta
// ============================================

// BASE DE DATOS DE PRODUCTOS CON IMÁGENES REALES
const productosBase = [
  {
    id: 1,
    nombre: "Elden Ring",
    consola: "ps5",
    precio: 59.99,
    precioOriginal: 69.99,
    genero: "accion",
    rating: "4.8",
    imagen:
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg",
    galeria: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg",
      "https://i0.wp.com/thegemsbok.com/wp-content/uploads/2022/04/Elden-Ring-screenshot-with-draconic-tree-sentinel.png?fit=722%2C406&ssl=1.jpg",
      "https://media0.giphy.com/media/gFcAP5S9KAjpbuGrrx/giphy.gif",
    ],
    descripcion:
      "Sumérgete en un mundo de fantasía oscura. Elden Ring es una colaboración entre FromSoftware y George R. R. Martin. Explora un vasto mundo abierto lleno de enemigos formidables, secretos ocultos y jefes épicos.",
    descuento: true,
    destacado: true,
    fechaLanzamiento: 2022,
  },
  {
    id: 2,
    nombre: "Final Fantasy XVI",
    consola: "ps5",
    precio: 64.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.5",
    imagen:
      "https://assets-prd.ignimgs.com/2021/08/05/final-fantasy-xvi-button-1628180674117.jpg",
    galeria: [
      "https://assets-prd.ignimgs.com/2021/08/05/final-fantasy-xvi-button-1628180674117.jpg",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515020/capsule_616x353.jpg?t=1773294537",
      "https://media4.giphy.com/media/qkbBDAxeN12PCXMj6N/giphy.gif",
    ],
    descripcion:
      "Experimenta la epopeya de Final Fantasy XVI, donde Clive Rosfield lucha contra los Dominios. Un juego de acción épico ambientado en un mundo donde los cristales y los Eikones (Dominios) controlan el destino.",
    descuento: true,
    destacado: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 3,
    nombre: "Spider-Man 2",
    consola: "ps5",
    precio: 69.99,
    precioOriginal: 69.99,
    genero: "accion",
    rating: "4.9",
    imagen:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    galeria: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
      "https://hips.hearstapps.com/hmg-prod/images/marvel-spider-man-2-miles-peter-1631539016.jpg?crop=0.564xw:1.00xh;0.219xw,0&resize=1200:*",
      "https://media3.giphy.com/media/7z3Bf0FqYPCOhve7yX/source.gif",
    ],
    descripcion:
      "Vuelve Peter Parker junto a Miles Morales en Spider-Man 2. Enfrenta nuevas amenazas en Nueva York, incluyendo al icónico villano Venom. Experimenta una historia de superhéroes épica con una jugabilidad mejorada.",
    descuento: false,
    destacado: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 4,
    nombre: "Starfield",
    consola: "xbox-series",
    precio: 69.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.6",
    imagen:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1775743548",
    galeria: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1775743548",
      "https://media.wired.com/photos/64efaed1d89817fe9d9fc046/master/pass/Starfield-Review-Featured-Games.jpg",
      "https://giffiles.alphacoders.com/219/219695.gif",
    ],
    descripcion:
      "Explora el universo en Starfield, el RPG espacial de Bethesda. Viaja entre constelaciones, crea tu personaje único y descubre los misterios del espacio en un juego de rol de mundo abierto.",
    descuento: false,
    destacado: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 5,
    nombre: "Forza Motorsport 8",
    consola: "xbox-series",
    precio: 49.99,
    precioOriginal: 69.99,
    genero: "carreras",
    rating: "4.7",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Forza_Motorsport_2023.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/0/01/Forza_Motorsport_2023.jpg",
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Domina las carreras en Forza Motorsport 8 con gráficos de última generación. Corre en circuitos icónicos del mundo con más de 500 vehículos. Una experiencia de carreras de simulación definitiva.",
    descuento: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 6,
    nombre: "The Legend of Zelda: Echoes of Wisdom",
    consola: "nintendo-switch",
    precio: 59.99,
    precioOriginal: 59.99,
    genero: "aventura",
    rating: "4.9",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Zelda_Echoes_of_Wisdom.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Zelda_Echoes_of_Wisdom.jpg",
      "https://images.unsplash.com/photo-1577720643272-265fe4c3f3ba?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Zelda: Echoes of Wisdom marca el debut de la Princesa Zelda como protagonista. Resuelve acertijos, explora dungeons y utiliza ecos para cambiar el flujo del juego en esta nueva aventura.",
    descuento: false,
    fechaLanzamiento: 2024,
  },
  {
    id: 7,
    nombre: "Super Mario Bros Wonder",
    consola: "nintendo-switch",
    precio: 54.99,
    precioOriginal: 59.99,
    genero: "aventura",
    rating: "4.8",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Super_Mario_Bros_Wonder.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/3/33/Super_Mario_Bros_Wonder.jpg",
      "https://images.unsplash.com/photo-1538481143235-e7ad22acda0d?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Super Mario Bros Wonder llega a Switch con poderes especiales y mundos mágicos. Corre, salta y utiliza nuevos poderes mientras intentas rescatar al Reino Champiñón de una amenaza oscura.",
    descuento: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 8,
    nombre: "Cyberpunk 2077 Ultimate",
    consola: "pc",
    precio: 39.99,
    precioOriginal: 59.99,
    genero: "rpg",
    rating: "4.7",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      "https://images.unsplash.com/photo-1559305100-7fabdc20f6e7?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Vive en Night City en el año 2077. Cyberpunk 2077 es un RPG de acción inmersivo donde tus decisiones cambian el destino de la ciudad. Toma misiones, hackea sistemas y construye tu leyenda.",
    descuento: true,
    fechaLanzamiento: 2020,
  },
  {
    id: 9,
    nombre: "Counter-Strike 2",
    consola: "pc",
    precio: 0,
    precioOriginal: 0,
    genero: "accion",
    rating: "4.8",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/3/30/CS2_%28video_game%29.png",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/3/30/CS2_%28video_game%29.png",
    ],
    descripcion:
      "Counter-Strike 2 llega como secuela del legendario juego competitivo. Compite en equipos 5v5 en maps icónicos con física mejorada y gráficos de última generación. Completamente gratis.",
    descuento: false,
    gratis: true,
    fechaLanzamiento: 2023,
  },
  {
    id: 10,
    nombre: "God of War Ragnarök",
    consola: "ps4",
    precio: 49.99,
    precioOriginal: 69.99,
    genero: "accion",
    rating: "4.9",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/God_of_War_Ragnar%C3%B6k_cover.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/c/c9/God_of_War_Ragnar%C3%B6k_cover.jpg",
      "https://images.unsplash.com/photo-1578496481421-da8a201f8e08?w=600&h=800&fit=crop",
    ],
    descripcion:
      "God of War Ragnarök es la conclusión épica de la saga nórdica de Kratos. El Ragnarök está aquí. Junto a Atreus, Kratos debe enfrentar su destino más oscuro en esta aventura de acción épica.",
    descuento: true,
    fechaLanzamiento: 2022,
  },
  {
    id: 11,
    nombre: "Dragon Age: The Veilguard",
    consola: "pc",
    precio: 59.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.6",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Dragon_Age_Veilguard.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/3/37/Dragon_Age_Veilguard.jpg",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Dragon Age: The Veilguard es el nuevo RPG de BioWare. Lidera un equipo de héroes contra amenazas antiguas. Toma decisiones que importan en un mundo lleno de magia, dragones y destino.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 12,
    nombre: "Black Myth: Wukong",
    consola: "pc",
    precio: 69.99,
    precioOriginal: 69.99,
    genero: "accion",
    rating: "4.7",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/Black_Myth_Wukong.png",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/b/b8/Black_Myth_Wukong.png",
      "https://images.unsplash.com/photo-1579546478550-c35fe1829c47?w=600&h=800&fit=crop",
    ],
    descripcion:
      'Black Myth: Wukong es una epopeya de acción basada en la mitología china. Encarna al Poderoso Rey Mono en una aventura de combate desafiante inspirada en la novela clásica "Viaje al Oeste".',
    descuento: false,
    destacado: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 13,
    nombre: "Metaphor: ReFantazio",
    consola: "ps5",
    precio: 64.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.8",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Metaphor_ReFantazio.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Metaphor_ReFantazio.jpg",
      "https://images.unsplash.com/photo-1566576912321-d58ddd641117?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Metaphor: ReFantazio del equipo de Persona trae un nuevo RPG de rol único. Forma lazos con aliados en un mundo de fantasía mientras emprendes una misión épica. El próximo gran JRPG.",
    descuento: true,
    destacado: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 14,
    nombre: "Indiana Jones and the Great Circle",
    consola: "xbox-series",
    precio: 69.99,
    precioOriginal: 69.99,
    genero: "aventura",
    rating: "4.7",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Indiana_Jones_Great_Circle.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Indiana_Jones_Great_Circle.jpg",
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Indiana Jones and the Great Circle es una aventura de acción de Bethesda. Sigue a Indiana Jones en una misión global buscando artefactos antiguos y enfrentando enemigos mortales.",
    descuento: false,
    destacado: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 15,
    nombre: "Dragon's Dogma 2",
    consola: "ps5",
    precio: 59.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.5",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Dragons_Dogma_2_cover_art.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/4/42/Dragons_Dogma_2_cover_art.jpg",
      "https://images.unsplash.com/photo-1578496481421-da8a201f8e08?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Dragon's Dogma 2 continúa la tradición de combate épico y exploración en un mundo lleno de dragones y criaturas. Crea aliados y enfrenta desafíos legendarios en esta secuela de acción RPG.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 16,
    nombre: "College Football 25",
    consola: "xbox-series",
    precio: 49.99,
    precioOriginal: 69.99,
    genero: "deportes",
    rating: "4.4",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/4/46/College_Football_25_cover.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/4/46/College_Football_25_cover.jpg",
      "https://images.unsplash.com/photo-1574623452334-1b3cb77a46d1?w=600&h=800&fit=crop",
    ],
    descripcion:
      "College Football 25 regresa con la jugabilidad realista de EA Sports. Dirige tu equipo universitario a la gloria. Experimenta la pasión del fútbol americano universitario con ciclos de reclutamiento completos.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 17,
    nombre: "FC 25",
    consola: "nintendo-switch",
    precio: 44.99,
    precioOriginal: 59.99,
    genero: "deportes",
    rating: "4.5",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/EA_Sports_FC_25.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/e/e7/EA_Sports_FC_25.jpg",
      "https://images.unsplash.com/photo-1559591292-8a1ad7f1c1d6?w=600&h=800&fit=crop",
    ],
    descripcion:
      "EA Sports FC 25 en Switch te permite construir tu equipo de fútbol ideal. Compite en Ultimate Team, juega partidas rápidas y experimenta el fútbol global en tu consola portátil.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 18,
    nombre: "Tekken 8",
    consola: "pc",
    precio: 59.99,
    precioOriginal: 69.99,
    genero: "accion",
    rating: "4.6",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8c/Tekken_8_cover.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/8/8c/Tekken_8_cover.jpg",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Tekken 8 es el próximo capítulo de la legendaria saga de luchas. Domina combos complejos, lucha contra personajes icónicos y compite en línea en este juego de pelea de ritmo rápido.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 19,
    nombre: "Persona 3 Reload",
    consola: "ps5",
    precio: 54.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.7",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Persona_3_Reload_Cover.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/4/42/Persona_3_Reload_Cover.jpg",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Persona 3 Reload trae el clásico juego de rol a PS5 con una actualización completa. Vive una historia emocionante en una academia mientras luchas contra oscuros misterios sobrenaturales.",
    descuento: true,
    fechaLanzamiento: 2024,
  },
  {
    id: 20,
    nombre: "Final Fantasy VII Rebirth",
    consola: "ps5",
    precio: 69.99,
    precioOriginal: 69.99,
    genero: "rpg",
    rating: "4.8",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/Final_Fantasy_VII_Rebirth_Cover_Art.jpg",
    galeria: [
      "https://upload.wikimedia.org/wikipedia/en/3/3d/Final_Fantasy_VII_Rebirth_Cover_Art.jpg",
      "https://images.unsplash.com/photo-1566576912321-d58ddd641117?w=600&h=800&fit=crop",
    ],
    descripcion:
      "Final Fantasy VII Rebirth es la conclusión épica de la trilogía de remake. Cloud y sus aliados continúan su lucha contra Shinra en este RPG de acción con narrativa cinematográfica.",
    descuento: false,
    destacado: true,
    fechaLanzamiento: 2024,
  },
];

// PREMIOS DE LA RULETA
const premiosRuleta = [
  { id: 0, nombre: "Descuento 5%", descuento: 5, color: "#FF6B6B" },
  { id: 1, nombre: "Descuento 10%", descuento: 10, color: "#FFA500" },
  { id: 2, nombre: "Descuento 15%", descuento: 15, color: "#FFD700" },
  { id: 3, nombre: "Descuento 20%", descuento: 20, color: "#00FF00" },
  { id: 4, nombre: "Descuento 25%", descuento: 25, color: "#00CED1" },
  { id: 5, nombre: "Descuento 30%", descuento: 30, color: "#1E90FF" },
  { id: 6, nombre: "+50 Puntos", puntos: 50, color: "#9370DB" },
  { id: 7, nombre: "Envío Gratis", envioGratis: true, color: "#FF1493" },
];

// DATOS DE USUARIO
let usuarioActual = {
  nombre: null,
  email: null,
  puntos: 0,
  descuentoActual: 0,
  descuentoActivoIndex: undefined, // Índice del descuento aplicado
  envioGratisIndex: undefined, // Índice del envío gratis aplicado
  historialGiros: [],
  descuentosDisponibles: [], // Array de descuentos ganados: [{tipo: 'descuento', valor: 15, usado: false}, ...]
  esAdmin: false,
};

// USUARIO ADMIN
const usuarioAdmin = {
  email: "admin@thegarage.com",
  password: "admin123",
  nombre: "Admin",
};

//USUARIO USER
const usuarioUser = {
  email: "user@gmail.com",
  password: "user123",
  nombre: "User",
};

// CARRITO
let carrito = [];

// ESTADO DE FILTROS
let filtrosActivos = {
  consolas: ["all"],
  generos: [],
  precioMax: 100,
};

// PRODUCTO ACTUAL
let productoActual = null;

// RULETA
let ruletaGirando = false;

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

function cambiarPagina(nombrePagina) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => (page.style.display = "none"));

  const pagina = document.getElementById(nombrePagina);
  if (pagina) pagina.style.display = "block";
}

function irAlHome() {
  cambiarPagina("home-page");
  window.scrollTo(0, 0);
}

function irAlShop() {
  cambiarPagina("shop-page");
  renderizarProductos();

  // Agregar event listeners a filtros cuando entras a shop
  setTimeout(() => {
    document.querySelectorAll(".console-filter").forEach((checkbox) => {
      checkbox.removeEventListener("change", actualizarFiltrosConsolas);
      checkbox.addEventListener("change", actualizarFiltrosConsolas);
    });

    document.querySelectorAll(".genre-filter").forEach((checkbox) => {
      checkbox.removeEventListener("change", actualizarFiltrosGeneros);
      checkbox.addEventListener("change", actualizarFiltrosGeneros);
    });

    const priceSlider = document.getElementById("price-slider");
    if (priceSlider) {
      priceSlider.removeEventListener("input", actualizarFiltroPrecio);
      priceSlider.addEventListener("input", actualizarFiltroPrecio);
    }

    const resetBtn = document.querySelector(".reset-filters-btn");
    if (resetBtn) {
      resetBtn.removeEventListener("click", limpiarFiltros);
      resetBtn.addEventListener("click", limpiarFiltros);
    }

    const sortSelect = document.getElementById("sort");
    if (sortSelect) {
      sortSelect.removeEventListener("change", ordenarProductoEvent);
      sortSelect.addEventListener("change", ordenarProductoEvent);
    }
  }, 100);

  window.scrollTo(0, 0);
}

function irAlLogin() {
  cambiarPagina("login-page");
  window.scrollTo(0, 0);
}

function irAlCarrito() {
  cambiarPagina("cart-page");
  actualizarCarritoCompleto();
  window.scrollTo(0, 0);
  toggleCarrito();
}

function abrirRuleta() {
  if (usuarioActual.puntos < 100) {
    alert(
      "Necesitas 100 puntos para girar. Actualmente tienes: " +
        usuarioActual.puntos,
    );
    return;
  }
  cambiarPagina("wheel-page");
  dibujarRuleta();
  window.scrollTo(0, 0);
}

function cerrarRuleta() {
  irAlHome();
}

function irAlPerfil() {
  if (!usuarioActual.email) {
    irAlLogin();
    return;
  }
  cambiarPagina("profile-page");
  renderizarPerfil();
  window.scrollTo(0, 0);
}

// ============================================
// FUNCIONES DEL BANNER CON IMAGEN
// ============================================

function abrirImagenBanner() {
  document.getElementById("banner-input").click();
}

document.addEventListener("DOMContentLoaded", function () {
  const bannerInput = document.getElementById("banner-input");
  if (bannerInput) {
    bannerInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const imagenBanner = document.getElementById("banner-image");
          if (imagenBanner) {
            imagenBanner.src = event.target.result;
            mostrarMensajeExito(
              "🖼️ Imagen del banner actualizada correctamente",
            );
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// ============================================
// PRODUCTO INDIVIDUAL
// ============================================

function abrirProducto(productoId) {
  const producto = productosBase.find((p) => p.id === productoId);
  if (!producto) return;

  productoActual = producto;
  cambiarPagina("product-page");
  renderizarProductoDetalle();
  window.scrollTo(0, 0);
}

function renderizarProductoDetalle() {
  if (!productoActual) return;

  const p = productoActual;

  // Galería
  const galeriaHtml = p.galeria
    .map(
      (img, idx) => `
        <div class="gallery-item ${idx === 0 ? "active" : ""}" onclick="cambiarImagenPrincipal(${idx})">
            <img src="${img}" alt="Imagen ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;">
        </div>
    `,
    )
    .join("");

  const imagenPrincipalHtml = `<img src="${p.galeria[0]}" alt="${p.nombre}" class="product-detail-main-img">`;

  document.getElementById("product-gallery-items").innerHTML = galeriaHtml;
  document.getElementById("product-detail-main-image").innerHTML =
    imagenPrincipalHtml;

  // Información del producto
  document.getElementById("product-detail-name").textContent = p.nombre;
  document.getElementById("product-detail-console").textContent =
    obtenerNombreConsola(p.consola);
  document.getElementById("product-detail-genre").textContent =
    p.genero.charAt(0).toUpperCase() + p.genero.slice(1);
  document.getElementById("product-detail-rating").textContent = p.rating;
  document.getElementById("product-detail-year").textContent =
    p.fechaLanzamiento;

  document.getElementById("product-detail-price").textContent =
    `$${p.precio.toFixed(2)}`;
  if (p.descuento) {
    const descuentoPorcentaje = Math.round(
      ((p.precioOriginal - p.precio) / p.precioOriginal) * 100,
    );
    document.getElementById("product-detail-original-price").innerHTML =
      `<s>$${p.precioOriginal.toFixed(2)}</s> <span style="color: var(--danger);">-${descuentoPorcentaje}%</span>`;
    document.getElementById("product-detail-original-price").style.display =
      "inline";
  } else {
    document.getElementById("product-detail-original-price").style.display =
      "none";
  }

  document.getElementById("product-detail-description").textContent =
    p.descripcion;
}

function cambiarImagenPrincipal(indice) {
  if (!productoActual) return;

  const imagen = productoActual.galeria[indice];
  const mainImg = document.getElementById("product-detail-main-image");
  mainImg.innerHTML = `<img src="${imagen}" alt="${productoActual.nombre}" class="product-detail-main-img">`;

  // Actualizar items activos
  document.querySelectorAll(".gallery-item").forEach((item, idx) => {
    item.classList.toggle("active", idx === indice);
  });
}

// ============================================
// PERFIL DE USUARIO
// ============================================

function renderizarPerfil() {
  const adminBadge = usuarioActual.esAdmin ? " 👑 (Admin)" : "";
  document.getElementById("profile-name").textContent =
    usuarioActual.nombre + adminBadge;
  document.getElementById("profile-email").textContent = usuarioActual.email;
  document.getElementById("profile-points").textContent = usuarioActual.puntos;

  // Renderizar descuentos disponibles
  const descuentosContainer = document.getElementById("descuentos-disponibles");
  if (usuarioActual.descuentosDisponibles.length === 0) {
    descuentosContainer.innerHTML =
      '<p class="no-discounts">No tienes descuentos disponibles. ¡Realiza giros en la ruleta!</p>';
    return;
  }

  descuentosContainer.innerHTML = "";
  usuarioActual.descuentosDisponibles.forEach((descuento, index) => {
    if (!descuento.usado) {
      const card = document.createElement("div");
      card.className = "discount-card";

      if (descuento.tipo === "descuento") {
        card.innerHTML = `
                    <div class="discount-content">
                        <h4>${descuento.valor}% OFF</h4>
                        <p>Obtenido: ${descuento.fecha}</p>
                        <p class="discount-status">✓ Disponible</p>
                    </div>
                    <button class="use-discount-btn" onclick="usarDescuento(${index})">Usar en Carrito</button>
                `;
      } else if (descuento.tipo === "envioGratis") {
        card.innerHTML = `
                    <div class="discount-content">
                        <h4>🚚 Envío Gratis</h4>
                        <p>Obtenido: ${descuento.fecha}</p>
                        <p class="discount-status">✓ Disponible</p>
                    </div>
                    <button class="use-discount-btn" onclick="usarDescuento(${index})">Usar en Carrito</button>
                `;
      }

      descuentosContainer.appendChild(card);
    }
  });
}

function usarDescuento(index) {
  const descuento = usuarioActual.descuentosDisponibles[index];

  if (descuento.tipo === "descuento") {
    usuarioActual.descuentoActual = descuento.valor;
    usuarioActual.descuentoActivoIndex = index;
    descuento.usado = true;
    mostrarMensajeExito(
      `✓ Descuento de ${descuento.valor}% aplicado al carrito`,
    );
  } else if (descuento.tipo === "envioGratis") {
    usuarioActual.envioGratis = true;
    usuarioActual.envioGratisIndex = index;
    descuento.usado = true;
    mostrarMensajeExito("✓ Envío gratis aplicado al carrito");
  }

  renderizarPerfil();
  actualizarCarritoCompleto();

  // Navegar al carrito si está en perfil
  if (document.getElementById("profile-page").style.display !== "none") {
    setTimeout(() => irAlCarrito(), 500);
  }
}

function iniciarEdicionPerfil() {
  const formEdit = document.getElementById("profile-edit-form");
  const profileView = document.getElementById("profile-view");

  formEdit.style.display = "block";
  profileView.style.display = "none";

  // Llenar formulario con datos actuales
  document.getElementById("edit-nombre").value = usuarioActual.nombre;
  document.getElementById("edit-email").value = usuarioActual.email;
}

function cancelarEdicion() {
  document.getElementById("profile-edit-form").style.display = "none";
  document.getElementById("profile-view").style.display = "block";
}

function guardarPerfil(event) {
  event.preventDefault();

  const nuevoNombre = document.getElementById("edit-nombre").value.trim();
  const nuevoEmail = document.getElementById("edit-email").value.trim();

  if (!nuevoNombre || !nuevoEmail) {
    alert("Por favor completa todos los campos");
    return;
  }

  usuarioActual.nombre = nuevoNombre;
  usuarioActual.email = nuevoEmail;

  mostrarMensajeExito("✓ Perfil actualizado correctamente");
  cancelarEdicion();
  renderizarPerfil();
}

function cerrarSesion() {
  if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
    usuarioActual = {
      nombre: null,
      email: null,
      puntos: 0,
      descuentoActual: 0,
      descuentoActivoIndex: undefined,
      envioGratisIndex: undefined,
      historialGiros: [],
      descuentosDisponibles: [],
      esAdmin: false,
    };
    carrito = [];
    actualizarPuntosDisplay();
    actualizarCarrito();
    mostrarMensajeExito("✓ Sesión cerrada");
    irAlHome();
  }
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Obtener todos los productos o filtrados
function obtenerProductos() {
  let productos = [...productosBase];

  // Filtrar por consolas
  if (!filtrosActivos.consolas.includes("all")) {
    productos = productos.filter((p) =>
      filtrosActivos.consolas.includes(p.consola),
    );
  }

  // Filtrar por género
  if (filtrosActivos.generos.length > 0) {
    productos = productos.filter((p) =>
      filtrosActivos.generos.includes(p.genero),
    );
  }

  // Filtrar por precio
  productos = productos.filter((p) => {
    const precio = p.precio || 0;
    return precio <= filtrosActivos.precioMax;
  });

  return productos;
}

// Renderizar productos en el grid
function renderizarProductos(productos = obtenerProductos()) {
  const grid = document.getElementById("products-grid");

  if (productos.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #b0b0b0; padding: 40px;">No se encontraron productos con estos filtros.</p>';
    return;
  }

  grid.innerHTML = productos
    .map(
      (producto) => `
        <div class="product-card" onclick="abrirProducto(${producto.id})">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Crect fill=%22%231a1f3a%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%230088FF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${producto.nombre.substring(0, 20)}%3C/text%3E%3C/svg%3E'">
                ${producto.descuento ? `<div class="product-badge">-${Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100)}%</div>` : ""}
            </div>
            <div class="product-content">
                <div class="product-console">${obtenerNombreConsola(producto.consola)}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-year">🗓️ ${producto.fechaLanzamiento}</div>
                <div class="product-price">
                    <span class="current-price">$${producto.precio.toFixed(2)}</span>
                    ${producto.descuento ? `<span class="original-price">$${producto.precioOriginal.toFixed(2)}</span>` : ""}
                    ${producto.gratis ? '<span class="original-price">GRATIS</span>' : ""}
                </div>
                <div class="product-rating">⭐ ${producto.rating}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id}); event.stopPropagation();">
                        Añadir
                    </button>
                    <button class="wishlist-btn" onclick="agregarALista(${producto.id}); event.stopPropagation();">❤️</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderizarDestacados() {
  const grid = document.getElementById("featured-grid");
  const destacados = productosBase.filter((p) => p.destacado);

  grid.innerHTML = destacados
    .map(
      (producto) => `
        <div class="product-card" onclick="abrirProducto(${producto.id})">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Crect fill=%22%231a1f3a%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%230088FF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${producto.nombre.substring(0, 20)}%3C/text%3E%3C/svg%3E'">
                ${producto.descuento ? `<div class="product-badge">-${Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100)}%</div>` : ""}
            </div>
            <div class="product-content">
                <div class="product-console">${obtenerNombreConsola(producto.consola)}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-year">🗓️ ${producto.fechaLanzamiento}</div>
                <div class="product-price">
                    <span class="current-price">$${producto.precio.toFixed(2)}</span>
                    ${producto.descuento ? `<span class="original-price">$${producto.precioOriginal.toFixed(2)}</span>` : ""}
                </div>
                <div class="product-rating">⭐ ${producto.rating}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id}); event.stopPropagation();">Añadir</button>
                    <button class="wishlist-btn" onclick="agregarALista(${producto.id}); event.stopPropagation();">❤️</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderizarDescuentos() {
  const grid = document.getElementById("discounts-grid");
  const mayoresDescuentos = productosBase
    .filter((p) => p.descuento)
    .sort((a, b) => {
      const descA = ((a.precioOriginal - a.precio) / a.precioOriginal) * 100;
      const descB = ((b.precioOriginal - b.precio) / b.precioOriginal) * 100;
      return descB - descA;
    })
    .slice(0, 8);

  grid.innerHTML = mayoresDescuentos
    .map(
      (producto) => `
        <div class="product-card" onclick="abrirProducto(${producto.id})">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Crect fill=%22%231a1f3a%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%230088FF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${producto.nombre.substring(0, 20)}%3C/text%3E%3C/svg%3E'">
                <div class="product-badge">-${Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100)}%</div>
            </div>
            <div class="product-content">
                <div class="product-console">${obtenerNombreConsola(producto.consola)}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-year">🗓️ ${producto.fechaLanzamiento}</div>
                <div class="product-price">
                    <span class="current-price">$${producto.precio.toFixed(2)}</span>
                    <span class="original-price">$${producto.precioOriginal.toFixed(2)}</span>
                </div>
                <div class="product-rating">⭐ ${producto.rating}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id}); event.stopPropagation();">Añadir</button>
                    <button class="wishlist-btn" onclick="agregarALista(${producto.id}); event.stopPropagation();">❤️</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Obtener nombre de consola
function obtenerNombreConsola(consola) {
  const nombres = {
    ps5: "PlayStation 5",
    ps4: "PlayStation 4",
    "xbox-series": "Xbox Series",
    "xbox-one": "Xbox One",
    "nintendo-switch": "Switch",
    pc: "PC",
    retro: "Retro",
  };
  return nombres[consola] || consola;
}

// Agregar producto al carrito
function agregarAlCarrito(productoId) {
  const producto = productosBase.find((p) => p.id === productoId);

  const itemCarrito = carrito.find((item) => item.id === productoId);

  if (itemCarrito) {
    itemCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
  mostrarMensajeExito(`${producto.nombre} añadido al carrito`);
}

// Agregar a lista de deseos
function agregarALista(productoId) {
  const producto = productosBase.find((p) => p.id === productoId);
  mostrarMensajeExito(`${producto.nombre} añadido a tu lista de deseos`);
}

// Actualizar carrito en UI
function actualizarCarrito() {
  const cartCount = document.querySelector(".cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartItems = document.getElementById("cart-items");

  // Actualizar contador
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  cartCount.textContent = totalItems;

  // Actualizar total
  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );
  cartTotal.textContent = `$${total.toFixed(2)}`;

  // Renderizar items
  if (carrito.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
  } else {
    cartItems.innerHTML = carrito
      .map(
        (item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h3>${item.nombre}</h3>
                    <p>${obtenerNombreConsola(item.consola)} x${item.cantidad}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="cart-item-price">$${(item.precio * item.cantidad).toFixed(2)}</span>
                    <button class="remove-item-btn" onclick="eliminarDelCarrito(${index})">✕</button>
                </div>
            </div>
        `,
      )
      .join("");
  }

  actualizarPuntosDisplay();
}

function actualizarCarritoCompleto() {
  const cartPageItems = document.getElementById("cart-page-items");
  const subtotal = document.getElementById("subtotal");
  const descuentoTotal = document.getElementById("descuento-total");
  const descuentoActivoBox = document.getElementById("descuento-activo-box");
  const puntosGanancia = document.getElementById("puntos-ganancia");
  const totalCart = document.getElementById("total-cart");

  // Actualizar descuentos disponibles en carrito
  const descuentosDisponibles = document.getElementById(
    "cart-available-discounts",
  );
  const descuentosList = document.getElementById("cart-discounts-list");

  const descuentosActivos = usuarioActual.descuentosDisponibles.filter(
    (d) => !d.usado,
  );
  if (descuentosActivos.length > 0) {
    descuentosDisponibles.style.display = "block";
    descuentosList.innerHTML = descuentosActivos
      .map((descuento, index) => {
        const indiceOriginal =
          usuarioActual.descuentosDisponibles.indexOf(descuento);
        const isActive =
          usuarioActual.descuentoActivoIndex === indiceOriginal ||
          usuarioActual.envioGratisIndex === indiceOriginal;
        return `
                <div class="cart-discount-item ${isActive ? "active" : ""}">
                    <span>${descuento.tipo === "descuento" ? `${descuento.valor}% OFF` : "🚚 Envío"}</span>
                    <button class="apply-discount-btn" onclick="usarDescuento(${indiceOriginal})">
                        ${isActive ? "✓ Activo" : "Usar"}
                    </button>
                </div>
            `;
      })
      .join("");
  } else {
    descuentosDisponibles.style.display = "none";
  }

  // Mostrar descuento activo
  if (
    usuarioActual.descuentoActual > 0 &&
    usuarioActual.descuentoActivoIndex !== undefined
  ) {
    const descuentoActivo =
      usuarioActual.descuentosDisponibles[usuarioActual.descuentoActivoIndex];
    if (descuentoActivo && descuentoActivoBox) {
      descuentoActivoBox.style.display = "block";
      descuentoActivoBox.innerHTML = `
                <div class="descuento-activo-content">
                    <span class="descuento-activo-label">💰 Descuento Activo:</span>
                    <span class="descuento-activo-valor">${descuentoActivo.valor}% OFF</span>
                </div>
            `;
    }
  } else {
    if (descuentoActivoBox) descuentoActivoBox.style.display = "none";
  }

  if (carrito.length === 0) {
    cartPageItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    subtotal.textContent = "$0.00";
    descuentoTotal.textContent = "$0.00";
    puntosGanancia.textContent = "0";
    totalCart.textContent = "$0.00";
    return;
  }

  const subtotalValue = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );
  const descuentoValue = (subtotalValue * usuarioActual.descuentoActual) / 100;
  const totalValue = subtotalValue - descuentoValue;
  const puntosGanar = Math.floor(totalValue * 0.1);

  cartPageItems.innerHTML = carrito
    .map(
      (item, index) => `
        <div class="cart-page-item">
            <div class="cart-item-img">
                <img src="${item.imagen}" alt="${item.nombre}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
            </div>
            <div class="cart-item-details">
                <h3>${item.nombre}</h3>
                <div class="cart-item-console">${obtenerNombreConsola(item.consola)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button class="quantity-btn" onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-price">
                <div class="cart-price">$${(item.precio * item.cantidad).toFixed(2)}</div>
                <button class="remove-cart-btn" onclick="eliminarDelCarrito(${index})">🗑️</button>
            </div>
        </div>
    `,
    )
    .join("");

  subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
  descuentoTotal.textContent = `-$${descuentoValue.toFixed(2)}`;
  puntosGanancia.textContent = puntosGanar;
  totalCart.textContent = `$${totalValue.toFixed(2)}`;
}

function cambiarCantidad(index, delta) {
  carrito[index].cantidad += delta;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  actualizarCarrito();
  actualizarCarritoCompleto();
}

// Eliminar del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Mostrar mensaje de éxito
function mostrarMensajeExito(mensaje) {
  console.log("✅ " + mensaje);
  // Aquí se puede añadir un toast notification en el futuro
}

// ============================================
// GESTIÓN DE FILTROS
// ============================================

// Actualizar filtros de consolas
function actualizarFiltrosConsolas() {
  const allCheckbox = document.querySelector('.console-filter[value="all"]');
  const otrosCheckboxes = document.querySelectorAll(
    '.console-filter:not([value="all"])',
  );

  const seleccionadas = Array.from(otrosCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  // Si seleccionan "Todas"
  if (allCheckbox && allCheckbox.checked) {
    otrosCheckboxes.forEach((cb) => (cb.checked = false));
    filtrosActivos.consolas = ["all"];
  }
  // Si seleccionan alguna consola específica
  else if (seleccionadas.length > 0) {
    if (allCheckbox) allCheckbox.checked = false;
    filtrosActivos.consolas = seleccionadas;
  }
  // Si no hay nada seleccionado, vuelve a "Todas"
  else {
    if (allCheckbox) allCheckbox.checked = true;
    filtrosActivos.consolas = ["all"];
  }

  console.log("Filtros activos:", filtrosActivos);
  renderizarProductos();
}

// Actualizar filtros de géneros
function actualizarFiltrosGeneros() {
  const checkboxes = document.querySelectorAll(".genre-filter");
  filtrosActivos.generos = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
  renderizarProductos();
}

// Actualizar filtro de precio
function actualizarFiltroPrecio() {
  const slider = document.getElementById("price-slider");
  const display = document.getElementById("price-value");
  filtrosActivos.precioMax = parseInt(slider.value);
  display.textContent = filtrosActivos.precioMax;
  renderizarProductos();
}

// Limpiar filtros
function limpiarFiltros() {
  // Reinicializar estado
  filtrosActivos = {
    consolas: ["all"],
    generos: [],
    precioMax: 100,
  };

  // Actualizar checkboxes
  const allCheckbox = document.querySelector('.console-filter[value="all"]');
  if (allCheckbox) allCheckbox.checked = true;

  document
    .querySelectorAll('.console-filter:not([value="all"])')
    .forEach((cb) => {
      cb.checked = false;
    });

  document.querySelectorAll(".genre-filter").forEach((cb) => {
    cb.checked = false;
  });

  // Actualizar slider
  const slider = document.getElementById("price-slider");
  if (slider) {
    slider.value = 100;
    document.getElementById("price-value").textContent = "100";
  }

  renderizarProductos();
}

// ============================================
// SISTEMA DE LOGIN
// ============================================

function procesarLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validar si es usuario admin
  if (email === usuarioAdmin.email && password === usuarioAdmin.password) {
    usuarioActual.email = usuarioAdmin.email;
    usuarioActual.nombre = usuarioAdmin.nombre;
    usuarioActual.puntos = 5000; // Admin tiene muchos puntos
    usuarioActual.esAdmin = true;
    document.getElementById("login-form").reset();
    mostrarMensajeExito(
      `¡Bienvenido ${usuarioActual.nombre}! 👑 (Panel Administrador)`,
    );
  } else if (email === usuarioUser.email && password === usuarioUser.password) {
    // Validar si es usuario User predefinido
    usuarioActual.email = usuarioUser.email;
    usuarioActual.nombre = usuarioUser.nombre;
    usuarioActual.puntos = 500; // Usuario User comienza con 500 puntos
    usuarioActual.esAdmin = false;
    document.getElementById("login-form").reset();
    mostrarMensajeExito(
      `¡Bienvenido ${usuarioActual.nombre}! Tienes ${usuarioActual.puntos} puntos`,
    );
  } else {
    // Usuario regular
    usuarioActual.email = email;
    usuarioActual.nombre = email.split("@")[0];
    usuarioActual.puntos = Math.floor(Math.random() * 500) + 100;
    usuarioActual.esAdmin = false;
    document.getElementById("login-form").reset();
    mostrarMensajeExito(
      `¡Bienvenido ${usuarioActual.nombre}! Tienes ${usuarioActual.puntos} puntos`,
    );
  }

  actualizarPuntosDisplay();
  irAlHome();
}

function mostrarRegistro() {
  alert("Sistema de registro en desarrollo");
}

function actualizarPuntosDisplay() {
  document.getElementById("puntos-usuario").textContent = usuarioActual.puntos;
  document.getElementById("puntos-home").textContent = usuarioActual.puntos;
  document.getElementById("puntos-wheel").textContent = usuarioActual.puntos;
  document.getElementById("spin-btn-home").disabled =
    usuarioActual.puntos < 100;

  // Actualizar botón de usuario con indicador de admin
  const userBtn = document.getElementById("user-btn-header");
  if (userBtn && usuarioActual.email) {
    if (usuarioActual.esAdmin) {
      userBtn.textContent = "👑 Admin";
    } else {
      userBtn.textContent = "👤 Cuenta";
    }
  }

  const porcentaje = (usuarioActual.puntos / 100) * 100;
  document.getElementById("progress-fill").style.width =
    Math.min(porcentaje, 100) + "%";
}

// ============================================
// SISTEMA DE RULETA
// ============================================

function dibujarRuleta() {
  const canvas = document.getElementById("wheelCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;

  const sliceAngle = (2 * Math.PI) / premiosRuleta.length;

  premiosRuleta.forEach((premio, index) => {
    const startAngle = index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    ctx.fillStyle = premio.color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    const textAngle = startAngle + sliceAngle / 2;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(textAngle);
    ctx.translate(radius * 0.65, 0);
    ctx.rotate(textAngle + Math.PI / 2);

    ctx.fillStyle = "#000";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(premio.nombre, 0, 0);

    ctx.restore();
  });
}

function girarRuleta() {
  if (ruletaGirando) return;
  if (usuarioActual.puntos < 100) {
    alert("Necesitas 100 puntos");
    return;
  }

  const spinBtn = document.getElementById("spin-wheel-btn");
  spinBtn.disabled = true;
  ruletaGirando = true;

  usuarioActual.puntos -= 100;

  const rotaciones = 5 + Math.random() * 5;
  const spinDuration = 3000;
  const startTime = Date.now();

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / spinDuration;

    if (progress < 1) {
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const canvas = document.getElementById("wheelCanvas");
      canvas.style.transform = `rotate(${rotaciones * 360 * easeOut}deg)`;

      requestAnimationFrame(animate);
    } else {
      const premioIndex = Math.floor(Math.random() * premiosRuleta.length);
      const premio = premiosRuleta[premioIndex];

      usuarioActual.historialGiros.push(premio);

      if (premio.descuento) {
        // Guardar descuento disponible para usar después
        usuarioActual.descuentosDisponibles.push({
          tipo: "descuento",
          valor: premio.descuento,
          usado: false,
          fecha: new Date().toLocaleDateString("es-ES"),
        });
        usuarioActual.descuentoActual = premio.descuento;
        document.getElementById("ultimo-descuento").textContent =
          `¡Ganaste ${premio.descuento}% de descuento! Disponible en tu perfil.`;
      } else if (premio.puntos) {
        usuarioActual.puntos += premio.puntos;
        document.getElementById("ultimo-descuento").textContent =
          `¡Ganaste ${premio.puntos} puntos extras!`;
      } else if (premio.envioGratis) {
        usuarioActual.descuentosDisponibles.push({
          tipo: "envioGratis",
          usado: false,
          fecha: new Date().toLocaleDateString("es-ES"),
        });
        document.getElementById("ultimo-descuento").textContent =
          `¡Ganaste envío gratis! Disponible en tu perfil.`;
      }

      actualizarPuntosDisplay();

      spinBtn.disabled = false;
      ruletaGirando = false;

      setTimeout(() => {
        alert(`¡Felicidades! Ganaste: ${premio.nombre}`);
      }, 500);
    }
  };

  animate();
}

// ============================================
// GESTIÓN DEL CARRITO LATERAL
// ============================================

function toggleCarrito() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("overlay");

  cartSidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// ============================================
// BÚSQUEDA
// ============================================

function buscarProductos() {
  const searchInput = document.querySelector(".search-input");
  const termino = searchInput.value.toLowerCase().trim();

  if (termino === "") {
    renderizarProductos();
    return;
  }

  const resultados = productosBase.filter(
    (p) =>
      p.nombre.toLowerCase().includes(termino) ||
      p.genero.toLowerCase().includes(termino),
  );

  renderizarProductos(resultados);
}

// ============================================
// ORDENAMIENTO
// ============================================

function ordenarProductoEvent(e) {
  ordenarProductos(e.target.value);
}

function ordenarProductos(criterio) {
  let productos = obtenerProductos();

  switch (criterio) {
    case "precio-asc":
      productos.sort((a, b) => a.precio - b.precio);
      break;
    case "precio-desc":
      productos.sort((a, b) => b.precio - a.precio);
      break;
    case "nombre":
      productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case "nuevos":
      productos.sort((a, b) => b.id - a.id);
      break;
    default:
      // Relevancia (sin cambios)
      break;
  }

  renderizarProductos(productos);
}

// ============================================
// INICIALIZACIÓN
// ============================================

function inicializar() {
  // Eventos del carrito
  const cartToggle = document.getElementById("cart-toggle");
  const closeCart = document.getElementById("close-cart");
  const overlay = document.getElementById("overlay");

  if (cartToggle) cartToggle.addEventListener("click", toggleCarrito);
  if (closeCart) closeCart.addEventListener("click", toggleCarrito);
  if (overlay) overlay.addEventListener("click", toggleCarrito);

  // Eventos de búsqueda
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");
  if (searchBtn) searchBtn.addEventListener("click", buscarProductos);
  if (searchInput)
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") buscarProductos();
    });

  // Evento de login
  const userBtn = document.getElementById("user-btn-header");
  if (userBtn) {
    userBtn.addEventListener("click", () => {
      if (!usuarioActual.email) {
        irAlLogin();
      } else {
        irAlPerfil();
      }
    });
  }

  // Renderizar página de inicio
  renderizarDestacados();
  renderizarDescuentos();
  actualizarPuntosDisplay();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}
