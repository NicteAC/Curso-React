//Objetos {} ->Siempre que veamos estas llaves estaremos frente a un objeto

const persona = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    edad: 45,
    //Puedo incorporar mas datos de este tipo a mi objeto
    direccion:{
        Ciudad: 'Gotham City',
        zip: 547643521,
        lat:12.685,
        lng: 65.645963
    },
};
//Existen muchas formas de acceder a un objeto
console.log(persona);
//Nunca hacer esta asignacion
//const persona2 = persona;

const persona2 = {...persona};
persona2.nombre= 'Peter';

console.log(persona2)
