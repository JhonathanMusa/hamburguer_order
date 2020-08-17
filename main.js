const pedido = document.getElementById("pedido").value;
const cantidad = document.getElementById("cantidad").value;
var boton1 = document.querySelectorAll("button");

num1 = parseInt(cantidad);
const mostrar = () => {
  document.getElementById("total").innerHTML = num1;
};

boton1 = document.addEventListener("click", mostrar);
