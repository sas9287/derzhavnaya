require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
// const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const bot = new Telegraf("6774167185:AAFfpIXcx2zdDkjQocnsdwTTWPHsnCm0jBE");

bot.start((ctx) => {
  const gameUrl = "https://famous-creponne-e98f64.netlify.app/"; // Замените на URL вашей игры
  const gameButton = Markup.button.url("Играть", gameUrl);

  ctx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, чтобы начать играть.",
    Markup.inlineKeyboard([gameButton])
  );
});

bot.launch();

/*
запуск бота
node /Users/aleksandrsaltykov/Desktop/Настолка/Чат-бот/bot.js 
*/
