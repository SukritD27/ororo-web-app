module.exports ={
    isLoggedIn : function(req, res, next) {
        if(req.session.user){
            next();
          }else{
            req.flash('error', 'Must be logged in to post content!');
            req.session.save(function(err){
              if (err) next (err);
              res.redirect('/login');
            })
          }
    },

    isLoggedInJSON : function(req, res, next) {
      if(req.session.user){
          next();
        }else{
          req.flash('error', 'You have to be logged in to post comments!');
          req.session.save(function(err){
            if (err) next (err);
            res.status(401).json({
              status: "failed",
              statusCode: -1,
              message: "You have to be logged in to post comments!",
              redirectTo: "/login"
            })
          })
        }
  }
}