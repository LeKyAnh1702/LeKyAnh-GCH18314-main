var express = require('express');
const BrandModel = require('../models/BrandModel');
var router = express.Router();
router.get('/add', async(req, res) => {
    res.render('brand/brandAdd',{});
 });
router.post('/add', async (req, res) => {
    var brands = req.body;
    await BrandModel.create(brands)
       .then(console.log('Add toys successfully !'))
       .catch(err => console.log(err));
    res.redirect('/toys/add');
 });
 module.exports = router;