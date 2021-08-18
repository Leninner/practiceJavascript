// NOTE: Media

const lista = [400, 450, 600, 523, 250, 989];

let suma = 0;

function obtainMedia(array) {
    return (
        array.reduce((acumulador = 0, valor) => {
            return acumulador + valor;
        }) / array.length
    );
}

console.log(obtainMedia(lista));

// NOTE: Mediana

const listaExample = [1000000, 500, 12, 2, 9, 789, 788, 20, 5, 40000];

function ordenarLista(arreglo) {
    let aux = arreglo[0];
    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let y = 0; y < arreglo.length - 1; y++) {
            if (arreglo[y] > arreglo[y + 1]) {
                aux = arreglo[y];
                arreglo[y] = arreglo[y + 1];
                arreglo[y + 1] = aux;
            }
        }
    }
    return arreglo;
}

const listaOrdenada = ordenarLista(listaExample);

let mediana;

function esPar(number) {
    return number % 2 === 0 ? true : false;
}

function obtainMediana(array) {
    let mitad = parseInt(array.length / 2);
    if (esPar(array.length)) {
        const firstElement = array[mitad];
        const secondElement = array[mitad - 1];
        mediana = obtainMedia([firstElement, secondElement]);
        return mediana;
    } else {
        mediana = array[mitad];
        return mediana;
    }
}

console.log(obtainMediana(listaOrdenada));

// //Sort

// function compareNumbers(a, b) {
//     return a - b;
// }

// let numbers = [4, 2, 5, 1, 3, 7, 8, 9, 4, 5, 6, 1, 5, 8, 4, 17, 12, 5, 4, 1, 2, 4, 1];
// numbers.sort((a, b) => {
//     return a - b;
//     //Si devuelve un número menor a cero, entonces a va antes que b
//     //Si devuelve un número igual a cero, entonces se mantienen en la misma posición
//     //Si devuelve un número mayor a cero, entonces b va a antes que a
// });
// console.log(numbers);

// // [1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 9, 12, 17]

//NOTE: Moda

const listaModa = [
    1, 1, 1, 1, 1, 4, 5, 4, 8, 7, 8, 9, 8, 9, 7, 56, 2, 54, 8, 4, 7, 2, 8, 48, 15, 4885555, 5, 5, 5, 5, 5,
];

function obtainModa(lista) {
    const listModaCount = {};

    lista.map((elemento) => {
        if (listModaCount[elemento]) {
            listModaCount[elemento] += 1;
        } else {
            listModaCount[elemento] = 1;
        }
    });

    const listasModas = Object.entries(listModaCount).sort((valorUno, nuevoValor) => {
        return valorUno[1] - nuevoValor[1];
    });

    console.log(listasModas[listasModas.length - 1]);
}

obtainModa(listaModa);

// NOTE: TASA DE VARIACIÓN MEDIA

//La tasa de variación media (T.V.M.) de una función f(x) en un intervalo de su variable independiente [a, a + Δx] perteneciente al dominio de la función se representa como el cociente entre el incremento de la función en ese intervalo dividido por la amplitud de ese mismo intervalo.

// Averiguar si en estos dos intervalos, de igual amplitud, [0, 2] y [2, 4] de la función f(x) = (x / 2)² + 1, sus tasas de variación media son iguales o no.

// TODO: Encontrar la tasa de variación media en 2 intervalos
// TODO: Comprobar si esa tasa de variación media es igual o sino, comprobar sus distintos componentes

// Variación de X = ordenada - abcisa
// a = abcisa (número a evaluar en la función)
// a+variación de x
//FUNCIÓN:

function funcionPlanteada(number, funcion = (number / 2) ** 2 + 1) {
    return funcion;
}

function getFTVM(numeroUno, numeroDos, x, a) {
    return (x - a) / (numeroDos - numeroUno);
}

function getSTVM(numeroUno, numeroDos, x, a) {
    return (x - a) / (numeroDos - numeroUno);
}

function validateTVM(valueOne, valueTwo) {
    return valueOne === valueTwo ? true : false;
}

console.log(
    validateTVM(
        getFTVM(0, 2, funcionPlanteada(2), funcionPlanteada(0)),
        getSTVM(2, 4, funcionPlanteada(4), funcionPlanteada(2))
    )
);
