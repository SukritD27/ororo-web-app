var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
const db = require("../config/database.js");
const validator = require('validator');
const validPassword = require('../middleware/validation.js');

router.post('/registration', async function (req, res, next) {

  var { username, email, password } = req.body;
  //server side validation
  // --> uniqueness checks
  // --> rules check

  // var score = validator.isStrongPassword(password, {
  //   returnScore : true
  // });
  // if(score > 40){
  // res.send('is strong password');
  // }else{
  //   res.send('is weak password');
  // }

  // if(validPassword){
  //  // return res.send( `strong ${validPassword}`);
  // }else{
  //   //return res.send( `weak ${validPassword}`);

  // }

  try {
    //uniqueness check
    var [results, _] = await db.execute(`select id from users where username=?`, [username]);
    if (results && results.length > 0) {
      console.log(`*****This ${username} already exists. Please try again.*****`)
      return res.redirect('/registration');
    }

    var [results, _] = await db.execute(`select id from users where email=?`, [email]);
    if (results && results.length > 0) {
      console.log(`*****${email} already exists. Please try again.*****`)
      return res.redirect('/registration');
    }

    var hashPass = await bcrypt.hash(password, 5);

    //inserting into the database
    var [insertResult, _] = await db.execute(`INSERT INTO users (username, email, password) VALUE (?,?,?);`, [username, email, hashPass]);

    if (insertResult && insertResult.affectedRows == 1) {
      res.redirect('/login');
    } else {
      res.redirect('/registration');
    }

  } catch (err) {
    next(err);
  }

})

router.post('/login', async function (req, res, next) {
  var { username, password } = req.body;

  //Checks to see if the user exists in the db
  try {

    var [results, _] = await db.execute('SELECT id, username, email, password FROM users WHERE username=?', [username]);

    const user = results[0];

    if (!user) {
      req.flash("error", 'Login failed');
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/login');
      })
      
    }

    var passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) {
      req.session.user = {
        id: user.id,
        username: user.username,
        email: user.email
      };
      res.redirect('/');
    } else {
      req.flash("error", 'Invalid credentials');
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/login');
      })
    }

  } catch (err) {
    next(err);
  }
})

// router.post("/postvideo", async function (req, res, next){

//   try{
  
//     if (isLoggedIn) {
//       return res.redirect('/postvideo');
//     }else{
//       req.flash("error", 'Please sign in before posting content');
//       return req.session.save(function(err){
//         if(err) next(err);
//         return res.redirect('/login');
//       })
//     }
//   }catch (err){
//     next(err);
//   }


// })

router.post("/logout", function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) next(err);
    return res.redirect("/login");
  })
})

module.exports = router;
