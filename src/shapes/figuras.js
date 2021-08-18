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
    if (!ladoCuadrado.value) {
        alert("Ingresa los datos por favor!");
        resultadoCuadrado.textContent = "";
    } else {
        resultadoCuadrado.textContent = perimetroCuadrado(ladoCuadrado.value);
    }
    ladoCuadrado.value = "";
});

btnAreaCuadrado.addEventListener("click", () => {
    if (!ladoCuadrado.value) {
        alert("Ingresa los datos por favor!");
        resultadoCuadrado.textContent = "";
    } else {
        resultadoCuadrado.textContent = "";
        resultadoCuadrado.textContent = areaCuadrado(ladoCuadrado.value);
    }
    ladoCuadrado.value = "";
});

// Triángulos

const perimetroTriangulo = (ladoOne, ladoTwo, base) => {
    return ladoOne + ladoTwo + base;
};

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};

const btnPerimetroTriangulo = document.querySelector("#perimetroTriangulo"),
    btnAreaTriangulo = document.querySelector("#areaTriangulo");

let ladoATriangulo = document.querySelector("#ladoATriangulo"),
    ladoBTriangulo = document.querySelector("#ladoBTriangulo"),
    baseTriangulo = document.querySelector("#baseTriangulo"),
    alturaTriangulo = document.querySelector("#alturaTriangulo"),
    resultadoTriangulo = document.querySelector("#resultadoTriangulo");

btnPerimetroTriangulo.addEventListener("click", () => {
    if (!ladoATriangulo.value || !ladoBTriangulo.value || !baseTriangulo.value) {
        alert("Completa el lado A, lado B y la base!");
        resultadoTriangulo.textContent = "";
    } else {
        resultadoTriangulo.textContent = "";
        resultadoTriangulo.textContent = perimetroTriangulo(
            ladoATriangulo.value,
            ladoBTriangulo.value,
            baseTriangulo.value
        );
    }
    ladoATriangulo.value = "";
    ladoBTriangulo.value = "";
    baseTriangulo.value = "";
});

btnAreaTriangulo.addEventListener("click", () => {
    if (!baseTriangulo || !alturaTriangulo) {
        alert("Completa el campo de Altura y Base correctamente!");
        resultadoTriangulo.textContent = "";
    } else {
        resultadoTriangulo.textContent = "";
        resultadoTriangulo.textContent = areaTriangulo(baseTriangulo.value, alturaTriangulo.value);
    }
    alturaTriangulo.value = "";
    baseTriangulo.value = "";
});

// Círculos

const perimetroCirculo = (diametro) => {
    return (Math.PI * diametro).toFixed(2);
};

const areaCirculo = (diametro) => {
    return ((diametro / 2) ** 2 * Math.PI).toFixed(2);
};

const btnPerimetroCirculo = document.querySelector("#perimetroCirculo"),
    btnAreaCirculo = document.querySelector("#areaCirculo");

let circunferencia = document.querySelector("#diametro"),
    resultadoCirculo = document.querySelector("#resultadoCirculo");

btnPerimetroCirculo.addEventListener("click", () => {
    if (!circunferencia.value) {
        alert("Ingresa el valor del diámetro!");
        resultadoCirculo.textContent = "";
    } else {
        resultadoCirculo.textContent = "";
        resultadoCirculo.textContent = perimetroCirculo(circunferencia.value);
    }
    circunferencia.value = "";
});

btnAreaCirculo.addEventListener("click", () => {
    if (!circunferencia.value) {
        alert("Ingresa el valor del diámetro");
        resultadoCirculo.textContent = "";
    } else {
        resultadoCirculo.textContent = "";
        resultadoCirculo.textContent = areaCirculo(circunferencia.value);
    }
    circunferencia.value = "";
});

// NOTE: Triángulo Isósceles
// const alturaIsosceles = (ladoUno, ladoDos, base) => {
//     return ladoUno == ladoDos ? Math.sqrt(ladoUno ** 2 - base ** 2 / 4) : 0;
// };
