//Función anónima autoinvocada

(()=> {

    interface paseador{
        nombre:string,
        edad: number,
        poder: string
        hobby?: string

    }
    const sacaraPasear = (paseador:paseador)=> {
        console.log(`Sacando a paserar a punki con ${paseador.nombre}`);
    }

    const regresarPaseo = (paseador:paseador) => {
        console.log(`Regresando del paseo de punki con ${paseador.nombre}`);
    }

    const Paseador1:paseador = {
        nombre:'Pablo',
        edad: 32,
        poder: 'Destructor de Pitbulls'

    }

    sacaraPasear(Paseador1);
    regresarPaseo(Paseador1);

})();



