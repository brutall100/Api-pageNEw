export default function createNavigation() {
    const navItems = [
        { name: 'Home', link: './' },
        { name: 'Posts', link: './posts.html' },
        { name: 'Users', link: './users.html' },
        { name: 'Albums', link: './albums.html' }
    ];

    // Create the navContainer element dynamically
    const navContainer = document.createElement('nav');
    navContainer.id = 'nav-container';
    navContainer.classList.add('nav-container'); 

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

        liElement.append(aElement);
        ulElement.append(liElement);
    });

    navContainer.append(ulElement);
    
    // Append the newly created navContainer to the body (or any other desired element)
    document.body.prepend(navContainer);
}


