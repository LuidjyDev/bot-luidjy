
const Discord = require("discord.js");
var bot = new Discord.Client();
 
bot.on("ready", function() {
  bot.user.setGame("CLDEV-Bot, !CLDev");
 console.log("Le Bot s'est bien connecté");
});
 
 
bot.login('XsuBq6X6AicCsqXtn7qqli4LsQUCxp0N');
