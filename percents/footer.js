const github = document.querySelector(".github"),
    linkedin = document.querySelector(".linkedin"),
    gmail = document.querySelector(".gmail");

github.addEventListener("click", () => {
    // location.href = "https://github.com/Leninner"; => Abre el link en el mismo sitio
    // window.open("https://github.com/Leninner", "Github", "width=600, height=400"); => NUEVA VENTANA
    window.open("https://github.com/Leninner", "_blank"); // => Nueva Pestaña
});

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/leninner/", "_blank");
});

gmail.addEventListener("click", () => {
    location.href = "mailto:mazabandalenin180@gmail.com";
});
