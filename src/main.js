const btnSeeMore = document.querySelector("#btnSeeMore"),
    btnDemoGeometria = document.querySelector("#demoGeometria"),
    btnRepoGeometria = document.querySelector("#repoGeometria"),
    btnDemoPorcentajes = document.querySelector("#demoPorcentajes"),
    btnRepoPorcentajes = document.querySelector("#repoPorcentajes"),
    btnDemoSalarios = document.querySelector("#demoSalarios"),
    btnRepoSalarios = document.querySelector("#repoSalarios");

btnSeeMore.onclick = () => (location.hash = "#geometria__info"); // NOTE: Location.hash sirve para movernos entre secciones de una página web.

btnDemoGeometria.onclick = () => {
    window.open("./src/shapes/index.html", "_blank");
};
btnRepoGeometria.onclick = () => {
    window.open("https://github.com/Leninner/practiceJavascript/tree/main/shapes", "_blank");
};

btnDemoPorcentajes.onclick = () => {
    window.open("./src/percents/index.html", "_blank");
};
btnRepoPorcentajes.onclick = () => {
    window.open("https://github.com/Leninner/practiceJavascript/tree/main/percents", "_blank");
};

btnDemoSalarios.onclick = () => {
    window.open("./src/salarios/index.html", "_blank");
};
btnRepoSalarios.onclick = () => {
    window.open("https://github.com/Leninner/practiceJavascript/tree/main/salarios", "_blank");
};
