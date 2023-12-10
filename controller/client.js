const Client = require ("../model/client");
//**add */
async function add(req, res, next){
    try{
        const client = new Client(req.body);
        await client.save();
        res.status(200).send (" add");
    }catch(err){
        console.log (err);
    }
}
//***update */
async function update(req, res, next) {
    try{
      await Client.findByIdAndUpdate(req.params.id, req.body);
      res.send("update bravo");
     
    }
    catch(err){
      console.log(err);
  
    }
  };
//***delete  */
async function deleteC(req, res, next) {
    try{
      await Client.findByIdAndDelete(req.params.id);
      res.send("delete bravo");
     
    }
    catch(err){
      console.log(err);
  
    }
  };

  //**** fonction afficher*/
 async function show(req, res, next) {
    try{
  
      const data= await Client.find();
      res.json({data});
        
    }
    catch(err){
      console.log(err);
  
    }
  };

module.exports = {add,show,update,deleteC};