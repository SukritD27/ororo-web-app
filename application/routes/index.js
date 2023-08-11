var express = require('express');
const { isLoggedIn } = require('../middleware/auth');
const { grabAll } = require('../middleware/post');
var router = express.Router();

/* GET home page. */
router.get('/', grabAll, function(req, res, next) {
  res.render('index', { title: 'ORORO', name:"Sukrit Dev Dhawan"});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', name:"Sukrit Dev Dhawan"});
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Registration Form', name:"Sukrit Dev Dhawan"});
});


router.get('/postvideo', isLoggedIn, function(req, res, next) {
  res.render('postvideo', { title: 'Post Your Video', name:"Sukrit Dev Dhawan"});
});

module.exports = router;
