var express = require('express');
var router = express.Router();
var Commande = require("../model/commande");
var commandeController = require("../controller/commandeController");

router.post('/add', commandeController.add);
router.get('/afficher', commandeController.afficher);
router.get('/aff/:id', commandeController.afficherid);
router.get('/byname/:name', commandeController.byname);
router.put('/modifier/:id', commandeController.modifier);
router.delete('/supprimer/:id', commandeController.supprimer);

module.exports = router;
