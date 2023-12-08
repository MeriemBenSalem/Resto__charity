const http = require ("http");
const express = require ("express");
const mongo = require ("mongoose");
const mongoconnect = require("./config/dbconnection.json");
const bodyParser=require("body-parser");
const path=require("path");
//importaion de fonction
const {add}=require("./controller/client");

mongo.connect(mongoconnect.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(()=>console.log('mongo connecter'))
  .catch((err)=>console.log(err));

const reclamationrouter = require ("./routes/reclamation");
const clientrouter = require ("./routes/client");
var app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/reclamation", reclamationrouter);
app.use("/client", clientrouter);
const server = http.createServer(app);
const io=require("socket.io")(server);

io.on("connection",(socket)=>{ 
  console.log("user connected");
  
  socket.emit("msg","user is connected");
  
  socket.on("typing",(data)=>{
    io.emit("typing", data+"is typing....");
});
})
io.on("connection",(socket)=>{ 
  console.log("user connected");
  socket.emit("msg",(data) => {
    io.emit("msg",data.name+ " is connected");
});

  socket.on("msg",(data)=>{
    add(data.objet);
    io.emit("msg", data.name+":"+data.objet);

  });

  socket.on("disconnect",()=>{
    console.log("user disconnect");
    io.emit("msg","user disconnect");
  })
})

server.listen(3000,() => {
  console.log('serveur run');
});

module.exports = app;

