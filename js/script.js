


function validar() {

  let nombre = document.getElementById("Nombre");
  let correo = document.getElementById("Correo");
  let celular = document.getElementById("Celular");

  let err = [];

  let exreg = /^[^@]*@[^@]*$/;

  let nbr = nombre.value.trim();


  if (nbr.length == 0) {
    err.push("por favor ingrese un nombre");
  } else if (nbr.trim.length >= 30) {
    err.push("nombre muy largo");
  }

  let crr = correo.value.trim();

  if (crr.length == 0) {
    err.push("por favor ingrese un correo")
  } else if (exreg.test(crr.value)) {
    err.push("el correo debe contener @ en el medio")
  }

  let nmr = celular.value;

  if (nmr.length == 0) {
    err.push("Por favor ingrese un celular");
  } else if (nmr.trim.length >= 10) {
    err.push("Celular muy largo");
  }

  document.getElementById("errores").innerHTML="";

  for (let index = 0; index < err.length; index++) {

    let li = document.createElement("li");
    li.innerHTML = err[index];
    document.getElementById("errores").appendChild(li)
  }

  if (err.length == 0) {
    let p = document.createElement("p");

    p.innerHTML = `Hola ${nbr}, nos comunicaremos al ${nmr} ,o le enviaremos un mail al ${crr}`;

    document.getElementById("info").appendChild(p);
  }



}