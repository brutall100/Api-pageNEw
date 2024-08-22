export default function createNavigation() {
    const navItems = [
        { name: 'Home', link: './' },
        { name: 'Posts', link: './posts.html' },
        { name: 'Users', link: './users.html' },
        { name: 'Albums', link: './albums.html' },
        // Pašaliname „Search“ elementą iš čia, nes sukursime jį atskirai
    ];

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

    // Create the search form
    const searchForm = document.createElement('form');
    searchForm.classList.add('search-form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = searchForm.querySelector('#search');
        const searchValue = searchInput.value;
        window.location.href = `./search.html?search=${encodeURIComponent(searchValue)}`;
    });

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.id = 'search';
    searchInput.placeholder = 'Search...';

    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.textContent = 'Search';

    searchForm.append(searchInput, searchButton);

    // Create list item for search form
    const searchLiElement = document.createElement('li');
    searchLiElement.classList.add('search-item');
    searchLiElement.append(searchForm);

    ulElement.append(searchLiElement);

    document.body.prepend(navContainer);
}

