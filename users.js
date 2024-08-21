import createNavigation from './navigation.js'
createNavigation()

async function init() {
    const contentElement = document.querySelector('#content')
    const usersList = await createUsersList()

    contentElement.append(usersList)
}
init()

async function createUsersList() {
    const usersList = document.createElement('ul')
    usersList.classList.add('users-list')

    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersRes.json()

    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsRes.json()

    const postCountByUser = posts.reduce((acc, post) => {
        acc[post.userId] = (acc[post.userId] || 0) + 1
        return acc
    }, {})

    users.forEach(user => {
        const userElement = document.createElement('li')
        userElement.classList.add('user')

        const userName = document.createElement('a')
        userName.classList.add('user-name')
        userName.textContent = `${user.name} `
        userName.href = `user-info.html?user_id=${user.id}`
        userElement.append(userName)

        const userNickname = document.createElement('span')
        userNickname.classList.add('user-nickname')
        userNickname.textContent = user.username
        userElement.append(userNickname)

        const userPostCount = document.createElement('span')
        userPostCount.classList.add('user-post-count')
        userPostCount.textContent = ` Posts: ${postCountByUser[user.id] || 0}`
        userElement.append(userPostCount)

        usersList.append(userElement)
    })

    return usersList
}



// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas. Tai turi būti nuoroda.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.

//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.

