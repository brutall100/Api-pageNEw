import createNavigation from './navigation.js'
createNavigation()



function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get user ID from URL
const userId = getQueryParam('id');

// Fetch the specific user data by ID
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        console.log(user);

        // Fetch the user's posts to count them
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);

                const postCount = posts.length; // Count the number of posts

                const userPage = document.querySelector('#content');
                userPage.innerHTML = `
                    <div class='user-details'>
                        <h1>${user.name}</h1>
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Posts:</strong> <a href="user-posts.html?id=${userId}">${postCount} posts</a></p>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
                    </div>
                `;
            })
            .catch(error => console.error('Error fetching user posts:', error));
    })
    .catch(error => console.error('Error fetching user details:', error));



