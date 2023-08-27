function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showComments(data))
}


const showComments = (comments) => {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <h1>Name: ${comment.name} </h1>
            <p>email: ${comment.email} </P>
            <h3> comments: ${comment.body} </h3>
        `
        commentsContainer.appendChild(commentDiv)
    }
}

getComments();