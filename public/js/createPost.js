const createPost = async (event) => {
    event.preventDefault();
console.log("createPost")
    // const title = document.querySelector('#post-title').value.trim();
    // const content = document.querySelector('#post-content').value.trim();
    const fullName = document.querySelector('#fullName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const listingTitle = document.querySelector('#listingTitle').value.trim();
    const listingCategory = document.querySelector('#listingCategory');
    const category = listingCategory.value;
    const listingDescription = document.querySelector('#listingDescription').value.trim();
    console.log(category)

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            //Add all form fields in modal for return
            fullName,
            email,
            listingTitle,
            listingCategory:category,
            listingDescription,
            listingThumb
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// document.querySelector('.new-post-form').addEventListener('submit', createPost);
document.querySelector('#listingModalForm').addEventListener('submit', createPost);
