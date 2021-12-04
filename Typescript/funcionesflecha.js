"use strict";
//Función anónima autoinvocada
(function () {
    const mifuncion = function (a) {
        return a.toUpperCase();
    };
    const mifuncionflecha = (a) => a.toUpperCase();
    const sumarNormal = (a, b) => a + b;
    console.log(sumarNormal(10, 10));
})();
