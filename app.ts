//Función anónima autoinvocada

(()=> {

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

    class MiembroFamiliar{

        // nombre:string;
        // edad: number;
        // poder:string;

        // humano?: boolean;
        // adulto: boolean;

        constructor( public nombre:string,              
                     public edad: number,
                     public poder:string,
                     public adulto: boolean,
                     public humano?: boolean ){}
    }


    const Pablo:MiembroFamiliar= new MiembroFamiliar('Pablo', 32, 'Destructor de Pitbulls', true);

    console.log(Pablo);

})();



