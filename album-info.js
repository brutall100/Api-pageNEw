import createNavigation from './navigation.js'
createNavigation()

async function init() {
   const content = document.querySelector('#content')
   const pageTitle = createPageTitle('Album Info:')
   const welcomeMessage = createWelcomeMessage() 

   content.append(pageTitle, welcomeMessage)
}
init()

function createPageTitle(text) {
   const element = document.createElement('h1')
   element.textContent = text
   element.classList.add('page-title')

   return element
}

function createWelcomeMessage() {
   const element = document.createElement('p')
   element.textContent = 'Welcome to the Album Info page!'
   element.classList.add('welcome-message')

   return element
}

