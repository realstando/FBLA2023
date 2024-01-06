import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    })
});

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
onAuthStateChanged(auth, user => {
    if (user) {
        loggedInLinks.forEach(item => item.style.display = 'inline-block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'inline-block');
    }
})





