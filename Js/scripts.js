let productos = [];
const carrito = []; // Declaracion array cararito

const dbUrl = "../db/nfts.json";

const ubicacion = location.href;
 // Selectores para manejo de DOM
const container = document.querySelector("div.containerTienda");
const contenedorCarrito = document.querySelector("#lista-carrito");
const vaciarCarrito = document.querySelector("#confirmarVaciar");
const divCheckOut = document.querySelector("#div-checkout");
const divVaciarCarrito = document.querySelector("#div-vaciarCarrito")
const btnComprar = document.querySelector("#btnComprarCheckout");


// Seleccion y habilitacion de botones de CARDS seccion tienda
const habilitarBotones = () => {
    const btns = document.querySelectorAll(".button-add-tienda");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        sumarAlCarrito(e);
      });
    });
  };

  // generacion ASINCRONA ASYNC - AWAIT
const cargarNfts = async() => {
    let generoHtml = ""; 
    let btnOnOff = true;

      try { 
        const response = await fetch(dbUrl);
            productos = await response.json()
            productos.forEach(producto => generoHtml += generarCard(producto) );
      } catch (error) {  
            // agregar html de error
            btnOnOff = false;
      } finally {
        // al container le asigno lo guardado en la variable.
          container.innerHTML = generoHtml;
          btnOnOff && habilitarBotones()
      }

}

// Valido que el usuario este situado en seccion tienda y llamo a la funcion cargarNFTS
if (ubicacion.includes("section/tienda.html")) {
    cargarNfts();
}

// Agregar al carrito
const sumarAlCarrito = (e) => {
    let resultado = productos.find((elemento) => elemento.codigo === e.target.id);
    if (resultado !== undefined) {
      carrito.push(resultado);
      carritoALocalStg();
      mostrarCarritoHtml();
      toast(`${resultado.nombre} Se agregó al carrito`);
      divCheckOut.innerHTML = generarBtnCheckOut();
      divVaciarCarrito.innerHTML = generarBtnVaciarCarrito();
    }
};

// Toast agregar al carrito
const toast = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 2500,
    close: true,
    gravity: "top",
    position: "left", 
    style: {
      background: "$secondary",
      border: "solid 1px #fff",
    },
  }).showToast();
};

// guardar carrito en local Storage
const carritoALocalStg = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

// Info guardada en storage al carrito
const StorageACarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoEnStorage = JSON.parse(localStorage.getItem("carrito"));
    carritoEnStorage.forEach((producto) => carrito.push(producto));
  }
};
StorageACarrito();

// Generacion del carrito html
const mostrarCarritoHtml = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += generarNftSeleccionado(producto);
  });
};

// Vaciar carrito del local storage y del html
const fnVaciarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  localStorage.removeItem("carrito");
  carrito.length = 0;
  divCheckOut.innerHTML = "";
  divVaciarCarrito.innerHTML = "";
  recuperarCartCheckout();
  cargarCarritoCheckOut();
};
vaciarCarrito.addEventListener("click", fnVaciarCarrito);

const btnCheckOut = document.querySelector("#buttonCheckout");

// recuperar carrito para el checkout
const recuperarCartCheckout = () => {
  if (localStorage.getItem("carrito")) {
      let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
          carritoRecuperado.forEach(producto => carrito.push() )
  } 
}

// validar ubicacion y llamar funciones
if (ubicacion.includes("section/checkout.html")) {
  recuperarCartCheckout();
  cargarCarritoCheckOut();
}

// Validacion para mostrar carrito y botones del carrito
if (carrito.length > 0) {
  mostrarCarritoHtml();
  divCheckOut.innerHTML = generarBtnCheckOut();
  divVaciarCarrito.innerHTML = generarBtnVaciarCarrito();
}
