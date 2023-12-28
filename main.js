let accordions = document.querySelectorAll(".accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        acco.classList.add("active");
    };
});