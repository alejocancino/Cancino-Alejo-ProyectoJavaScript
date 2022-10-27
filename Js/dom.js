const carrito = [];

const path = location.pathname;

const container = document.querySelector("div.containerTienda");
const contenedorCarrito = document.querySelector("#lista-carrito");
const vaciarCarrito = document.querySelector("#confirmarVaciar");
const divCheckOut = document.querySelector("#div-checkout");

const btnComprar = document.querySelector("#btnComprarCheckout");

const habilitarBotones = () => {
  const btns = document.querySelectorAll(".button-add-tienda");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      sumarAlCarrito(e);
    });
  });
};

const cargarNfts = () => {
  container.innerHTML = "";
  ListaNfts.forEach((producto) => {
    container.innerHTML += generarCard(producto);
  });
  habilitarBotones();
};
if (path.includes("section/tienda.html")) {
  cargarNfts();
}

const sumarAlCarrito = (e) => {
  let resultado = ListaNfts.find((elemento) => elemento.codigo === e.target.id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    carritoALocalStg();
    mostrarCarritoHtml();
    toast(`${resultado.nombre} Se agregó al carrito`);
    divCheckOut.innerHTML = generarBtnCheckOut();
  }
};

const toast = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 2500,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    style: {
      background: "$secondary",
      border: "solid 1px #fff",
    },
  }).showToast();
};

const carritoALocalStg = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

const StorageACarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoEnStorage = JSON.parse(localStorage.getItem("carrito"));
    carritoEnStorage.forEach((producto) => carrito.push(producto));
  }
};
StorageACarrito();

const mostrarCarritoHtml = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += generarNftSeleccionado(producto);
  });
};

if (carrito.length > 0) {
  divCheckOut.innerHTML = generarBtnCheckOut();
  mostrarCarritoHtml();
}

const fnVaciarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  localStorage.removeItem("carrito");
  carrito.length = 0;
  divCheckOut.innerHTML = "";
  recuperarCartCheckout();
  cargarCarritoCheckOut();
};
vaciarCarrito.addEventListener("click", fnVaciarCarrito);

const btnCheckOut = document.querySelector("#buttonCheckout");

const redireccionCheckout = () => {
    if(path.includes("index.html")){
        btnCheckOut.addEventListener('click', () => {window.location.href = "section/checkout.html"})
    } else if (path.includes("section/tienda.html") || path.includes("section/cotizacionesCrypto.html")) {
        btnCheckOut?.addEventListener('click', () => {window.location.href = "checkout.html"})
    }

}
redireccionCheckout();


const recuperarCartCheckout = () => {
  if (localStorage.getItem("carrito")) {
      let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
          carritoRecuperado.forEach(producto => carrito.push() )
  } 
}
if (path.includes("section/checkout.html")) {
  recuperarCartCheckout();
  cargarCarritoCheckOut();
}


// :)
const mensajeCompra = () => {
  Toastify({
    text: "Gracias por apretarme pero todavia no funciono :(",
    duration: 3500,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
      background: "#FF0101",
      border: "solid 1px #fff",
    },
  }).showToast();
}
btnComprar.addEventListener('click', mensajeCompra);