const pass = '123456';
const getPass = localStorage.getItem('password');

if (getPass !== null) {
    window.location.href = 'index.html';
}

document.getElementById('myForm').addEventListener('submit', login);

function login (e) {
    const password = document.getElementById('password');
    if (password.value === pass ) {
        e.preventDefault();
        localStorage.setItem('password', JSON.stringify(password));
        window.location.href = 'home.html';
        
    } else {
        alert('Please enter info');
    }
} 