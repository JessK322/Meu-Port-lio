// Mostrar ou esconder botão de voltar ao topo
window.addEventListener("scroll", function() {
    let scrollButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollButton.classList.add("show");
        scrollButton.classList.remove("hide");
    } else {
        scrollButton.classList.add("hide");
        setTimeout(() => {
            scrollButton.classList.remove("show");
        }, 500);
    }
});

// Evento de clique para subir ao topo
document.querySelector(".scroll-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});