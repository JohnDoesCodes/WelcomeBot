let Discord = require("discord.js")
exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed();
  let suffix = message.content.split(' ').slice(1).join(' ');
  embed.setAuthor("Say it please!")
  .setDescription(`**Requested by ${message.author.tag}:** ${suffix}`)
  .setTimestamp()
  .setColor("#e3148a")
  message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
}
