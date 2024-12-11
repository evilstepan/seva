

// function showMore() {
//     // Найти первый скрытый контейнер-строку
//     const hiddenRows = document.querySelectorAll('.row.hidden');
//     if (hiddenRows.length > 0) {
//         hiddenRows[0].classList.remove('hidden');
//     }
//     // Если больше скрытых строк нет, скрыть кнопку
//     if (document.querySelectorAll('.row.hidden').length === 0) {
//         document.querySelector('.show-more-btn').style.display = 'none';
//     }
// }

function showMore() {
    // Найти первый скрытый контейнер-строку
    const hiddenRows = document.querySelectorAll('.row.hidden');
    if (hiddenRows.length > 0) {
        const row = hiddenRows[0];
        row.classList.remove('hidden'); // Удаляем класс hidden
        setTimeout(() => {
            row.classList.add('visible'); // Плавно отображаем строку
        }, 10); // Задержка нужна, чтобы CSS-транзиции сработали
    }
    // Если больше скрытых строк нет, скрыть кнопку
    if (document.querySelectorAll('.row.hidden').length === 0) {
        document.querySelector('.show-more-btn').style.display = 'none';
    }
}