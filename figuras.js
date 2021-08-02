// Cuadrado

console.group("Cuadrados");

function resumenCuadrado(lado) {
    console.log(lado * 4 + " cm");
    console.log(lado ** 2 + " cm´2");
}
resumenCuadrado(7);

console.groupEnd();

// Triángulos

console.group("Triángulos");

function resumenTriangulo(ladoOne, ladoTwo, base, altura) {
    console.log(ladoOne + ladoTwo + base + " cm");
    console.log((base * altura) / 2 + " cm2");
}
resumenTriangulo(10, 10, 5, 9);

console.groupEnd();

// Círculos

console.group("Circulos");

function resumenCirculo(diametro) {
    console.log(Math.PI * diametro + " cm");
    console.log((diametro / 2) ** 2 * Math.PI + " cm´2");
}
resumenCirculo(8);

console.groupEnd();
