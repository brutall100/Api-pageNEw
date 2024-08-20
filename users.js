import createNavigation from './navigation.js'
createNavigation()





fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const users = data.map(user => {
            return `
            <div class='user-info'>
                <p>ID: ${user.id}</p>  
                <a href="user-info.html?id=${user.id}">${user.name}</a>
            </div>
            `;
        }).join('');

        const usersPage = document.querySelector('#content');
        usersPage.innerHTML = `
            <h1>Users</h1>
            ${users}
        `;
    })
    .catch(error => console.error('Error fetching users:', error));














// 1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas. Tai turi būti nuoroda.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.

//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.

