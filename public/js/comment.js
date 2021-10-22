
const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector('#comment-body').value.trim();
   //Partial solution from tutor.  This shows the route, js and handlebars is working.  
   let article_id = 1; // Hard coded. needs to be dynamic

  if (comment_body) {
    const response = await fetch(`/api/article/${article_id}`, {
      method: 'POST',
      body: JSON.stringify({comment_body}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/article/${article_id}`);
    } else {
      alert('failed to create comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
