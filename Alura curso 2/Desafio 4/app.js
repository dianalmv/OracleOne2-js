// 1.- Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];

// 2.- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3.- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');

// 4.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(){
    console.log("Elementos del derecho al revés");
    for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        console.log(lenguagesDeProgramacion[index]);
        
    }
}
mostrarElementos();

// 5.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarInverso(){
    console.log("");
    console.log("Elementos a la inversa");
    for (let index = lenguagesDeProgramacion.length - 1; index  >= 0 ; index--) {
        console.log(lenguagesDeProgramacion[index]);
    }
}

mostrarInverso();

// 6.- Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(lista){
    let element = 0;
    for (let index = 0; index < listaNumeros.length; index++) {
        element += listaNumeros[index];
    }
    console.log (element/listaNumeros.length);
}
const listaNumeros = [3, 6, 2];
promedio(listaNumeros);



// 7.- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayorYmenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
    for (let index = 0; index < lista.length; index++) {
        if(mayor<lista[index]){
            mayor = lista[index];    
        }
        if (lista[index] < menor) {
            menor = lista[index];
          }
    }
    console.log(`${mayor} es el número más grande de la lista`);
    console.log(`${menor} es el número más pequeño de la lista`);
    
}
mayorYmenor(listaNumeros);

// 8.- Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementos(lista){
    let suma = 0;
    for (let index = 0; index < lista.length; index++) {
        suma += lista[index];   
    }
    
    console.log(suma);
}

sumaElementos(listaNumeros);


// 9.- Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicion(lista, elemento){
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] == elemento){
            return i;
        }
    }
    return -1;
}

console.log(posicion(listaNumeros,6));

// 10.- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas(lista1, lista2){
    let suma = [];
    for (let index = 0; index < lista1.length; index++) {
        let sum = lista1[index]+lista2[index];
        suma.push(sum);
    }
    return suma;
}
let numeros = [4, 6, 7]
console.log(sumaListas(listaNumeros, numeros));

// 11.- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista){
    let cuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        let element = lista[i] * lista[i];
        cuadrado.push(element);
    }
    return cuadrado;
}

console.log(cuadradoLista(listaNumeros));