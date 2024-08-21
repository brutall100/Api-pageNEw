import createNavigation from './navigation.js'
createNavigation()

async function init() {
    const content = document.querySelector('#content')
    const pageTitle = createPageTitle('Albums:')
    // const albumsList = await createAlbumsList()

    content.append(pageTitle)
}

init()

function createPageTitle(text) {
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')

    return element
}