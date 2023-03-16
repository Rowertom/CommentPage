import './scss/base.scss';
import { Comment } from './js/comment.js';
import { posts } from './js/posts.js';
import { serializeForm } from './js/utils.js';

const commentsContainer = document.querySelector('.comments');
const formAddComment = document.querySelector('#form-comment');

let comments = [];

posts.forEach((post) => {
  comments.push(post);
});

loadComments();
saveComments();

formAddComment.addEventListener('submit', () => {
  const elementsFormComment = [...formAddComment.elements];
  const dataFromForm = serializeForm(elementsFormComment);
  comments.push(dataFromForm);
  saveComments();
  showComments();
});



function onClickToRemove(id) {
  const index = comments.findIndex(n => n._id === id);
  if (index !== -1) {
    comments.splice(index, 1);
  }
  saveComments();
  location.reload();
}


function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
  showComments();
}

function showComments() {
  comments.forEach((post) => {
    const commentInstance = new Comment(post, '#comment-template', onClickToRemove);
    const newCommentElement = commentInstance.getElement();
    commentsContainer.append(newCommentElement);
  })
}

// function timeConverter(UNIX_timestamp){
//     var a = new Date(UNIX_timestamp * 1000);
//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     var year = a.getFullYear();
//     var month = months[a.getMonth()];
//     var date = a.getDate();
//     var hour = a.getHours();
//     var min = a.getMinutes();
//     var sec = a.getSeconds();
//     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//     return time;
//   }