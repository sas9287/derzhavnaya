// Получаем элементы из DOM
const feedbackText = document.getElementById("feedback-text");
const sendButton = document.getElementById("send-button");
const botToken = document.getElementById("bot-token").value;

// Обработчик события для текстового поля
feedbackText.addEventListener("input", () => {
    // Проверяем, если текстовое поле пустое, то делаем кнопку бледной и некликабельной
    if (feedbackText.value.length === 0) {
        sendButton.disabled = true;
    } else {
        sendButton.disabled = false;
    }
});

// Обработчик события для кнопки "Отправить"
sendButton.addEventListener("click", () => {
    const message = document.getElementById("feedback-text").value;

    // Отправить сообщение на сервер
    fetch("/send-message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message, botToken })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Сообщение отправлено!");
        } else {
            alert("Произошла ошибка при отправке сообщения.");
        }
    });
});

// Получаем кнопку "Назад" из DOM
const backButton = document.getElementById("back-button");

// Обработчик события для кнопки "Назад"
backButton.addEventListener("click", () => {
    // Перенаправляем пользователя обратно на страницу "Меню"
    window.location.href = "index.html";
});



