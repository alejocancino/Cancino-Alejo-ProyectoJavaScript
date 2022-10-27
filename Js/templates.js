// CONSTRUCTORES
class GenerarNFT {
    constructor(nombre, codigo, precioSubasta, precioAhora) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.precioAhora = precioAhora;
    }
  }
// --------------------------------------------------

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

const generarBtnCheckOut = () => {
  return `
    <button type="button" id="buttonCheckout" class="btn btn-primary">Check-Out</button>
    `;
};


const cargarCarritoCheckOut = () => {
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