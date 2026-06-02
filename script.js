const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        links.forEach(item => {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});