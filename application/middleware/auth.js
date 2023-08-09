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
    }
}