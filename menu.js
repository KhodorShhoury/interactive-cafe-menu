document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const description = item.querySelector(".menu-text p");

            if (description.classList.contains("show")) {
                description.classList.remove("show");
                setTimeout(() => (description.style.display = "none"), 300);
            } else {
                description.style.display = "block";
                setTimeout(() => description.classList.add("show"), 10);
            }
        });
    });
});