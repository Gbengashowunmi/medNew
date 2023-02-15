import React, { useState } from 'react'

export default function Newsletter() {
    const [input, setInput] = useState("");
    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
e.preventDefault()
db.collection("emails").add({
    email:input,
    time: firebase.firestore.FieldValue.server()
})
    }
  return (
    <div>
        
    </div>
  )
}
