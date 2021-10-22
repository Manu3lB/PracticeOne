/**2 - Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla.
 */

// Variables Globales

const btnUser = document.getElementById("btnUser");
const userNameOne = document.getElementById("userNameOne");
const salaryOne = document.getElementById("salaryOne");

//Funcion
const userData = () => {
  // Variables locales
  let userName = prompt("Ingresa tu nombre");
  let salary = prompt("Ingresa tu salario");

  //Validar Nulos
  if (userName == "" || userName == null || salary == "" || salary == null) {
    return alert("Error en el momento de ingresar alguno de los datos");
  }

  userName = userName.toLocaleUpperCase();

  userNameOne.innerHTML = `Nombre : ${userName}`;
  localStorage.setItem("userName", userName);
  salaryOne.innerHTML = `Salario : $ ${salary}`;
  localStorage.setItem("salary", salary);
};

if (localStorage.getItem("userName")) {
  userNameOne.innerHTML = `Nombre : ${localStorage.getItem("userName")}`;
}
if (localStorage.getItem("salary")) {
  salaryOne.innerHTML = `Salario : $ ${localStorage.getItem("salary")}`;
}

// Evento
btnUser.onclick = () => {
  userData();
};
