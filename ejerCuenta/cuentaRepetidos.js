
let array = [3, 6, 9, 9, 9]

function repetidos() {
    let arrayFinal = []; //array que s emostrara al final
    let yaComprobados = [];

    for (let i = 0; i < array.length; i++) {
        let numX = array[i]; //pilla el valor de la posicion i del array
        let count  = 0;


        
        if (yaComprobados.includes(numX) == false) {
            count = 0;
            for (let j = 0; j < array.length; j++) { //hacemos otro bucla para ir copmprobando si el valor de la posion[i] councide con otros valores del mismo array
                if(array[j] == numX){ //comprobamos si hay coincidencias
                    count ++; //cada coincidencia se sma uno a count
                }
            }

            yaComprobados.push(numX); //añado a ya contados el valor de numX para no volver a comprobarlo
            arrayFinal.push(count);  //añado ahora a la posicion as array el numeroi de coincidencias
        }
    }
    console.log(arrayFinal);
}








