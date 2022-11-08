const cuadrado = (valor)=>{
    return valor*valor;
};

cuadrado(2);
console.log(cuadrado(2));

exports.cuadrado = cuadrado;

//const _cuadrado = cuadrado;
//export { _cuadrado as cuadrado };