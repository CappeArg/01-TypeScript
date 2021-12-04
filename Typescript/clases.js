"use strict";
//Función anónima autoinvocada
(() => {
    // class MiembroFamiliar{
    //     nombre:string;
    //     edad: number;
    //     poder:string;
    //     humano?: boolean;
    //     adulto: boolean;
    //     constructor( nombre:string, edad:number, poder:string, adulto:boolean ){
    //         this.nombre = nombre;
    //         this.edad = edad;
    //         this.poder = poder;
    //         this.humano = humano;
    //         this.adulto = adulto;
    //     }
    // }
    class MiembroFamiliar {
        constructor(nombre, edad, poder, adulto, humano) {
            this.nombre = nombre;
            this.edad = edad;
            this.poder = poder;
            this.adulto = adulto;
            this.humano = humano;
        }
    }
    const Pablo = new MiembroFamiliar('Pablo', 32, 'Destructor de Pitbulls', true);
    console.log(Pablo);
})();
