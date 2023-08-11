const commmentBtn = document.getElementById('commentBtn');
const commentTxtArea = document.getElementById('comments');
const commentsList = document.getElementById('commentsList');

function buildCommentDiv(data) {
    const dateString = new Date().toLocaleString("en-us", {
        timeStyle: "short",
        dateStyle: "long"
    });
    const divComment = document.createElement('div');
    divComment.id = `comment-${data.commentId}`;
    divComment.classList.add('comment');
    const usernametag = document.createElement('strong');
    usernametag.classList.add('comment-author');
    usernametag.appendChild(document.createTextNode(data.username));
    const dateSpan = document.createElement('span');
    dateSpan.appendChild(document.createTextNode(dateString));
    dateSpan.classList.add('comment-date');
    const commentText = document.createElement('div');
    commentText.classList.add('comment-text');
    commentText.appendChild(document.createTextNode(data.comment));
    divComment.append(usernametag, dateSpan, commentText);
    return divComment;
}

if (commentTxtArea) {
    commentTxtArea.addEventListener('keypress', function (ev) {
        const keyPressed = ev.key;
        if (keyPressed === "Enter" && !ev.ctrlKey) {
            console.log('send comment');
        }
    })
}

if (commentBtn) {
    commentBtn.addEventListener('click', function (ev) {
        const comment = commentTxtArea.value;
        const postId = ev.currentTarget.dataset.postid;
        console.log([comment, postId]);

        const payLoad = {
            postId: postId,
            comment: comment
        }


        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payLoad)
        }


        fetch("/comments/post-comment", fetchOptions)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                if (data.statusCode < 0) {
                    window.location.replace("/login");
                } else {
                    const commentDiv = buildCommentDiv(data);
                    commentsList.append(commentDiv);
                    commentTxtArea.value="";
                    window.location.replace(`#comment-${data.commentId}`)
                }
            })
            .catch(error => console.error(error)) 
        
    })
}
