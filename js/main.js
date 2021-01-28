'use strict'

const foodElement=document.querySelector(".js-food");

function ten(nombre) {
    foodElement.innerHTML+=nombre;
}

ten('Patata');
ten('Aguacate');
ten('Pizza');