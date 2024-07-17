document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");

    // Função para mostrar o menu hambúrguer ao rolar
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.style.top = "0";
        } else {
            header.style.top = "-60px";
        }
    });

    // Função para alternar a visibilidade do menu de navegação
    menu.addEventListener("click", function() {
        if (nav.classList.contains("hidden")) {
            nav.classList.remove("hidden");
            nav.classList.add("visible");
        } else {
            nav.classList.remove("visible");
            nav.classList.add("hidden");
        }
    });
});
