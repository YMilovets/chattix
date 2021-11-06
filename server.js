const port = 8080;

const io = require("socket.io")(port, {
    cors: {
        origin: "http://localhost:3000",
    }
});
let dataMsg = [];
let users = [];

io.on("connection", socket => {

    socket.on("send", data => {
        dataMsg.push(data);
        io.emit("getListMsg", dataMsg)
    }) 

    socket.on("join", (nick) => {
        if (!users.find(elem => elem.id === socket.id ))
            users.push({
                id: socket.id,
                nickname: nick
            });
        io.emit("getUsers", users);
        io.emit("getListMsg", dataMsg);
    })

    socket.on("disconnect", () => {
        users = users.filter(elem => elem.id !== socket.id);
        io.emit("getUsers", users);
    })

});