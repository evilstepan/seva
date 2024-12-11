// Добавление аккаунта администратора при загрузке страницы
window.addEventListener('load', () => {
    const admin = { email: "admin1@gmail.com", password: "123456", name: "Всеволод" };
    const existingAdmin = JSON.parse(localStorage.getItem('user'));
    
    if (!existingAdmin || existingAdmin.email !== admin.email) {
        localStorage.setItem('user', JSON.stringify(admin));
    }
});

// Переключение между формами
document.getElementById('to-login').addEventListener('click', () => {
    document.getElementById('registration-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
});

document.getElementById('to-register').addEventListener('click', () => {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('registration-form').classList.add('active');
});

// Регистрация
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const name = document.getElementById('regName').value;

    if (email && password && name) {
        localStorage.setItem('user', JSON.stringify({ email, password, name }));
        alert('Регистрация успешна! Теперь вы можете войти.');
        document.getElementById('registration-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

// Вход
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'cabinet.html';
    } else {
        alert('Неверный email или пароль!');
    }
});
