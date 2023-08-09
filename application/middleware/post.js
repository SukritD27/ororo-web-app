var pathToFFMPEG = require("ffmpeg-static");
var promisify = require('util').promisify;
var exec = promisify(require("child_process").exec);
const db = require("../config/database.js");
module.exports = {
    makeThumbnail: async function (req, res, next) {
        if (!req.file) {
            next(new Error("File upload failed"));
        } else {
            try {
                var destinationOfThumbnail = `public/uploads/images/thumbnail-${req.file.filename.split(".")[0]}.png`;
                var thumbnailCommand = `"${pathToFFMPEG}" -ss 00:00:01 -i ${req.file.path} -y -s 200x200 -vframes 1 -f image2 ${destinationOfThumbnail}`;
                var { stdout, stderr } = await exec(thumbnailCommand);
                req.file.thumbnail = destinationOfThumbnail;
                next();
            } catch (error) {
                next(error);
            }
        }
    },

    grabPostById: async function(req, res, next){
        var{id} = req.params;

        try{
           var [results,_] = await db.execute(`SELECT post.id, post.video, post.title, post.description, post.createdAt, post.thumbnail, user.username FROM posts post JOIN users user ON fk_userid = user.id WHERE post.id = ?;`, [id]);

           const post = results[0];

           if(!post){
            req.flash('error', 'Not your post!');
            req.session.save(function(err){
              if (err) next (err);
              res.redirect('/');
            })
           }else{
               res.locals.post = post;
               next(); 
           }

        }catch(err){
            next(err);
        }
    },

    grabAll: async function(req, res, next){
        try{
            var [results, _] = await db.execute(`SELECT id, title, description, thumbnail FROM posts`);
            if(results && results.length>0){
                 return res.locals.results = results;
            }else{
                //console.log("habdksdjbk;jsbjfd");
            }
            
            next();

        }catch(err){
        }
    }
}