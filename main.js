const formulario = document.getElementsByName("formulario")[0];
const elementos = formulario.elementos;
const boton = document.getElementById("btn");

// Precios
// const precios = { sencilla: 20000, doble: 25000, triple: 28000 };

// Valida el pedido, analiza si el campo esta vacio o no
const validarPedido = (e) => {
  var pedido = formulario.pedido.value;
  if (pedido == 0) {
    alert("El pedido no puede estar vacio");
    // impide que la pagina se actualice despues de validar
    e.preventDefault();
  }
};

// valida si se ingresa una cantidad de elementos
const validarCantidad = (e) => {
  var cantidad = formulario.cantidad.value;
  if (cantidad == 0) {
    alert("La cantidad no puede estar vacia");
    e.preventDefault();
  }
};

const validarTerminos = (e) => {
  if (formulario.terminos.checked == true) {
  } else {
    alert("Aceptar los terminos y condiciones");
    e.preventDefault();
  }
};

// funcion principal que activa los eventos del formulario
const validar = (e) => {
  validarPedido(e);
  validarCantidad(e);
  validarTerminos(e);
};

formulario.addEventListener("submit", validar);
