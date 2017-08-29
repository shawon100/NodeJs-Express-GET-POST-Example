var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ruet Template' });
});

router.get('/crud/', function(req, res, next) {
  res.render('crud', {title:'Cool', condition:true, array:[1,2,3]});
});

router.get('/crud/:id', function(req, res, next) {
  res.render('crud', {title:'Value', output: req.params.id, con:true});
});


router.post('/submit', function(req, res, next) {

  res.render('submit', {title:'Submit', name:req.body.name,email:req.body.email});

});

module.exports = router;
