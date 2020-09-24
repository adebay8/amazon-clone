import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDno_wkQu1VLf87_RSYw0qNIw4xRl23oiM",
    authDomain: "clone-2fb3e.firebaseapp.com",
    databaseURL: "https://clone-2fb3e.firebaseio.com",
    projectId: "clone-2fb3e",
    storageBucket: "clone-2fb3e.appspot.com",
    messagingSenderId: "539408181857",
    appId: "1:539408181857:web:62361becc4bde94bef9820",
    measurementId: "G-YQ3YWZX01F"
});

const auth = firebase.auth();

export default auth