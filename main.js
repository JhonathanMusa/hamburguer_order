const formulario = document.getElementsByName("formulario")[0];
const elementos = formulario.elementos;
const boton = document.getElementById("btn");

// Precios
const precios = { sencilla: 20000, doble: 25000, triple: 28000 };

// funcion principal que activa los eventos del formulario
const validar = (e) => {
  let pedido = formulario.pedido.value;
  let cantidad = formulario.cantidad.value;
  let terminos = formulario.terminos.checked;

  // Valida el pedido, analiza si el campo esta vacio o no
  if (pedido == 0) {
    alert("El pedido no puede estar vacio");
    // impide que la pagina se actualice despues de validar
    e.preventDefault();
  }
 
  // valida si se ingresa una cantidad de elementos
  if (cantidad == 0) {
    alert("La cantidad no puede estar vacia");
    e.preventDefault();
  }

  if (terminos == true) {
  } else {
    alert("Aceptar los terminos y condiciones");
    e.preventDefault();
  }

  formulario.resultado.value = "TOTAL: " + cantidad * precios[pedido];
};

boton.addEventListener("click", validar);
