const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`)
  bot.user.setActivity("Use rmd-help to get a list of cmds!");
});

bot.on("message", async message => {
  if(message.author.bot) return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1)

  if(!message.channel.type === "dm") {
  if(cmd === `${prefix}announce`) {
    if(!args[0]) return message.channel.send("**Incorrect Usage!** Use rmd-help remind for more information about the command!")
    if(args[0] == "add") {
     // console.log(Date.UTC(2018, 11, 16).toString);
    }
  }
}


  if(cmd === `${prefix}something`) {

  }

})
