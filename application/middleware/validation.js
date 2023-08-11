const db = require("../config/database.js");
const validator = require('validator');


module.exports = {
    validPassword: function (req, res, next) {
        var { password, confirmPassword } = req.body;

        var score = validator.isStrongPassword(password, {
            returnScore: true
        });

        if (score < 40 && !password == confirmPassword) {
            req.flash("error", "Password should have: \n Minimum 8 character, \n Atleast 1 number, \n Atleast 1 Upper Case letter, \n Atleast 1 special character: (/ * - + ! @ # $ ^ & ~ [ ]).");
            req.session.save(function (err) {
                if (err) next(err);
                res.redirect('/registration');
            })
        } else {
            next();
        }
    },
    validEmail: function (req, res, next) {
        var { email } = req.body;


        next();
    },

    validUsername: async function (req, res, next) {
        var { username } = req.body;

        var letters = /^[A-Za-z]+$/;
        var alphanumerics = /^[0-9a-zA-Z]+$/;
        err = [];

        if (username.length < 3 || !username.charAt(0).match(letters) || !username.match(alphanumerics)) {
            
            req.flash("error", "Minimum length of 3 characters, Username should start with an alphabet, Username should only contain alphanumeric characters.");
            req.session.save(function (err) {
                if (err) next(err);
                res.redirect('/registration');
            })
        } else {
            
            next();
        }


    },
    doesEmailExist: async function (req, res, next) {
        var { email } = req.body;
        var [results, _] = await db.execute(`select id from users where email=?`, [email]);
        if (results && results.length > 0) {
            req.flash("error", "Username already exists!");
            req.session.save(function (err) {
                if (err) next(err);
                res.redirect('/registration');
            })
        } else {
            next();
        }
    },
    doesUsernameExist: async function (req, res, next) {
        var { username } = req.body;
        var [results, _] = await db.execute(`select id from users where username=?`, [username]);
        if (results && results.length > 0) {
            req.flash("error", "Username already exists!");
            req.session.save(function (err) {
                if (err) next(err);
                res.redirect('/registration');
            })
        } else {
            next();
        }
    }
}