


function validar() {

  let nombre = document.getElementById("Nombre");
  let correo = document.getElementById("Correo");
  let celular = document.getElementById("Celular");

  let err = [];

  let exreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let nbr = nombre.value.trim();


  if (nbr.length == 0) {
    err.push("Por favor, ingrese un nombre");
  } else if (nbr.length >= 30) {
    err.push("El nombre es muy largo");
  }

  let crr = correo.value.trim();

  if (crr.length == 0) {
    err.push("Por favor, ingrese un correo")
  } else if (!exreg.test(crr)) {
    err.push("Ingrese un mail valido")
    err.push("Ej: usuario@mail.com")
  }

  let nmr = celular.value;

  if (nmr.length == 0) {
    err.push("Por favor, ingrese un celular");
  } else if (nmr.length >= 10) {
    err.push("El celular es muy largo");
  }

  document.getElementById("errores").innerHTML = "";

  for (let index = 0; index < err.length; index++) {

    let li = document.createElement("li");
    li.innerHTML = err[index];
    document.getElementById("errores").appendChild(li)
  }

  document.getElementById("info").innerHTML ="";
  if (err.length == 0) {

    document.getElementById("info").innerHTML = `¡Hola ${nbr}! Nos comunicaremos al ${nmr}, o le enviaremos un mail al ${crr}`;

    
  }





}



function limpiar(p) {
  console.log("asdasdasdasd")
  p.innerHTML = "";

}