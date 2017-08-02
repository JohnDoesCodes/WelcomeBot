let Discord = require("discord.js")
exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed();
  let suffix = message.content.split(' ').slice(1).join(' ');
  embed.setAuthor(`${message.author.avatarURL}`)
  .setDescription(`**Requested by ${message.author.user.username}:** ${suffix}`)
  .setTimestamp()
  .setColor("#e3148a")
  message.channel.send({embed})
}
