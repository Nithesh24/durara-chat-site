const socket = io("https://durara-server.herokuapp.com/")


var username = window.prompt("please re-enter your username")
console.log(username)
while (username === null || username === ""){
    username = window.prompt("please re-enter your username")
}
socket.emit("new-user", username)

const text = document.getElementById("text")
const message_container = document.getElementById("message-container")

function sendMessage(){
    if(text.value !== null){
        if(text.value !== ""){
            let message = username + " : " + text.value
            text.value = ""
            socket.emit("send-message", message)
        }
    }
}

//sending when pressed enter
window.addEventListener("keypress", (key) =>{
    if(key.code === "Enter"){
        sendMessage()
    }
})

socket.on("message-received", new_message=>{
    console.log(new_message)
    addMessage(new_message)
})

function addMessage(message){
    let new_div = document.createElement("div")
    new_div.className = "messages"
    new_div.innerText = message
    message_container.appendChild(new_div)
    message_container.scrollTop = message_container.scrollHeight
}

