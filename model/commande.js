var mongo = require("mongoose");
const schema = mongo.Schema;
const Commande = new schema({
  plat: String,
  adresse: String,
  date: Date,
});

module.exports = mongo.model("commande", Commande);