const usdAmount = document.querySelector("#usd-amount");
const usdText = document.querySelector("#usd-text");
const alertaCompra = document.querySelector('#btnComprarCheckout');
const totalSuma = document.querySelector('#sumaProductos');
const totalDolares = document.querySelector('#valorEnDolar');

// Declaro una variable, accedo al objeto, declaro un acumulador y accedo al valor precio Ahora del objeto y lo sumo 
const nPrecio = Object.values(carrito).reduce( (acc, {precioAhora}) => acc + precioAhora , 0);

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));
    
    
const displayData = data => {
    const USD = data.bpi.USD.rate_float;
    usdAmount.innerHTML = `${USD}`;
    usdText.innerHTML = `U$D`
    totalDolares.innerHTML = `U$D ${USD * nPrecio}`;
    mostrarPrecio();
}

const mensajeCompra = () => {
    Swal.fire({
        title: 'Gracias por su compra',
        width: 'cover',
        padding: '3em',
        color: '#716add',
        confirmButtonText:'Volver al inicio',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/imgs/nft.gif")
          left top
          no-repeat
          `
      }).then((result) => {
            if (result.isConfirmed) {
                window.location = "../index.html"
            } 
      })
      fnVaciarCarrito();
}
alertaCompra.addEventListener('click', mensajeCompra);



const mostrarPrecio = () => {
    totalSuma.classList.add("fs-1", "d-flex");
    totalSuma.innerHTML = `₿ ${nPrecio}`;
    totalDolares.classList.add("fs-1", "d-flex")
    
}
