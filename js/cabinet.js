window.addEventListener('load', () => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!user) {
        alert('Вы не авторизованы. Пожалуйста, войдите.');
        window.location.href = 'reg.html';
        return;
    }

    // Установить приветствие
    document.getElementById('user-info').textContent = `Здравствуйте, ${user.name}`;

    document.getElementById('user-info-email').textContent = `Ваша почта: ${user.email}`;

    // Если пользователь администратор, показываем сообщения
    if (user.email === 'admin1@gmail.com') {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const messagesContainer = document.getElementById('messages-container');
        const messagesList = document.getElementById('messages-list');

        if (messages.length > 0) {
            messages.forEach((msg) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>Имя:</strong> ${msg.name}<br>
                    <strong>Email:</strong> ${msg.email}<br>
                    <strong>Сообщение:</strong> ${msg.message}<br>
                    <small>${msg.date}</small>
                    <hr>
                `;
                messagesList.appendChild(listItem);
            });
        } else {
            messagesList.textContent = 'Сообщений нет.';
        }

        // Показываем контейнер с сообщениями
        messagesContainer.style.display = 'block';
    }
});
