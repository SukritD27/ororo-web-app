const validator = require('validator');

module.exports = {
    validPassword: function(req, res, next){
        var score = validator.isStrongPassword(password, {
            returnScore : true
          });
          console.log(`haha ${password}`);
          res.send('hahah');
    }
}