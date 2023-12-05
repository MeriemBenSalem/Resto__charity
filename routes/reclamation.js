const express = require("express");
const router = express.Router();
const reclamationController = require ("../controller/reclamation");
const validate= require ("../middl/validation");

router.post("/add", validate, reclamationController.add);
router.get("/show", validate,reclamationController.show);
router.delete("/delete",validate, reclamationController.deleteC);
router.put("/update",validate, reclamationController.update);
router.get('/reclamation',(req,res,next)=>{
    res.render("reclamation");

})

module.exports = router;