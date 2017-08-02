let Discord = require("discord.js")
exports.run = (client, message) => {
  let args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.channel.send("Please specify an argument.\n`say`.")
  if (args === "say") {
    let embed = new Discord.RichEmbed();
    let suffix = message.content.split(' ').slice(2).join(' ');
    embed.setDescription(`Requested by ${message.author.user}: ${suffix}`)
    message.channel.send({embed})
  }
}
