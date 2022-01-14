// Arreglos []-> Es una colecion de informacion que se encuentra dentro de una variable

const arreglo = [1, 2, 3, 4];
//El operador spread crea una referencia 
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function (numero){
     return numero * 2;
    });

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3)