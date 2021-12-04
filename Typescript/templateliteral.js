"use strict";
//Función anónima autoinvocada
(function () {
    function getEdad() {
        return 100 + 100 + 200;
    }
    const nombre = 'Pablo';
    const apellido = 'Cappellacci';
    const edad = 32;
    const salida = `Nombre: ${nombre}  apellido: ${apellido}  edad: (${getEdad()})`;
    console.log(salida);
})();
