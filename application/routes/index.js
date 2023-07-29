var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Sukrit Dev Dhawan"});
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Sukrit Dev Dhawan"});
});

router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Login', name:"Sukrit Dev Dhawan"});
  
});

router.get('/registration.html', function(req, res, next) {
  res.render('registration', { title: 'Registration Form', name:"Sukrit Dev Dhawan"});
  
});

router.get('/postvideo.html', function(req, res, next) {
  res.render('postvideo', { title: 'Post Your Video', name:"Sukrit Dev Dhawan"});
  
});

router.get('/viewvideo.html/:id(\\d+)', function(req, res, next) {
  console.log(req.params);
  res.render('viewvideo', { title: 'View Post', name:"Sukrit Dev Dhawan"});
  
});

module.exports = router;
