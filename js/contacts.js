function init() {
    let map = new ymaps.Map('map', {
        center: [56.42757891083619, 38.725055441856114],
        zoom: 15
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
}

// Убедитесь, что вызов `ymaps.ready(init)` выполнен один раз
ymaps.ready(init);

// Обработка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, message, date: new Date().toLocaleString() });
        localStorage.setItem('messages', JSON.stringify(messages));

        alert('Ваше сообщение отправлено!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});
function init() {
let map = new ymaps.Map('map', {
    center: [56.42757891083619, 38.725055441856114],
    zoom: 15
});

map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
}

// ymaps.ready(init);

// Обработка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function (e) {
e.preventDefault(); // Предотвращаем перезагрузку страницы

const name = document.getElementById('contact-name').value;
const email = document.getElementById('contact-email').value;
const phone = document.getElementById('contact-phone').value;
const message = document.getElementById('contact-message').value;

const feedback = { name, email, phone, message };
let feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
feedbackData.push(feedback);

localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
alert('Ваше сообщение отправлено!');

// Очищаем форму
document.getElementById('contact-form').reset();
});