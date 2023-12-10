var mongo=require("mongoose");
const Schema=mongo.Schema;
const Client= new Schema(
    {
        name:String,
        email:String,
       // nbrReclamation:Number
    }
)

module.exports=mongo.model("client",Client);