const Reclamation=require("../model/reclamation"); 
//**add */
async function add(req,res,next){
    try{
      const reclamation = new Reclamation(req.body);
        await reclamation.save();
        res.status(200).send("add succee")
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


//*socket**/

async function AddReclamationSocket(data) {
  try {
    const reclamation= new Reclamation({
      
         reclamation: data.reclamation,
         date: data.date,
   
    });

    console.log("addReclamation" + JSON.stringify(data));
    const rec1 = await Reclamation.findByIdAndUpdate(data.Reclamation, {
      reclamation: reclamation,
      date: data,
    });
    
    await reclamation.save();
    //res.status(200).send("add good Reclamation");
  } catch (err) {
    console.log(err);
  }
}

async function AfficheReclamationSocket(data) {
  try {
    console.log("Affiche Reclamation" + JSON.stringify(data));
    const reclamation = await Reclamation.findById(data.reclamation);
    const date = await Reclamation.findById(data.date);

    r = { rec: reclamation, date: date };
    return r;
  } catch (err) {
    console.log(err);
  }
}
//**fin socket */
module.exports = {add,show,add,deleteC,update, AddReclamationSocket,AfficheReclamationSocket};