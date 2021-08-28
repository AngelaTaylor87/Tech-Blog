const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#article-title').value.trim();
    const body = document.querySelector('#article-body').value.trim();
  
    if (title && body) {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({title, body}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('failed to create new article');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  console.log(id);
      const response = await fetch(`/api/dashboard/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('failed to delete post');
      }
    }
  };
  
  
  document
    .querySelector('.new-article-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.article-list')
    .addEventListener('click', delButtonHandler);
  