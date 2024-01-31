const accordionLoad = () => {
    let accordions = document.querySelectorAll(".accordion-heading");
    accordions.forEach((acco) => {
        acco.onclick = () => {
            acco.classList.toggle("active");
            let panel = acco.nextElementSibling;
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
            applyId.id = "Marketing Coordinator";
        }
    }
})
if (modal) {
    close.onclick = () => {
        modal.style.display = "none";
    }
}

const navClose = document.querySelector('.nav-close');
const menuItems = document.querySelectorAll(".nav-item");
const menuBtn = document.querySelector(".nav i");
menuBtn.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    menuItems.forEach((item) => {
        item.style.maxWidth = '28vw';
    })
    document.querySelector('.nav-menu ul').style.setProperty('--before-left', "-72vw");
    document.querySelector('.nav-menu ul').style.setProperty('--before-color', "rgba(0, 0, 0, 0.4)");
    document.querySelector('.nav-menu ul').style.setProperty('--before-time', "1.6s");
    navClose.style.right = '5px';
})
navClose.onclick = () => {
    document.querySelector('.nav').classList.toggle('active');
    menuItems.forEach((item) => {
        item.style.maxWidth = null;
    })
    document.querySelector('.nav-menu ul').style.setProperty('--before-time', "0.15s");
    document.querySelector('.nav-menu ul').style.setProperty('--before-left', "0");
    document.querySelector('.nav-menu ul').style.setProperty('--before-color', "rgba(0, 0, 0, 0)");
    navClose.style.right = '-30px';
}