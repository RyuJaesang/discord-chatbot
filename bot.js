var Discord = require('discord.io');

var bot = new Discord.Client({
  token: "Njg2NTkyNDE4MTc4NTMxNTA1.XmZkmQ.6NFJ3Hv_4UYTxrT7QqW_CnmiCkU",
  autorun: true
});

bot.on('ready', function() {
  console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
  if (message === "ping") {
    bot.sendMessage({
      to: channelID,
      message: "pong"
    });
  }
});