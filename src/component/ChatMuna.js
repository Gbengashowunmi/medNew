import React, { Component } from 'react'

export class ChatMuna extends Component {
    componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"38d8d7e8001c143fc8ea008a5ff9a4abd","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }
  render() {
    return (
      <>
      
      </>
    )
  }
}

export default ChatMuna

// import React, { useState } from 'react';
// import openai from 'openai'; // Assuming the OpenAI API is installed via npm

// function Bot() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   // Define a function to get a response from the OpenAI API
//   async function askOpenAI(question) {
//     const prompt = `Please answer the following question: ${question}`;
//     const response = await openai.Completion.create({
//       engine: 'davinci',  // Choose the OpenAI language model
//       prompt,
//       temperature: 0.5,  // Controls the creativity of the response
//       maxTokens: 1024,  // Maximum length of the response
//       n: 1,  // Number of responses to return
//       stop: null,
//     });
//     const answer = response.choices[0].text.trim();
//     return answer;
//   }

//   // Define a function to handle user input and get a response from OpenAI
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const answer = await askOpenAI(message);
//     setResponse(answer);
//   }

//   return (
//     <div>
//       <h1>Medpau.net Bot</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Ask a question:
//           <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {response && (
//         <div>
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatMuna;