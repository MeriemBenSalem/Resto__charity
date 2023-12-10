
var express = require('express');
var router = express.Router();
var Plat = require("../model/plat");
var platController = require("../controller/platController");

router.post('/add', platController.add);
router.get('/afficher', platController.afficher);
router.get('/aff/:id', platController.afficherid);
router.get('/byname/:name', platController.byname);
router.put('/modifier/:id', platController.modifier);
router.delete('/supprimer/:id', platController.supprimer);
router.get('/plat',(req,res,next)=>{
res.render("plat");
})
module.exports = router;
