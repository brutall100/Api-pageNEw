import createNavigation from './navigation.js'
createNavigation()




// // Function to get URL parameters
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Fetch albums data
// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res => res.json())
//     .then(albums => {
//         console.log(albums);

//         // Extract unique user IDs from albums
//         const userIds = [...new Set(albums.map(album => album.userId))];
//         const albumIds = albums.map(album => album.id);

//         // Fetch user data for each user ID
//         const userPromises = userIds.map(id =>
//             fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
//         );

//         // Fetch photo data for each album
//         const photoPromises = albumIds.map(id =>
//             fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
//                 .then(res => res.json())
//                 .then(photos => ({
//                     albumId: id,
//                     count: photos.length,
//                     thumbnail: photos[0]?.thumbnailUrl // Use the first photo's thumbnail as the representative image
//                 }))
//         );

//         // Wait for all user and photo fetch requests to complete
//         Promise.all([Promise.all(userPromises), Promise.all(photoPromises)])
//             .then(([users, photoData]) => {
//                 // Create a map of userId to user data
//                 const userMap = {};
//                 users.forEach(user => {
//                     userMap[user.id] = user;
//                 });

//                 // Create a map of albumId to photo data
//                 const photoMap = {};
//                 photoData.forEach(({ albumId, count, thumbnail }) => {
//                     photoMap[albumId] = { count, thumbnail };
//                 });

//                 // Generate HTML for albums
//                 const albumsHtml = albums.map(album => {
//                     const user = userMap[album.userId];
//                     const { count, thumbnail } = photoMap[album.id] || { count: 0, thumbnail: '' };
//                     return `
//                     <div class='album-info'>
//                         <p><strong>Title:</strong> <a href="album-info.html?id=${album.id}">${album.title}</a></p>
//                         <p><strong>Created by:</strong> ${user ? user.name : 'Unknown'}</p>
//                         <p><strong>Number of Photos:</strong> ${count}</p>
//                         <p><strong>Cover Photo:</strong> <a href="album-info.html?id=${album.id}"><img src="${thumbnail}" alt="${album.title}"></a></p>
//                     </div>
//                     `;
//                 }).join('');

//                 const content = document.querySelector('#content');
//                 content.innerHTML = `
//                     <h1>Albums</h1>
//                     ${albumsHtml}
//                 `;
//             })
//             .catch(error => console.error('Error fetching user or photo data:', error));
//     })
//     .catch(error => console.error('Error fetching albums:', error));








//     3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas. Tai turi būti nuoroda. Ji turi vesti į album.html puslapį.

//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.
