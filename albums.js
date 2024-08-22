import createNavigation from './navigation.js'
createNavigation()


async function init() {
    const content = document.querySelector('#content')
    const pageTitle = createPageTitle('Albums:')
    const albumsList = await createAlbumsList()

    content.append(pageTitle, albumsList)
}

init()

function createPageTitle(text) {
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')
    return element
}

async function createAlbumsList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=100&_expand=user')
    const albums = await res.json()
    console.log(albums)

    const albumsList = document.createElement('ul')
    albumsList.classList.add('albums-list')

    albums.forEach(album => {
        const { title, user, id } = album

        const albumItem = document.createElement('li')
        albumItem.classList.add('album-item')
        albumsList.append(albumItem)

        const albumLink = document.createElement('a')
        albumLink.classList.add('album-link')
        albumLink.href = `./album-info.html?album_id=${id}`
        albumLink.textContent = `${title} `
        albumItem.append(albumLink)

        const authorLink = document.createElement('a')
        authorLink.classList.add('author-link')
        authorLink.href = `./user-info.html?user_id=${user.id}`
        authorLink.textContent = user.name
        albumItem.append(' - ', authorLink)



        
    })
    

    return albumsList
}





//     3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas. Tai turi būti nuoroda. Ji turi vesti į album.html puslapį.

//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.
