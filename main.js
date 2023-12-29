let accordions = document.querySelectorAll(".accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        acco.classList.toggle("active");
        let panel = acco.lastElementChild;
        if (panel.style.maxHeight) {
            acco.querySelector(".accordion-heading").querySelector(".dropdown").innerText = "+";
            panel.style.maxHeight = null;
        }
        else {
            acco.querySelector(".accordion-heading").querySelector(".dropdown").innerText = "-";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
});