/**4 - ingresar uno de los 32 departamentos de colombia  en un prompt 
y decir cual es su respectiva capital en un alert de respuesta 
*/

const btnUser = document.getElementById("btnUser");
const department = document.getElementById("department");
const capital = document.getElementById("capital");

//Función
const userData = () => {
  // Variables Locales
  let departmentOne = prompt(
    "Ingrese el departamento el cual desea saber su capital"
  );

  if(departmentOne == "" || departmentOne == null){
    return alert("Error en el momento de ingresar el departamento");
  }
  departmentOne = departmentOne.toLocaleLowerCase();
  let capitalOne = "";
  department.innerHTML = `Departamento : ${departmentOne}`;
  localStorage.setItem("departmentOne", departmentOne);
  switch (departmentOne) {
    case "amazonas":
      capitalOne = "Leticia";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "antioquia":
      capitalOne = "Medellin";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "arauca":
      capitalOne = "Arauca";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "atlantico":
      capitalOne = "Barranquilla";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "bolivar":
      capitalOne = "Cartagena de Indias";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "boyaca":
      capitalOne = "Tunja";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "caldas":
      capitalOne = "Manizales";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "caqueta":
      capitalOne = "Florencia";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "casanare":
      capitalOne = "Yopal";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "cauca":
      capitalOne = "Popayán";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "cesar":
      capitalOne = "Valledupar";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "choco":
      capitalOne = "Quibdo";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "cordoba":
      capitalOne = "Montería";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "cundinamarca":
      capitalOne = "Bogotá";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "guainia":
      capitalOne = "Inírida";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "guaviare":
      capitalOne = "San José del Guaviare";
      capital.innerHTML = `san jose del guaviare : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "huila":
      capitalOne = "Neiva";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "guajira":
      capitalOne = "Riohacha";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "magdalena":
      capitalOne = "Santa Marta";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "meta":
      capitalOne = "Villavicencio";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "nariño":
      capitalOne = "Pasto";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "norte de santander":
      capitalOne = "Cúcuta";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "putumayo":
      capitalOne = "Mocoa";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "quindio":
      capitalOne = "Armenia";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "risaralda":
      capitalOne = "Pereira";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "san andres y providencia":
      capitalOne = "San Andres";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "santander":
      capitalOne = "Bucaramanga";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "sucre":
      capitalOne = "Sincelejo";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "tolima":
      capitalOne = "Ibagué";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "valle del cauca":
      capitalOne = "Cali";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "vaupes":
      capitalOne = "Mitu";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;
    case "vichada":
      capitalOne = "Puerto Carreño";
      capital.innerHTML = `Capital : ${capitalOne}`;
      alert(
        `La capital del departamento de ${departmentOne} es : ${capitalOne}`
      );
      break;

    default:
      break;
  }
};

// Evento
btnUser.onclick = () => {
  userData();
};
