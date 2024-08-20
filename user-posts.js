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

        // Fetch the user's posts
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);

                // Generate HTML for user details and their posts
                const userPostsHtml = `
                    <div class='user-posts'>
                        <h1>Posts by ${user.name}</h1>
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <h2>${posts.length} Posts</h2>
                        <div class='posts-list'>
                            ${posts.map(post => `
                                <div class='post'>
                                    <h3><a href="post-info.html?id=${post.id}">${post.title}</a></h3>
                                    <p>${post.body}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

                const content = document.querySelector('#content');
                content.innerHTML = userPostsHtml;
            })
            .catch(error => console.error('Error fetching user posts:', error));
    })
    .catch(error => console.error('Error fetching user details:', error));
