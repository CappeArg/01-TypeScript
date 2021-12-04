//Función anónima autoinvocada

(function() {


    const mifuncion = function(a:string){
        return a.toUpperCase();
    }

    const mifuncionflecha = (a:string)=> a.toUpperCase();


    const sumarNormal = (a:number, b:number)=> a + b

    console.log(sumarNormal(10,10));
})();



