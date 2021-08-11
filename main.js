const btnSeeMore = document.querySelector("#btnSeeMore");

btnSeeMore.addEventListener("click", () => {
    location.hash = "#geometria__info"; // NOTE: Location.hash sirve para movernos entre secciones de una página web.
});
