const { Telegraf } = require('telegraf');
const axios = require('axios'); 
 

// Replace with your bot token
const bot = new Telegraf('7526406921:AAFQ_eek9FB-iqeh9luCA38BtfuNg07MhrU');

// Imgflip API URL
 


bot.command('meme', async (ctx) => {
  try {
      // Get the keywords from the message (everything after /meme)
      const userInput = ctx.message.text.split('/meme')[1].trim();
      
      // Configure the API request
      const apiUrl = 'https://api.humorapi.com/memes/random';
      const params = {
          'api-key': HUMOR_API_KEY,
          'media-type': 'image'
      };
      
      // Add keywords if provided
      if (userInput) {
          params.keywords = userInput;
      }

      // Make the request to Humor API
      const response = await axios.get(apiUrl, { params });
      
      // Send the meme to the user
      if (response.data && response.data.url) {
          // Send a "loading" message
          await ctx.reply('Finding a meme for you... 🔍');
          
          // Send the meme
          await ctx.replyWithPhoto(response.data.url);
      } else {
          await ctx.reply('Sorry, couldn\'t find a meme with those keywords. Try different keywords!');
      }
  } catch (error) {
      console.error('Error fetching meme:', error);
      await ctx.reply('Sorry, there was an error fetching the meme. Please try again later!');
  }
});

// Error handler
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('An error occurred while processing your request.');
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