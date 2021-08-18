//Helpers

function esPar(number) {
    return number % 2 === 0;
}

function obtainMedia(lista) {
    return (
        lista.reduce((acumulador = 0, valor) => {
            return acumulador + valor;
        }) / lista.length
    );
}

const salariosEcuador = ecuador.map((persona) => {
    return persona.salary;
});

const salariosEcuSorted = salariosEcuador.sort((salarioA, salarioB) => {
    return salarioB - salarioA;
});

function medianaSalariosEcu(lista) {
    let mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaUno = lista[mitad];
        const personaDos = lista[mitad - 1];
        const mediana = obtainMedia([personaUno, personaDos]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralEcu = medianaSalariosEcu(salariosEcuSorted);

const spliceStart = (salariosEcuSorted.length * 90) / 100;
const spliceCount = salariosEcuSorted.length - spliceStart;

const salariosTop10Ecu = salariosEcuSorted.splice(spliceStart, spliceCount);

const medianaTop10Ecu = medianaSalariosEcu(salariosTop10Ecu);

console.log({ medianaGeneralEcu, medianaTop10Ecu });

// TODO: Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…

// El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.

// Para lograrlo solo debes seguir los siguientes pasos:

// Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
// Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
// Define las variables y funciones para resolver tus fórmulas.
// Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
// Organiza y documenta tu código para que sea más fácil de leer y entender.
// Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.

//TODO: https://www.glajumedia.com/wp-content/uploads/2019/12/ecommerce-website-kbworks.png
//Inspiración

const salarios = document.querySelector(".salarios-lista"),
    mediana = document.querySelector(".mediana"),
    topTenlist = document.querySelector(".topTen-list");

ecuador.forEach((Element) => {
    const main = document.createElement("li");
    main.textContent = `$${Element.salary} - ${Element.name}`;
    salarios.appendChild(main);
});

for (let i = 0; i < 10; i++) {
    const sorted = document.createElement("li");
    sorted.textContent = `${i + 1}. ${salariosEcuSorted[i]}`;
    topTenlist.appendChild(sorted);
}

mediana.innerHTML = `<h1>Mediana General y del Top 10% en Ecuador</h1>
<p>$${medianaTop10Ecu} es la mediana del Top 10% del Ecuador</p>
<br>
<p>$${medianaGeneralEcu} es la mediana general en el Estado Ecuatoriano</p>`;
