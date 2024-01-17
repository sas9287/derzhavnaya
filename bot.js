const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN); // Замените на ваш токен

bot.start((ctx) => {
  const gameUrl = 'https://famous-creponne-e98f64.netlify.app/'; // Замените на URL вашей игры
  const gameButton = Markup.button.url('Играть', gameUrl);

  ctx.reply('Добро пожаловать! Нажмите на кнопку ниже, чтобы начать играть.', Markup.inlineKeyboard([gameButton]));
});

bot.launch();


/*
запуск бота
node /Users/aleksandrsaltykov/Desktop/Настолка/Чат-бот/bot.js 
*/