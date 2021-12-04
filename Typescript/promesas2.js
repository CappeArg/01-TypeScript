"use strict";
//Función anónima autoinvocada
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('no hay suficiente saldo');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(montoActual => console.log(`Queda como saldo ${montoActual}`))
        .catch(mensajerr => console.warn(mensajerr));
})();
