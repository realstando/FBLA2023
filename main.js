 const accordionLoad = () => {
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
}
accordionLoad();

let applyBtn = document.querySelectorAll(".accordion .btn");
const applyH = document.querySelector(".apply-modal h1");
const modal = document.querySelector(".modal");
const close = document.getElementsByClassName("close")[0];
const applyId = document.querySelector('.apply-form');
applyBtn.forEach((btn) => {
    btn.onclick = () => {
        modal.style.display = "block"
        if (btn.id === "Fashion Designer") {
            applyH.innerHTML = "Application for Fashion Designer";
            applyId.id = "Fashion Designer";
        } else if (btn.id === "Sales Manager") {
            applyH.innerHTML = "Application for Sales Manager";
            applyId.id = "Sales Manager";
        } else {
            applyH.innerHTML = "Application for Marketing Coordinator";
            applyId.id = "Mkarting Coordinator";
        }
    }
})
if (modal) {
    close.onclick = () => {
        modal.style.display = "none";
    }
}