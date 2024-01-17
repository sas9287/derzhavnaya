// Получаем элементы формы
const donateForm = document.getElementById("donate-form");
const donateAmountInput = document.getElementById("donate-amount");
const donateSubmitButton = document.getElementById("donate-submit");

// Функция для форматирования числа в рубли
function formatToRubles(number) {
  return number.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  });
}

// Обработчик события для отправки формы
donateForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем значение суммы доната из поля ввода
  const donateAmount = parseFloat(donateAmountInput.value);

  // Проверяем, что значение больше или равно 1 и является числом
  if (donateAmount >= 1 && !isNaN(donateAmount)) {
    // Выводим отформатированную сумму доната в рублях
    alert(`Вы внесли: ${formatToRubles(donateAmount)}`);
    
    // Очищаем поле ввода после успешной отправки
    donateAmountInput.value = "";
  } else {
    alert("Введите сумму доната больше или равную 1 рублю."); // Выводим сообщение об ошибке
  }
});

// Обработчик события для поля ввода суммы доната
donateAmountInput.addEventListener("input", () => {
  // Получаем введенное значение
  const amountValue = parseFloat(donateAmountInput.value);

  // Проверяем, что значение больше или равно 1 и является числом
  if (amountValue >= 1 && !isNaN(amountValue)) {
    donateSubmitButton.removeAttribute("disabled"); // Разблокируем кнопку
  } else {
    donateSubmitButton.setAttribute("disabled", true); // Блокируем кнопку
  }
});

// Получаем кнопку "Назад" из DOM
const backButton = document.getElementById("back-button");

// Обработчик события для кнопки "Назад"
backButton.addEventListener("click", () => {
  // Перенаправляем пользователя обратно на страницу "Меню"
  window.location.href = "index.html";
});
