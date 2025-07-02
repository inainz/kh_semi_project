const chatServer = new WebSocket("url" , "protocol");

function sendMessage() {
    const message = document.getElementById("message").value;
    if(message != ''){

        const msg = {
            type: "message",
            text : message,
            id : "?",
            date : Date.now(),
        };
        
        chatServer.send(JSON.stringify(msg));
        
    }
    }


    chatServer.onmessage = (event) =>{
        console.log(event);
    }