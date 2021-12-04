//Función anónima autoinvocada

(()=> {

    const bulldog ={
        nombre: 'wada',
        sobrenombre: 'Punki',
        poder: 'Mirar con ternura'
    };

    const extraer = ({nombre,sobrenombre, poder}:any)=>{
    //desestructuración de objetos
    // const { nombre,sobrenombre,poder } = bulldog;

    console.log( nombre );
    console.log( sobrenombre );
    console.log( poder );

}

// extraer(bulldog);

const bulldogs: string[] = ['Negro', 'Punki', 'Perro que se ahoga solo','Bulldog viejo aca la vuelta']

const extraerArreglo = ([deflor,deso, nn, nosabemos]: string[])=>{
    //desestructuración de objetos
    
    
    // console.log(bulldogs[0])
    // console.log(bulldogs[1])
    // console.log(bulldogs[2])
    // console.log(bulldogs[3])



    // const [ deflor, deso, nn, nosabemos] = bulldogs;

    console.log(deflor);
    console.log(deso);
    console.log(nn);
    console.log(nosabemos)
}

extraerArreglo(bulldogs)

})();



