// 1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function imc(peso, altura){
    return peso/(altura*altura);
}

let resultado = imc(72, 161);
console.log(resultado);

// 2.- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }

  let numero = 6;
  resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

// 3.- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolares(valor){
    let real = 4.8;
    return valor*real;
}

resultado = dolares(8);
console.log("Dolar: "+resultado);

// 4.- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function salaRectangular(altura, anchura){
    let area = altura * anchura;
    let perimetro = (altura + anchura) * 2;
    console.log("");
    console.log("Rectangular");
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}

let altura = 3;
let anchura = 8;
salaRectangular(altura, anchura);

// 5.- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function salaCircular(radio){
    let pi = 3.14;
    let area = (pi * (radio*radio));
    let perimetro = (radio*2)*pi;
    console.log("");
    console.log("Circular");
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}

let radio = 8;
salaCircular(radio);

// 6.- Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero){
    cont=0;
    while(cont!=10){
        cont++;
        let resul = numero*cont;
        console.log(resul);
    }
    
}

tablaMultiplicar(7);