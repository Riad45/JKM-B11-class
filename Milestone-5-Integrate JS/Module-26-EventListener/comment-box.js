const postComment = document.getElementById("post-comment")
.addEventListener("click", function (){

    const writeComment = document.getElementById("write-comment");
    const commentText = writeComment.value;

if (commentText.trim() === "") {
    alert("Please enter a comment!");
    return;
}
const newComment = document.createElement("p");
newComment.classList.add("comment-box");
newComment.innerText = commentText;
const commentBoxContainer = document.getElementById("comment-box-container");
commentBoxContainer.appendChild(newComment);

writeComment.value= "";


});



