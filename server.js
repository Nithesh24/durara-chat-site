const PORT = process.env.PORT || 5000

const io = require("socket.io")(PORT)

io.on("connection", socket =>{
    console.log("new user")
    socket.on("send-message", message =>{
        socket.emit("message-received", message)
        socket.broadcast.emit("message-received", message) //socket.broadcast will emit to all client and only socket.emit will send to only the client which sended the on 
    })
    socket.on("new-user", username =>{
        console.log("new user joined")
        socket.broadcast.emit("message-received", (username + " has joined"))  
    })
})

