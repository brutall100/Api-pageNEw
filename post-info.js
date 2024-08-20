import createNavigation from './navigation.js'
createNavigation()





// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// const postId = getQueryParam('id');

// // Fetch the specific post data by ID
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(res => res.json())
//     .then(post => {
//         console.log(post);

//         // Fetch the author details using the userId from the post data
//         fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//             .then(res => res.json())
//             .then(author => {
//                 console.log(author);

//                 const postPage = document.querySelector('#content');
//                 postPage.innerHTML = `
//                     <div class='post-details'>
//                         <h1>${post.title}</h1>
//                         <p><strong>ID:</strong> ${post.id}</p>
//                         <p><strong>Body:</strong> ${post.body}</p>
//                         <p><strong>Author:</strong> <a href="user-info.html?id=${author.id}">${author.name}</a></p>
//                     </div>
//                 `;
//             })
//             .catch(error => console.error('Error fetching author details:', error));
//     })
//     .catch(error => console.error('Error fetching post details:', error));

