import createNavigation from './navigation.js'
createNavigation()

async function init() {
    const contentElement = document.querySelector('#content')
    const userContent = await createUserContent()

    contentElement.append(userContent)
}

init()

async function createUserContent() {
    const userContent = document.createElement('div')
    userContent.classList.add('user-content')

    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const userId = urlParams.get('user_id')

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)
    const user = await res.json()
    console.log(user)

    const { name } = user

    const userName = document.createElement('h2')
    userName.classList.add('user-name')
    userName.textContent = name
    userContent.append(userName)

    return userContent
}



