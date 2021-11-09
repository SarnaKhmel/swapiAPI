const getPass = localStorage.getItem('password');
if (getPass === null) {
    window.location.href = 'index.html';
}

 document.getElementById('logout').addEventListener('click', logout);

function logout() {
    window.location.href = 'index.html';
    localStorage.removeItem('password') = null;

}