let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        acco.classList.add("active");
    };
});