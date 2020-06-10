io.on("connection", (socket) => {
    console.log(socket.id + "connected");

    socket.on("call", (data) => {
        switch(data.action){
            case "RINGING" : 
                console.log(data.payload.phoneNumber);
                break;
            case "OFFHOOK", "IDLE" : 
                console.log(data.payload.phoneNumber);
                break;
        }
    });


});