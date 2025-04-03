window.addEventListener("scroll", function() {
    let image = document.getElementById("profile-image");
    let scrollValue = window.scrollY / 10;
    image.style.transform = `translateY(${scrollValue}px)`;
});
// Efeito de Parallax na imagem de perfil
window.addEventListener("scroll", function() {
    let image = document.getElementById("profile-image");
    let scrollValue = window.scrollY / 10;
    image.style.transform = `translateY(${scrollValue}px)`;
});

// Troca de imagens ao passar o mouse
document.querySelectorAll(".gallery-box img").forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute("data-hover");

    img.addEventListener("mouseenter", () => {
        img.src = hoverSrc;
    });

    img.addEventListener("mouseleave", () => {
        img.src = originalSrc;
    });
});