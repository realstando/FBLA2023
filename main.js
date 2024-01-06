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
        if (btn.id === "job1") {
            applyH.innerHTML = "Application for Job 1";
            applyId.id = "Job 1";
        } else if (btn.id === "job2") {
            applyH.innerHTML = "Application for Job 2";
            applyId.id = "Job 2";
        } else {
            applyH.innerHTML = "Application for Job 3";
            applyId.id = "Job 3";
        }
    }
})
if (modal) {
    close.onclick = () => {
        modal.style.display = "none";
    }
}