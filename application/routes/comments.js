var express = require('express');
var router = express.Router();
const { isLoggedInJSON } = require('../middleware/auth');
const db = require("../config/database.js");



router.post('/post-comment', isLoggedInJSON, async function (req, res, next) {
    var { postId, comment } = req.body;
    var { id, username } = req.session.user;

    console.log([comment, postId, id]);
    try {
        var [insertResult, _] = await db.execute(`INSERT INTO comments (comment, fk_postid, fk_userid) VALUE (?,?,?);`, [comment, postId, id]);

        console.log(insertResult.affectedRows);

        if (insertResult && insertResult.affectedRows == 1) {
            return res.status(201).json({
                status: "success",
                statusCode: 0,
                comment,
                username,
                commentId: insertResult.insertId
            })
        } else {
            // req.flash("error", "Error in uploading the comment. Sorry for the inconvinience. Please try again later.");
            // return req.session.save(function (err) {
            //     if (err) next(err);
            //     return res.redirect(`/post/${postId}`);
            // })
            return res.status(500).json({
                status: "failed",
                statusCode: -1,
                message: "Error in creating comment, please try again later"
            })
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;