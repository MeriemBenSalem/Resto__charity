var mongo=require("mongoose");
const Schema=mongo.Schema;
const Reclamation= new Schema(
    {
       // name:String,
        reclamation:String,
       date:Date
        
    }
);

module.exports=mongo.model("reclamation",Reclamation);