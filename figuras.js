// Cuadrado

const perimetroCuadrado = (lado) => {
    return lado * 4;
};

const areaCuadrado = (lado) => {
    return lado ** 2;
};

const btnPerimetroCuadrado = document.querySelector("#perimetroCuadrado"),
    btnAreaCuadrado = document.querySelector("#areaCuadrado");

let ladoCuadrado = document.querySelector("#ladoCuadrado"),
    resultadoCuadrado = document.querySelector("#resultadoCuadrado");

btnPerimetroCuadrado.addEventListener("click", () => {
    resultadoCuadrado.textContent = "";
    resultadoCuadrado.textContent = perimetroCuadrado(ladoCuadrado.value);
});
btnAreaCuadrado.addEventListener("click", () => {
    resultadoCuadrado.textContent = "";
    resultadoCuadrado.textContent = areaCuadrado(ladoCuadrado.value);
});

// Triángulos

const perimetroTriangulo = (ladoOne, ladoTwo, base) => {
    return ladoOne + ladoTwo + base;
};

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};

// Círculos

const perimetroCirculo = (diametro) => {
    return Math.PI * diametro;
};

const areaCirculo = (diametro) => {
    return (diametro / 2) ** 2 * Math.PI;
};
