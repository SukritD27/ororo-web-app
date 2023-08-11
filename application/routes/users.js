var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
const db = require("../config/database.js");
const { doesEmailExist, doesUsernameExist, validPassword, validUsername, validEmail } = require('../middleware/validation.js');

router.post('/registration',validUsername, validEmail, validPassword, doesEmailExist, doesUsernameExist, async function (req, res, next) {

  var { username, email, password } = req.body;

  try {

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
      req.flash("error", 'Incorrect username or password!');
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
      req.flash("error", 'Incorrect username or password!');
      return req.session.save(function(err){
        if(err) next(err);
        return res.redirect('/login');
      })
    }

  } catch (err) {
    next(err);
  }
})


router.post("/logout", function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) next(err);
    return res.redirect("/login");
  })
})

module.exports = router;
