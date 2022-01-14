//Funciones

function saludar(nombre){
    return `Hola, ${nombre}`;
};
console.log(saludar ('Bruce'));

const saludar2 = function (nombre){
    return `Hola, ${nombre}`;
};
console.log(saludar2 ('Robin'));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Constantine'))

const saludar4 = (nombre) => `Hola Mundo`;
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'Holi',
});
console.log(getUser());

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC789',
    username: nombre,
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);