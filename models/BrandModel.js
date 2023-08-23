var mongoose = require ('mongoose');
var BrandSchema = mongoose.Schema({
   name: String,
   
});
const BrandModel = mongoose.model('brand', BrandSchema, 'brand');
module.exports = BrandModel;