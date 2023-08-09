var express = require('express');
var router = express.Router();
var multer = require('multer');
const { makeThumbnail, grabPostById, grabAll } = require('../middleware/post');
const { isLoggedIn } = require('../middleware/auth');
const db = require("../config/database.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/videos')
  },

  filename: function (req, file, cb) {
    const fileExtension = file.mimetype.split('/')[1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`)
  }
})

const upload = multer({ storage: storage })

router.post("/post-content", isLoggedIn, upload.single('video'), makeThumbnail, async function (req, res, next) {
  var { title, description } = req.body;
  var { path, thumbnail } = req.file;
  var { id } = req.session.user;

  try {

    var [insertResult, _] = await db.execute(`INSERT INTO posts (title, description, video, thumbnail, fk_userid) value (?,?,?,?,?);`, [title, description, path, thumbnail, id]);

    if (insertResult && insertResult.affectedRows) {
      req.flash("success", "Content was uploaded!");
      return req.session.save(function (err) {
        return res.redirect('/');
      })
    } else {
      req.flash("error", "Error in uploading the content. Sorry for the inconvinience. Please try again later.");
      return req.session.save(function (err) {
        if (err) next(err);
        return res.redirect('/postvideo');
      })
    }
  } catch (err) {
    next(err);
  }
})

router.get('/:id(\\d+)', grabPostById, function (req, res, next) {
  res.render('viewvideo', { title: 'View Post', name: "Sukrit Dev Dhawan" });
});


router.get("/search", async function (req, res, next) {
  var { key } = req.query;
  const search = `%${key}%`;

  try {
    var [results, _] = await db.execute(`SELECT id, title, description, thumbnail, concat_ws("", title, description) AS haystack FROM posts HAVING haystack LIKE ?`, [search]);
     //res.status(200).json({ results });

    if(results && results.length > 0){
      res.locals.count = results.length;
      res.locals.results = results;
    }else{
      res.locals.results = grabAll();
    }

    res.render('index');


  } catch (err) {
    //next(err);
  }

})

module.exports = router; 
