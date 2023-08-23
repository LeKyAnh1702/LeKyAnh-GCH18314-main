var mongoose = require ('mongoose');
var ToySchema = mongoose.Schema({
   name: String,
   mfg: Date,
   category: String,
   color: String,
   manufacture: String,
   detail: String,
   test: String,
   image: String,
});
const ToyModel = mongoose.model('toy', ToySchema, 'toy');
module.exports = ToyModel;