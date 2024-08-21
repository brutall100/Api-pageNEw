import createNavigation from './navigation.js'
createNavigation()

async function init() {
    const contentElement = document.querySelector('#content')
    const userContent = await createUserContent()
    const postsList = await createPostsList()
    contentElement.append(userContent, postsList)
}

init()

async function createUserContent() {
    const userContent = document.createElement('div')
    userContent.classList.add('user-content')

    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const userId = urlParams.get('user_id')

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
    const user = await res.json()
    console.log(user)

    const { name, username, email, address, phone, website, company } = user

    // Vartotojo vardas
    const userName = document.createElement('h2')
    userName.classList.add('user-name')
    userName.textContent = name
    userContent.append(userName)

    // Vartotojo slapyvardis
    const userUsername = document.createElement('p')
    userUsername.classList.add('user-username')
    userUsername.textContent = `Username: ${username}`
    userContent.append(userUsername)

    // Vartotojo el. paštas
    const userEmail = document.createElement('p')
    userEmail.classList.add('user-email')
    userEmail.textContent = `Email: ${email}`
    userContent.append(userEmail)

    // Vartotojo adresas su <address> žyma
    const userAddress = document.createElement('address')
    userAddress.classList.add('user-address')
    userAddress.innerHTML = `
        ${address.street}, ${address.suite}<br>
        ${address.city}, ${address.zipcode}
    `
    userContent.append(userAddress)

    // Vartotojo telefono numeris
    const userPhone = document.createElement('p')
    userPhone.classList.add('user-phone')
    userPhone.textContent = `Phone: ${phone}`
    userContent.append(userPhone)

    // Vartotojo svetainė
    const userWebsite = document.createElement('p')
    userWebsite.classList.add('user-website')
    const websiteLink = document.createElement('a')
    websiteLink.href = `http://${website}`
    websiteLink.textContent = website
    userWebsite.append('Website: ', websiteLink)
    userContent.append(userWebsite)

    // Vartotojo įmonė
    const userCompany = document.createElement('p')
    userCompany.classList.add('user-company')
    userCompany.innerHTML = `
        Company: ${company.name}<br>
        Catch Phrase: ${company.catchPhrase}<br>
        BS: ${company.bs}
    `
    userContent.append(userCompany)

    return userContent
}

async function createPostsList() {
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const userId = urlParams.get('user_id')

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
    const posts = await res.json()
    console.log(posts.posts)
    console.log(posts.name)

    const author = posts.name
    

    const postSection = document.createElement('section')
    postSection.classList.add('post-section')

    const postAuthor = document.createElement('h2')
    postAuthor.classList.add('post-author')
    postAuthor.textContent = `Posts by ${author}`
    postSection.append(postAuthor)

    const postsList = document.createElement('ol')
    postsList.classList.add('posts-list')
    postSection.append(postsList)

    posts.posts.forEach(post => {
        const { title, body} = post

        const postItem = document.createElement('li')
        postItem.classList.add('post-item')
        postsList.append(postItem)

        const postTitle = document.createElement('h3')
        postTitle.classList.add('post-title')
        postTitle.textContent = title

        const postBody = document.createElement('p')
        postBody.classList.add('post-body')
        postBody.textContent = body

        postItem.append(postTitle, postBody)

    })
    return postSection
}



