import createNavigation from './navigation.js'
createNavigation()


async function init() {
    const content = document.querySelector('#content')
    const pageTitle = createPageTitle('Posts:')
    const postsList = await createPostsList()

    content.append(pageTitle, postsList)
}

init()

function createPageTitle(text) {
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')

    return element
}

async function createPostsList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20&_expand=user&_embed=comments')
    const posts = await res.json()

    const postsList = document.createElement('ul')
    postsList.classList.add('posts-list')

    posts.forEach(post => {
        const { title, userId, id, user, comments } = post

        const postItem = document.createElement('li')
        postItem.classList.add('post-item')
        postsList.append(postItem)

        const postLink = document.createElement('a')
        postLink.classList.add('post-link')
        postLink.href = `./post.html?post_id=${id}`
        postLink.textContent = `${id}. ${title} (${comments.length})`

        const authorLink = document.createElement('a')
        authorLink.classList.add('author-link')
        authorLink.href = `./user-info.html?user_id=${userId}`
        authorLink.textContent = user.name

        postItem.append(postLink, ' - ', authorLink)
    })

    return postsList
}


















// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts.html). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.