// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBaU6sD3j-qUbuyr31yVXus9cgCqM16UaE",
    authDomain: "gbenga-backend.firebaseapp.com",
    projectId: "gbenga-backend",
    storageBucket: "gbenga-backend.appspot.com",
    messagingSenderId: "240389385890",
    appId: "1:240389385890:web:e741e3a260c9ac4e4631fb",
    measurementId: "G-ER5PG329SV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db;