import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../firebase';

export default function Newsletter() {
  const [books, setBooks] =useState([])
    const [input, setInput] = useState({
      title:"",
      author:""
    });
    const handleInput = (e) =>{
        setInput({
          ...input,
           [e.target.name] : e.target.value
          })
        }

        // fetching data from database 
        useEffect(
          ()=> onSnapshot(collection(db, "books"), (snapshot)=> setBooks(snapshot.docs.map(doc=>doc.data())))
        ,[])

        //submit or add to database
        const handleSubmit = async (e)=>{
          const payload = {title:input.title, author:input.author}
          const colRef = collection(db, "books")
         const docRef = await addDoc(colRef, payload)
          console.log(docRef.id);
        }

  return (
    <div> 
        {/* <form > */}
          <input placeholder='enter title' required onChange={handleInput} name="title"/>
          <input placeholder='enter author' required onChange={handleInput} name="author"/>
          <button onClick={handleSubmit}>Add</button>
        {/* </form> */}
        <form>
          <input placeholder='book id' required/>
          <button >Delete</button>
        </form>
    </div>
  )
}
