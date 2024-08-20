// navigation.js

const navItems = [
    { name: 'Home', link: './' },
    { name: 'Posts', link: './posts.html' },
    { name: 'Users', link: './users.html' },
    { name: 'Albums', link: './albums.html' }
];

function createNavigation() {
    const navContainer = document.getElementById('nav-container');
    const currentPath = window.location.pathname;


    const ulElement = document.createElement('ul');

    navItems.forEach(item => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        
        aElement.textContent = item.name;
        aElement.href = item.link;


        if (currentPath.includes(item.link)) {
            aElement.classList.add('active');
        }

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    });
    navContainer.appendChild(ulElement);
}

createNavigation();

