let accordions = document.querySelectorAll(".accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        acco.classList.toggle("active");
        let panel = acco.lastElementChild;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
});