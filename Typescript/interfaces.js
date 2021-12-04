"use strict";
//Función anónima autoinvocada
(() => {
    const sacaraPasear = (paseador) => {
        console.log(`Sacando a paserar a punki con ${paseador.nombre}`);
    };
    const regresarPaseo = (paseador) => {
        console.log(`Regresando del paseo de punki con ${paseador.nombre}`);
    };
    const Paseador1 = {
        nombre: 'Pablo',
        edad: 32,
        poder: 'Destructor de Pitbulls'
    };
    sacaraPasear(Paseador1);
    regresarPaseo(Paseador1);
})();
