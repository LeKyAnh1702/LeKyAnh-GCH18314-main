var express = require('express');
const CategoryModel = require('../models/CategoryModel');

var router = express.Router();

router.get('/add', async(req, res) => {
    res.render('category/categoryAdd',{});
 });
router.post('/add', async (req, res) => {
    var categories = req.body;
    await CategoryModel.create(categories)
       .then(console.log('Add toys successfully !'))  
       .catch(err => console.log(err));
    res.redirect('/toys/add');
 });
 module.exports = router;