const username = document.getElementById("username")
const password = document.getElementById("password")

const socket = io("http://localhost:5000")

const entry_password = "baccano"
function enter(){
    if (password.value === entry_password && username.value !== ""){
        window.location.replace("./home.html")
        socket.emit("user_entered", username.value)
    }else{
        username.value = ""
        password.value = ""
    }
}

window.addEventListener("keypress", key =>{
    if (key.code === "Enter"){
        enter()
    }
})