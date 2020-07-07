// {
//     // method to submit the form data for new comment using AJAX
//     createComment(postId){
//         // let newCommentForm = $('#new-comment-form');

//         newCommentForm.submit(function(e){
//             e.preventDefault();

//             $.ajax({
//                 type: 'comment',
//                 url: '/comments/create',
//                 data: newCommentForm.serialize(),
//                 success: function(data){
//                     console.log(data);
//                 }, 
//                 error: function(error){
//                     let newComment = pSelf.newCommentDom(data.data.comment);
//                     $(`#post-comments-${postId}`).prepend(newComment);
//                     pSelf.deleteComment($(' .delete-comment-button', newComment));
//                 } 
//             });
//         });
//     }

//     // method to create a post in DOM

//     let newCommentDom = function(comment){
//         return $(`<li id="comment-${comment._id}">
//                         <p>
                            
//                             <small>
//                                 <a class="delete-comment-button" href="/comments/destroy/${comment.id}">X</a>
//                             </small>
                            
//                             ${comment.content}
//                             <br>
//                             <small>
//                                 ${comment.user.name}
//                             </small>
//                         </p>
//                     </li>`)
//     }





//     createComment();
// }

