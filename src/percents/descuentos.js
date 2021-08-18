const obtainPriceWithDiscount = (price, discount, cupon = 0) => {
    let descuento = ((((price * (100 - discount)) / 100) * (100 - cupon)) / 100).toFixed(2);
    if (descuento <= 0) {
        return "Felicidades, esto es gratis";
    } else {
        return descuento;
    }
};

const inputPrice = document.querySelector("#inputPrice"),
    inputDiscount = document.querySelector("#inputDiscount"),
    btnCalcDiscount = document.querySelector("#calcDiscount"),
    labelResult = document.querySelector("#labelResult"),
    checkCupon = document.querySelector("#checkbox");

let cupones = document.querySelector("#cupones");

const cuponesDescuento = {
    10: "el_pepe",
    2.6: "math",
    45.1: "leninner",
    20: "wilche",
    12.63: "marco",
    78: "jeje",
    45: "kimberly",
    23: "hi",
    56: "pretemporada",
};

btnCalcDiscount.addEventListener("click", () => {
    if (checkCupon.checked) {
        if (!cupones.value) {
            alert("Completa el campo de cupón!");
        } else {
            Object.keys(cuponesDescuento).forEach((Element) => {
                if (cuponesDescuento[Element] == cupones.value) {
                    labelResult.textContent =
                        "Precio Final: " + obtainPriceWithDiscount(inputPrice.value, inputDiscount.value, Element);
                }
            });
        }
    } else {
        labelResult.textContent = "Precio Final: " + obtainPriceWithDiscount(inputPrice.value, inputDiscount.value);
    }
    cupones.value = "";
});
