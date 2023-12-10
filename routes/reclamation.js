const express = require("express");
const router = express.Router();
const reclamationController = require ("../controller/reclamation");
const validate= require ("../middl/validation_reclamation");

router.post("/add", validate, reclamationController.add);
router.get("/show",reclamationController.show);
router.delete("/delete/:id", reclamationController.deleteC);
router.put("/update/:id",validate, reclamationController.update);
router.get('/reclamation',(req,res,next)=>{
    res.render("reclamation");

})

module.exports = router;