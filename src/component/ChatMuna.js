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
    }
  render() {
    return (
      <></>
    )
  }
}

export default ChatMuna