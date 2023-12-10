var mongo = require("mongoose");
const schema = mongo.Schema;
const Plat = new schema({
  name: String,
  description: String,
  prix: Number,
});

module.exports = mongo.model("plat", Plat);