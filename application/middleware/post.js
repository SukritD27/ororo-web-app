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

    grabPostById: async function (req, res, next) {
        var { id } = req.params;

        try {
            var [results, _] = await db.execute(`SELECT post.id, post.video, post.title, post.description, post.createdAt, post.thumbnail, user.username FROM posts post JOIN users user ON fk_userid = user.id WHERE post.id = ?;`, [id]);

            const post = results[0];

            if (!post) {
                req.flash('error', 'Not your post!');
                req.session.save(function (err) {
                    if (err) next(err);
                    res.redirect('/');
                })
            } else {
                res.locals.post = post;
                next();
            }

        } catch (err) {
            next(err);
        }
    },

    grabAll: async function (req, res, next) {
        try {
            var [results, _] = await db.execute(`SELECT * FROM posts ORDER BY createdAt DESC LIMIT 15;`);
            if (results && results.length > 0) {
                res.locals.results = results;
            } 
            next();
        } catch (err) {
        }
    },

    getCommentsForPostById: async function (req, res, next) {
        var { id } = req.params;
        try{

            var[results, _] = await db.execute(`SELECT c.id, c.comment, c.createdAt, u.username 
            FROM comments c JOIN users u ON c.fk_userID=u.id 
            WHERE c.fk_postID=?;`, [id]);
            res.locals.post.comments = results;
            next();
        }catch(err){
            if(err) next(err);
        }
    }
}