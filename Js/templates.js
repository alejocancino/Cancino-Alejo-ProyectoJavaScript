// CONSTRUCTORES
class GenerarNFT {
    constructor(nombre, codigo, precioAhora) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.precioAhora = precioAhora;
    }
  }
// --------------------------------------------------

// Template de card
const generarCard = (nft) => {
  return `<div class="card m-3" style="width: 18rem;">
            <h1 class="text-center fs-1 m-5">${nft.imagen}</h1>
                <div class="card-body">
                <h3 class="card-title fw-bold">${nft.nombre}</h3>
                <h3 class="card-title fw-bold">${nft.codigo}</h3>
                <h3 class="card-title fw-bold">BTC: ${nft.precioAhora}</h3>
                    <button class="btn btn-primary button-add-tienda m-0 mt-2" id="${nft.codigo}">Añadir</button>
                </div>
            </div>`;
};

// template de card seleccionada para generar en el carrito
const generarNftSeleccionado = (productoSelec) => {
  return `
        <div class="col-md-4 col-5 card card-body m-4">
            <ul class="p-0 m-1 gap-4 w-100">
                <li class="fs-3 m-2 mt-3"> ${productoSelec.imagen}</li>
                <li class="fs-3 m-2 mt-3"> ${productoSelec.codigo}</li>
                <li class="fs-3 m-2 mt-3"> ${productoSelec.nombre}</li>
            </ul>
        </div>
    `;
};

// generar btn para checkout
const generarBtnCheckOut = () => {
  return `
    <button type="button" id="buttonCheckout" class="btn btn-primary d-block"><a class="text-white" href="../section/checkout.html">Check Out</a></button>
    `;
};
// generar btn vaciar
const generarBtnVaciarCarrito = () => {
  return `
  <button type="button" id="vaciar-carrito" class="btn btn-danger m-0" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">Vaciar carrito
  </button>
  `
}

// Template para generar carrito en checkout
const cargarCarritoCheckOut = () => {
  if(ubicacion.includes("section/checkout.html")) {
    let tablaHtml = "";
    const tbody = document.querySelector("tbody");

        carrito.forEach(nft => { 
            tablaHtml += `<tr class="fs-3">
                            <td>${nft.imagen}</td>
                            <td>${nft.nombre}</td>
                            <td>${nft.codigo}</td>
                            <td>${nft.precioAhora}</td>
                        </tr>`
        })
        tbody.innerHTML = tablaHtml;
  }
}

