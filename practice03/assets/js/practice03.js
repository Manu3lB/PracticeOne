/**3 - Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch) */

const btnUser = document.getElementById("btnUser");
const word = document.getElementById("word");
const traslate = document.getElementById("traslate");

// Función
const userData = () => {
    //Variables locales
    let wordOne = prompt("Ingresa la palabra que deseas traducir");

    if(wordOne == "" || wordOne == null){
        return alert("Error en el momento de ingresar la palabra");
    }
    let traslateOne = "";
    wordOne = wordOne.toLocaleLowerCase();
    word.innerHTML = `Palabra en Español : ${wordOne}`;
    localStorage.setItem("wordOne", wordOne);
    switch (wordOne) {
        case "casa":
            traslateOne = "home";
            traslate.innerHTML = `Traducción en Ingles : ${traslateOne}`;
            localStorage.setItem("traslateOne", traslateOne);
            break;
        case "mesa":
            traslateOne = "table";
            traslate.innerHTML = `Traducción en Ingles : ${traslateOne}`;
            localStorage.setItem("traslateOne", traslateOne);
            break;
        case "perro":
            traslateOne = "dog";
            traslate.innerHTML = `Traducción en Ingles : ${traslateOne}`;
            localStorage.setItem("traslateOne", traslateOne);
            break;
        case "gato":
            traslateOne = "cat";
            traslate.innerHTML = `Traducción en Ingles : ${traslateOne}`;
            localStorage.setItem("traslateOne", traslateOne);
            break;
        default:
            break;
    }
}

// Evento
btnUser.onclick = () => {
    userData();
};
