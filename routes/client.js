const express = require("express");
const router = express.Router();
const clientController = require ("../controller/client");
const validate= require ("../middl/validation_client");

router.post("/add", validate, clientController.add);
router.get("/show", validate,clientController.show);
router.delete("/delete/:id",validate, clientController.deleteC);
router.put("/update/:id",validate, clientController.update);
router.get('/reclamation',(req,res,next)=>{
    res.render("reclamation");

})

module.exports = router;