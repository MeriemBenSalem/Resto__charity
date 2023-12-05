const Reclamation=require("../model/reclamation"); 
//**add */
async function add(x){
    try{
      const reclamation = new Reclamation({
        message:x,
        date:new Date()
      });
        await reclamation.save();
    }catch(err){
        console.log (err);
    }
}

//***update */
async function update(req, res, next) {
  try{
    await Reclamation.findByIdAndUpdate(req.params.id, req.body);
    res.send("update bravo");
   
  }
  catch(err){
    console.log(err);

  }
};
//***delete  */
async function deleteC(req, res, next) {
  try{
    await Reclamation.findByIdAndDelete(req.params.id);
    res.send("delete bravo");
   
  }
  catch(err){
    console.log(err);

  }
};

//**** fonction afficher*/
async function show(req, res, next) {
  try{

    const data= await Reclamation.find();
    res.json({data});
      
  }
  catch(err){
    console.log(err);

  }
};
module.exports = {add,show,add,deleteC,update};