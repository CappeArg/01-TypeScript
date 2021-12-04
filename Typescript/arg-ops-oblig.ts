//Función anónima autoinvocada

(function() {

    function activar(quien:string, 
                    momento?:string,
                    elobjeto:string = 'batiseñal',
                    ){
    if (momento){
        console.log(`La persona ${quien} activo la ${elobjeto} en ${momento}`)
    }
    else{
        console.log(`La persona ${quien} activo la ${elobjeto}`)
    }
        
    }

    activar('Gordon','la tarde');

 

})();



