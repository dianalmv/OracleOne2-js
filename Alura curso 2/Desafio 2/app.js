// 1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log("¡Hola, mundo!");
}

holaMundo();
// 2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre){
    console.log(`¡Hola, ${nombre}!`)
}
holaNombre("Diana");
// 3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
    return numero*2;
}

let resultado = doble(5);
console.log(resultado);
// 4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

resultado = promedio(4, 6, 9);
console.log(resultado);
// 5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(num1, num2){
    if (num1 > num2) return num1;
    else return num2;
}

resultado = mayor(8, -12);
console.log(resultado);
// 6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicado(numero){
    return numero*numero;
}
resultado = multiplicado(7);
console.log(resultado);