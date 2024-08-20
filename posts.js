// Fetch posts data
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        console.log(posts);

        // Create an array of unique userIds from the posts
        const userIds = [...new Set(posts.map(post => post.userId))];
        const postIds = posts.map(post => post.id);

        // Fetch all users whose IDs are in the userIds array
        const userPromises = userIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
        );

        // Fetch comments count for each post
        const commentPromises = postIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(res => res.json())
                .then(comments => ({ postId: id, count: comments.length }))
        );

        // Wait for all user and comment fetch requests to complete
        Promise.all([Promise.all(userPromises), Promise.all(commentPromises)])
            .then(([users, commentsCount]) => {
                // Create a map of userId to user data
                const userMap = {};
                users.forEach(user => {
                    userMap[user.id] = user;
                });

                // Create a map of postId to comment count
                const commentsMap = {};
                commentsCount.forEach(({ postId, count }) => {
                    commentsMap[postId] = count;
                });

                // Now map over the posts to create the HTML
                const postsHtml = posts.map(post => {
                    const author = userMap[post.userId];
                    const commentCount = commentsMap[post.id] || 0; // Default to 0 if no comments
                    return `
                    <div class='post-info'>
                        <p>ID: ${post.id}</p>
                        <a href="post-info.html?id=${post.id}">${post.title}</a>
                        <p><strong>Comments:</strong> <a href="post-comments.html?postId=${post.id}">${commentCount} comments</a></p>
                        <p><strong>Author:</strong> <a href="user-info.html?id=${author.id}">${author.name}</a></p>
                    </div>
                    `;
                }).join('');

                const postsPage = document.querySelector('#content');
                postsPage.innerHTML = `
                    <h1>Posts</h1>
                    ${postsHtml}
                `;
            })
            .catch(error => console.error('Error fetching user or comments data:', error));
    })
    .catch(error => console.error('Error fetching posts:', error));

















// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts.html). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.