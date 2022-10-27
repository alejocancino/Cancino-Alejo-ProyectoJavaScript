
// Listeners
const btnIniciar = document.querySelector("#btnIniciarApp");
btnIniciar.addEventListener("click", iniciarApp);
// --------------------------------------------------

function iniciarApp() {
  let nombreUsuario = prompt("Bienvenido, ingrese su nombre por favor");
  if (nombreUsuario == null || nombreUsuario == "") {
    alert("Ingrese correctamente su nombre por favor");
    iniciarApp();
  } else {
    let tipoUsuario = prompt(`${nombreUsuario}, escriba el rol que posee: 
        👨‍💻 Moderador
        🤵 Cliente`);

    //Validacion previa
    if (tipoUsuario == null) {
    } else {
      if (tipoUsuario.toUpperCase() == "MODERADOR") {
        let accionesModerador = prompt(`¿Qué acción desea realizar?
                Crear NFT : 1
                Eliminar NFT : 2
                Consultar Listado: 3
                Salir : 4`);

        if (accionesModerador == 1) {
          solicitarDatosNtf();
        } else if (accionesModerador == 2) {
          alert(
            "El metodo de eliminación aún está en desarrollo. Gracias por su paciencia."
          );
        } else if (accionesModerador == 3) {
          listadoNfts();
        }
      } else if (tipoUsuario.toUpperCase() == "CLIENTE") {
        let accionesCliente = prompt(`¿Qué acción desea realizar?:
                     Ver listado de NFT : 1
                     Agregar NFT al carrito: 2  
                 `);
        if (accionesCliente == 1) {
          listadoNfts();
        } else if (accionesCliente == 2) {
          agregarAlCarrito();
        }
      }
    }
  }
}

// -----------------------------------------------------

function solicitarDatosNtf() {
  let nombre = prompt("Ingrese el nombre");
  let codigo = prompt("Ingrese el codigo");
  let precioSubasta = parseInt(prompt("Ingrese el precio de subasta en BTC"));
  let precioAhora = parseInt(
    prompt("Ingrese el precio de compra inmediata en BTC")
  );

  if (
    nombre == "" ||
    codigo == "" ||
    precioSubasta == "" ||
    precioAhora == ""
  ) {
    alert("Los datos se cargaron de forma incorrecta, no se creara el NFT");
    solicitarDatosNtf();
  } else {
    crearNft(nombre, codigo, precioSubasta, precioAhora);
  }
}

function crearNft(nombre, codigo, precioSubasta, precioAhora) {
  let nuevoNft = new NFT(nombre, codigo, precioSubasta, precioAhora);

  ListaNFts.push(nuevoNft);
  alert(`Los Nfts disponibles son:`);

  listadoNfts();
}

function listadoNfts() {
  ListaNFts.map((nft) => {
    return `
         ${nft.nombre}
         ${nft.codigo}
         ${nft.precioSubasta}
         ${nft.precioAhora}
         `;
  });
  console.table(ListaNFts);
}

// No se como hacer para seleccionar al nft para que el cliente pueda agregarlo a un carrito sin usar DOM
function agregarAlCarrito() {
  alert("Por el momento solo esta disponible ver el listado de Nfts. 😭😭");
  // cotizacion();
  iniciarApp();
}
