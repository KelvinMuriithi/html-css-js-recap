const users = [
    { username: 'John Doe', password: 'password123' },
    { username: 'Jane Smith', password: 'password456' }
];
function signIn(username, password) {
    // check if the username and password match any user in the users array
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log(`User ${username} signed in successfully!`);
    } else {
        console.log(`Invalid username or password for ${username}.`);
    }
}
signIn('John', 'password123');