let activator = document.querySelectorAll(".activator");
let option = document.querySelectorAll(".option");

activator.forEach((el) => {
    el.addEventListener("click", () => {
        el.nextElementSibling.classList.add("active");
    });
});

option.forEach((el) => {
    el.addEventListener("click", () => {
        if (el.parentElement.previousElementSibling.children[0].class == 'disable') {
            return
        } else {
            el.parentElement.previousElementSibling.children[0].innerHTML = el.textContent;
        }
        el.parentElement.classList.remove("active");
    });
});