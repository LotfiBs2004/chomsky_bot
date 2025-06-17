const { Telegraf } = require('telegraf');
const axios = require('axios'); 
 

// Replace with your bot token
const bot = new Telegraf('bro go get your bot ');

// Imgflip API URL
const IMGFLIP_API_URL = 'https://api.imgflip.com/get_memes';

// Function to fetch a random meme
const fetchRandomMeme = async () => {
  try {
    const response = await axios.get(IMGFLIP_API_URL);
    if (response.data.success) {
      const memes = response.data.data.memes;
      // Select a random meme from the list
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      return randomMeme.url;
    }
    return null;
  } catch (error) {
    console.error('Error fetching memes:', error.message);
    return null;
  }
};

// Telegram command to send a random meme
bot.command('random_meme', async (ctx) => {
  const memeUrl = await fetchRandomMeme();
  if (memeUrl) {
    // Send the meme as a photo message
    await ctx.replyWithPhoto(memeUrl);
  } else {
    await ctx.reply('Sorry, I could not fetch a meme right now. Please try again later.');
  }
});

// Start the bot
bot.launch();
console.log('Bot is running...');
 


const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
