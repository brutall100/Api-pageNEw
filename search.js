import createNavigation from './navigation.js';
createNavigation();

async function init() {
    const content = document.querySelector('#content');

    // Create and append input and search button
    const searchInput = createSearchInput();
    const searchButton = createSearchButton(searchInput);

    appendToContent(content, [
        searchInput,
        searchButton,
        createPageTitle('Search Info:'),
        await findPostElement(),
        await findUserElement(),
        await findAlbumElement(),
        await findCommentElement()
    ]);
}

init();

function createPageTitle(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    element.classList.add('page-title');
    return element;
}

function createSearchInput() {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Search...');
    inputElement.setAttribute('id', 'search');
    inputElement.classList.add('search-input');
    return inputElement;
}

function createSearchButton(inputElement) {
    const button = document.createElement('button');
    button.textContent = 'Search';
    button.classList.add('search-button');
    button.addEventListener('click', () => {
        const searchValue = inputElement.value;
        window.location.href = `./search.html?search=${encodeURIComponent(searchValue)}`;
    });
    return button;
}

function getQueryParamsFromInput() {
    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    return urlParams.get('search');
}

async function fetchData(endpoint) {
    const searchQuery = getQueryParamsFromInput();
    if (!searchQuery) {
        return createErrorElement('No search query provided.');
    }
    const response = await fetch(`${endpoint}?q=${encodeURIComponent(searchQuery)}&_limit=10`);
    return response.json();
}

function createErrorElement(message) {
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    return errorElement;
}

function createSummaryTitle(type, count, query) {
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = `Found ${count} ${type}(s) with search query: ${query}`;
    return summaryTitle;
}

async function findPostElement() {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    if (Array.isArray(posts) && posts.length > 0) {
        const postElement = document.createElement('div');
        postElement.classList.add('post-element');
        postElement.append(createSummaryTitle('post', posts.length, getQueryParamsFromInput()));

        posts.forEach(({ title, body }) => {
            postElement.append(createElementWithText('h2', title, 'post-title'));
            postElement.append(createElementWithText('p', body, 'post-body'));
        });
        return postElement;
    }
    return createErrorElement('No posts found.');
}

async function findUserElement() {
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    if (Array.isArray(users) && users.length > 0) {
        const userElement = document.createElement('div');
        userElement.classList.add('user-element');
        userElement.append(createSummaryTitle('user', users.length, getQueryParamsFromInput()));

        users.forEach(({ name, username }) => {
            userElement.append(createElementWithText('h2', name, 'user-name'));
            userElement.append(createElementWithText('p', username, 'user-username'));
        });
        return userElement;
    }
    return createErrorElement('No users found.');
}

async function findAlbumElement() {
    const albums = await fetchData('https://jsonplaceholder.typicode.com/albums');
    if (Array.isArray(albums) && albums.length > 0) {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album-element');
        albumElement.append(createSummaryTitle('album', albums.length, getQueryParamsFromInput()));

        albums.forEach(({ title }) => {
            albumElement.append(createElementWithText('h2', title, 'album-title'));
        });
        return albumElement;
    }
    return createErrorElement('No albums found.');
}

async function findCommentElement() {
    const comments = await fetchData('https://jsonplaceholder.typicode.com/comments');
    if (Array.isArray(comments) && comments.length > 0) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-element');
        commentElement.append(createSummaryTitle('comment', comments.length, getQueryParamsFromInput()));

        comments.forEach(({ name, email, body }) => {
            commentElement.append(createElementWithText('h2', name, 'comment-name'));
            commentElement.append(createElementWithText('p', email, 'comment-email'));
            commentElement.append(createElementWithText('p', body, 'comment-body'));
        });
        return commentElement;
    }
    return createErrorElement('No comments found.');
}

function createElementWithText(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.classList.add(className);
    return element;
}

function appendToContent(content, elements) {
    elements.forEach(element => content.append(element));
}

// Aldas 20% GPT 80%

 






