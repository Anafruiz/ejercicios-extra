'use strict'

const foodElement=document.querySelector(".js-food");

function ten(nombre) {
    for (let i=0;i<10;i++){

    foodElement.innerHTML+=nombre;

    }
} 

ten('Patata');
ten('Aguacate');
ten('Pizza');