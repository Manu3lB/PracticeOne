// 1 - Guardar los siguientes datos del usuario
/**
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque
*/

// Variables Globales
const btnUser = document.getElementById("btnUser");
const userNameOne = document.getElementById("userNameOne");
const lastNameOne = document.getElementById("lastNameOne");
const ageOne = document.getElementById("ageOne");
const phoneOne = document.getElementById("phoneOne");
const mobileOne = document.getElementById("mobileOne");
const directionOne = document.getElementById("directionOne");

// Funciones
const userData = () => {
  // Variables locales
  let userName = prompt("Ingresa tu nombre");
  let lastName = prompt("Ingresa tu apellido");
  let age = prompt("Ingresa tu edad");
  let phone = prompt("Ingresa tu número de telefono");
  let mobile = prompt("Ingresa tu celular");
  let direction = prompt("Ingresa tu dirección");

  //Validar Nulos
  if (
    userName == "" ||
    userName == null ||
    lastName == "" ||
    lastName == null ||
    age == "" ||
    age == null ||
    phone == "" ||
    phone == null ||
    mobile == "" ||
    mobile == null ||
    direction == "" ||
    direction == null
  ) {
    return alert("Error en el momento de ingresar alguno de los datos");
  }

  userName = userName.toLocaleUpperCase();
  lastName = lastName.toLocaleUpperCase();
  direction = direction.toLocaleUpperCase();

  userNameOne.innerHtml = `Nombre : ${userName}`;
  localStorage.setItem("userName", userName);
  lastNameOne.innerHTML = `Apellido : ${lastName}`;
  localStorage.setItem("lastName", lastName);
  ageOne.innerHTML = `Edad : ${age}`;
  localStorage.setItem("age", age);
  phoneOne.innerHTML = `Telefono : ${phone}`;
  localStorage.setItem("phone", phone);
  mobileOne.innerHTML = `Celular : ${mobile}`;
  localStorage.setItem("mobile", mobile);
  directionOne.innerHTML = `Dirección : ${direction}`;
  localStorage.setItem("direction", direction);
};

if (localStorage.getItem("userName")) {
  userNameOne.innerHTML = `Nombre : ${localStorage.getItem("userName")}`;
}
if (localStorage.getItem("lastName")) {
  lastNameOne.innerHTML = `Apellido : ${localStorage.getItem("lastName")}`;
}
if (localStorage.getItem("age")) {
  ageOne.innerHTML = `Edad : ${localStorage.getItem("age")}`;
}
if (localStorage.getItem("phone")) {
  phoneOne.innerHTML = `Telefono : ${localStorage.getItem("phone")}`;
}
if (localStorage.getItem("mobile")) {
  mobileOne.innerHTML = `Celular : ${localStorage.getItem("mobile")}`;
}
if (localStorage.getItem("direction")) {
  directionOne.innerHTML = `Dirección : ${localStorage.getItem("direction")}`;
}

// Evento
btnUser.onclick = () => {
  userData();
};
