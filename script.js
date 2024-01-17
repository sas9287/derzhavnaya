require('dotenv').config();
const botToken = process.env.TELEGRAM_BOT_TOKEN;


// Получаем элемент canvas и его контекст
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Задаем размеры canvas
canvas.width = 800;
canvas.height = 600;

// Основной цикл игры
function gameLoop() {
  // Очищаем canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Здесь будем обновлять и рисовать игровые объекты

  // Вызываем gameLoop снова, чтобы получить анимацию
  requestAnimationFrame(gameLoop);
}

// Начинаем игровой цикл
gameLoop();

// Получаем кнопки из DOM
const startButton = document.getElementById("start-button");
const rulesButton = document.getElementById("rules-button");
const donateButton = document.getElementById("donate-button");
const supportButton = document.getElementById("support-button");

// Обработчики событий для кнопок
startButton.addEventListener("click", () => {
  // Перейти на страницу начала игры
  // Здесь вы можете добавить логику для перехода
});

rulesButton.addEventListener("click", () => {
  // Перейти на страницу правил игры
  // Здесь вы можете добавить логику для перехода
});

donateButton.addEventListener("click", () => {
  // Перейти на страницу доната
  // Здесь вы можете добавить логику для перехода
});

supportButton.addEventListener("click", () => {
  // Перейти на страницу поддержки
  // Здесь вы можете добавить логику для перехода
});
