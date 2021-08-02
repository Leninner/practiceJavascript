// Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}

// Triángulos

function perimetroTriangulo(ladoOne, ladoTwo, base) {
    return ladoOne + ladoTwo + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Círculos

function perimetroCirculo(diametro) {
    return Math.PI * diametro;
}
function areaCirculo(diametro) {
    return (diametro / 2) ** 2 * Math.PI;
}
