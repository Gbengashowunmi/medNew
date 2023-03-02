import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore"
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

  initializeApp(firebaseConfig) 

  // initialize service
  const db = getFirestore()

  // collection reference 
  // export const colRef = collection(db, "books")
  // export const colRef = collection(db, "newsletter-email-list")



  // get collection data 
 
  // getDocs(colRef)
  //   .then((snapshot)=>{ 
  //     let books = []
  //     snapshot.docs.forEach((doc)=>{
  //       books.push({...doc.data(), id:doc.id})
  //     })
  //     console.log(books)
  // })
  // .catch(err=>{
  //   console.log(err);
  // })

  // adding document 
  // addDoc(colRef, {
  //   title:"",
  //   author:""
  // })
  // .then(()=>{
  // })

export default  db
