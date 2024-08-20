import createNavigation from './navigation.js'
createNavigation()


// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Get album ID from URL
// const albumId = getQueryParam('id');

// // Fetch the specific album data by ID
// fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
//     .then(res => res.json())
//     .then(album => {
//         console.log(album);

//         // Fetch the user who created this album
//         fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
//             .then(res => res.json())
//             .then(user => {
//                 // Fetch all photos in this album
//                 fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
//                     .then(res => res.json())
//                     .then(photos => {
//                         console.log(photos);

//                         // Generate HTML for album details
//                         const albumDetailsHtml = `
//                             <div class='album-details'>
//                                 <h1>${album.title}</h1>
//                                 <p><strong>Created by:</strong> <a href="user-info.html?id=${user.id}">${user.name}</a></p>
//                                 <p><strong>Number of Photos:</strong> ${photos.length}</p>
//                                 <div class='photo-gallery'>
//                                     ${photos.map(photo => `
//                                         <a href="${photo.url}" target="_blank">
//                                             <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//                                         </a>
//                                     `).join('')}
//                                 </div>
//                             </div>
//                         `;

//                         const content = document.querySelector('#content');
//                         content.innerHTML = albumDetailsHtml;
//                     })
//                     .catch(error => console.error('Error fetching album photos:', error));
//             })
//             .catch(error => console.error('Error fetching user details:', error));
//     })
//     .catch(error => console.error('Error fetching album details:', error));

