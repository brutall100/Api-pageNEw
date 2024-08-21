import createNavigation from './navigation.js'
createNavigation()

async function init() {
    const contentElement = document.querySelector('#content')
    contentElement.append(await createPostElement(), await createCommentsElement())    
}

init()

async function createPostElement() {
    
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const postId = urlParams.get('post_id')
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    const post = await res.json()
    console.log(post)
    
    const { title, body, user } = post

    const postElement = document.createElement('div')
    postElement.classList.add('post-element')
    
    const postTitle = document.createElement('h2')
    postTitle.classList.add('post-title')
    postTitle.textContent = title
    postElement.append(postTitle)

    const postBody = document.createElement('p')
    postBody.classList.add('post-body')
    postBody.textContent = body
    postElement.append(postBody)

    const postAuthor = document.createElement('a')
    postAuthor.classList.add('post-author')
    postAuthor.textContent = `Author: ${user.name}`
    postAuthor.href = `./user-info.html?user_id=${user.id}`
    postElement.append(postAuthor)

   return postElement
}

async function createCommentsElement() {
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const postId = urlParams.get('post_id')

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const comments = await res.json()
    console.log(comments)

    const commentsElement = document.createElement('div')
    commentsElement.classList.add('comments-element')

    const summaryTitle = document.createElement('h3')
    summaryTitle.classList.add('comments-title')
    summaryTitle.textContent = 'Comments:'
    commentsElement.append(summaryTitle)

    const commentsList = document.createElement('ol')
    commentsList.classList.add('comments-list')
    commentsElement.append(commentsList)

    comments.forEach(comment => {
        const { name, email, body } = comment

        const commentItem = document.createElement('li')
        commentItem.classList.add('comment-item')
        commentsList.append(commentItem)

        const commentName = document.createElement('p')
        commentName.classList.add('comment-name')
        commentName.textContent = name
        commentItem.append(commentName)

        const commentBody = document.createElement('p')
        commentBody.classList.add('comment-body')
        commentBody.textContent = body
        commentItem.append(commentBody)

        const commentEmail = document.createElement('p')
        commentEmail.classList.add('comment-email')
        commentEmail.textContent = email
        commentItem.append(commentEmail)

    })

 return commentsElement
}