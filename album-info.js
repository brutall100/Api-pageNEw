import createNavigation from './navigation.js';
createNavigation();

async function init() {
    const content = document.querySelector('#content');
    const pageTitle = createPageTitle('Album Info:');
    const welcomeMessage = createWelcomeMessage();
    
    content.append(pageTitle, welcomeMessage);
    await createGallery();
}

init();

function createPageTitle(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    element.classList.add('page-title');
    return element;
}

function createWelcomeMessage() {
    const element = document.createElement('p');
    element.textContent = 'Welcome to the Album Info page!';
    element.classList.add('welcome-message');
    return element;
}

async function createGallery() {
    const imageData = [
        { src: 'https://via.placeholder.com/300x200?text=Image1', title: 'Image 1' },
        { src: 'https://via.placeholder.com/300x200?text=Image2', title: 'Image 2' },
        { src: 'https://via.placeholder.com/300x200?text=Image3', title: 'Image 3' },
        { src: 'https://via.placeholder.com/300x200?text=Image4', title: 'Image 4' }
    ];

    const galleryContainer = document.getElementById('gallery');

    if (!galleryContainer) {
        console.error('Gallery container not found');
        return;
    }

    imageData.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        item.appendChild(img);
        galleryContainer.appendChild(item);

        // Add click event to open PhotoSwipe
        item.addEventListener('click', () => openPhotoSwipe(imageData, index));
    });
}

function openPhotoSwipe(items, index) {
    const pswpElement = document.querySelectorAll('.pswp')[0];
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items.map(item => ({
        src: item.src,
        w: 600, // Adjust width and height as necessary
        h: 400,
        title: item.title
    })), { index });

    gallery.init();
}


