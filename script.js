
let userName = 'Marius';

function showMessage() {
    userName = "Jonas";
    let message = "Hello " + userName;
    console.log(message);
}

console.log(userName);
showMessage();
console.log(userName);
