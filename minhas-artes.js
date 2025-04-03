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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}