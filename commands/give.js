const Discord = require("discord.js");
let member = message.guild.member
var red = message.guild.roles.find('name', "Red");
var members = message.guild.roles.find('name', "Members");

exports.run = (client, message, args) => {
  if (!args) return message.channel.send("Please specify an argument.")
  if (args === "members") {
    message.member.addRole(members)
    message.reply("Done 👌")
    message.channel.send('I can\'t find the Members.')
  }
  if (args === "red") {
    message.member.addRole(red)
    message.reply("Done 👌")
    message.channel.send('I can\'t find the Red role.')
  }
}
