
const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 
client.login('XsuBq6X6AicCsqXtn7qqli4LsQUCxp0N');
