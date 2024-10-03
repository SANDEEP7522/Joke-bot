// const token = '7780662478:AAEhCXcflPvCr2LmEH9vBLwvYxwnT_IrBp4';

// console.log(process.env.TEST_RC);


//    it is window commond

// PS C:\Users\HP\desktop\TeleBot>  $env:TEST_VARIABLE = "123"
// PS C:\Users\HP\desktop\TeleBot>  echo $env:TEST_VARIABLE
// 123

const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const { default: axios } = require('axios');
dotenv.config();
// Replace with your bot token
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to my Telegram bot How can help YOU');
});

// Listen for any text message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Echo the received message
    bot.sendMessage(chatId, `You said: ${msg.text}`);
});

bot.onText(/\/jokes/, async (msg) => {
    const jokes = await axios.get('https://official-joke-api.appspot.com/random_joke') 
    const type = jokes.data.type;  
    const setup = jokes.data.setup;
    const punchline = jokes.data.punchline;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, type + "/ " + setup + " /" + punchline)
});


// bot.onText(/\/story/, async (msg) => {
//     const story = await axios.get('https://shortstories-api.onrender.com/stories')
//     console.log(story.data);
//     const _id = story.data._id;
//     const title = story.data.title;
//     const stori = story.data.stori;
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, _id + " / " + title + " / " + stori)
// })

