import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, addDoc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJjjtXM1C_BvfAEem1mbDUQ3ujUOAiIoo",
    authDomain: "fbla2023-80e98.firebaseapp.com",
    databaseURL: "https://fbla2023-80e98-default-rtdb.firebaseio.com",
    projectId: "fbla2023-80e98",
    storageBucket: "fbla2023-80e98.appspot.com",
    messagingSenderId: "686848203670",
    appId: "1:686848203670:web:6394cb438eca21fe0e5bb7",
    measurementId: "G-8END03QN9K"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signupForm['email'].value;
        const password = signupForm['password'].value;

        createUserWithEmailAndPassword(auth, email, password).then(cred => {
            location.href = 'apply.html';
            signupForm.reset();
        })
    })
}

const loginForm = document.querySelector('#login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['email'].value;
        const password = loginForm['password'].value;

        // log the user in
        signInWithEmailAndPassword(auth, email, password).then((cred) => {
            location.href = 'apply.html';
            loginForm.reset();
        });

    });
}

const logout = document.querySelector('#signout-btn');
logout.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log('user signed out');
    })
});

let account = "";
const collectionRef = collection(db, 'user');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountBtn = document.querySelector('#accountBtn');
const admin = document.querySelector(".admin");
const q = query(collection(db, "user"));
onAuthStateChanged(auth, user => {
    account = user;
    if (user) {
        if (window.innerWidth <= "800") {
            loggedInLinks.forEach(item => item.style.display = 'block');
            loggedOutLinks.forEach(item => item.style.display = 'none');
            accountBtn.style.display = 'block';
        }
        else {
            loggedInLinks.forEach(item => item.style.display = 'inline-block');
            loggedOutLinks.forEach(item => item.style.display = 'none');
            accountBtn.style.display = 'inline-block';
        }
        if (auth.currentUser.email === 'rryanwwang@gmail.com' || auth.currentUser.email === 'pratyushpat08@gmail.com') {
            onSnapshot(q, (data) => {
                if (data && admin) {
                    let html = '<h1>All Applications</h1>';
                    data.forEach(doc => {
                        const adminData = doc.data();
                        const adminHtml = `
                            <div class="accordion">
                                <button class="accordion-heading">
                                    ${adminData.id} - ${adminData.fname} ${adminData.lname}
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                                <div class="accordion-content">
                                    <div><h2 style='display: inline-block; padding-top: 2vh;'>Age: </h2><p style='display: inline-block; margin-left: 0.5vw;'> ${adminData.age}</p></div> 
                                    <div><h2 style='display: inline-block;'>Email: </h2><p style='display: inline-block; margin-left: 0.5vw;'> ${adminData.email}</p></div> 
                                    <div><h2 style='display: inline-block;'>Phone Number: </h2><p style='display: inline-block; margin-left: 0.5vw;'> ${adminData.phoneNumber}</p></div> 
                                    <div><h2 style='display: inline-block;'>Address: </h2><p style='display: inline-block; margin-left: 0.5vw;'> ${adminData.address}</p></div> 
                                    <div><h2 style='display: inline-block;'>Available Hours: </h2><p style='display: inline-block; margin-left: 0.5vw;'> ${adminData.ava}</p></div> 
                                    <h2>Job Experience: </h2><p>${adminData.exp}</p> 
                                    <h2>Education Background: </h2><p>${adminData.edu}</p> 
                                    <h2>Reason for Applying: </h2><p>${adminData.reason}</p>
                                    <h2>Other Information: </h2><p>${adminData.other}</p>
                                </div>
                            </div>
                        `;
                        html += adminHtml;
                    });
                    admin.innerHTML = html;
                };
                accordionLoad();
            })
        }
    } else {
        if (window.innerWidth <= "800") {
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'block');
            accountBtn.style.display = 'none';
        }
        else {
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'inline-block');
            accountBtn.style.display = 'none';
        }
    }
})

addEventListener("resize", () => {
    if (window.innerWidth <= "800") {
        if (account) {
            loggedInLinks.forEach(item => item.style.display = 'block');
            loggedOutLinks.forEach(item => item.style.display = 'none');
            accountBtn.style.display = 'block';
        } else {
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'block');
            accountBtn.style.display = 'none';
        }
    }
    else {
        if (account) {
            loggedInLinks.forEach(item => item.style.display = 'inline-block');
            loggedOutLinks.forEach(item => item.style.display = 'none');
            accountBtn.style.display = 'inline-block';
        } else {
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'inline-block');
            accountBtn.style.display = 'none';
        }
    }
})

const applyForm = document.querySelector('.apply-form');
if (applyForm) {
    applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addDoc(collectionRef, {
        fname: applyForm.firstname.value,
        lname: applyForm.lastname.value, 
        age: applyForm.age.value, 
        phoneNumber: applyForm.phoneNumber.value, 
        email: applyForm.email.value, 
        address: applyForm.address.value, 
        ava: applyForm.availability.value, 
        exp: applyForm.exp.value, 
        edu: applyForm.edu.value, 
        reason: applyForm.reason.value, 
        other: applyForm.other.value, 
        id: applyForm.id
    }).then(() => {
        const modal = document.querySelector('.modal');
            modal.style.display = 'none';
        applyForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
    });
}