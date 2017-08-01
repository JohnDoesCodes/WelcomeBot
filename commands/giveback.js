const Discord = require("discord.js");
exports.run = (client, message) => {
  let member = message.guild.member
  var red = message.guild.roles.find('name', "Red");
  var cyan = message.guild.roles.find('name', "Cyan");
  var black = message.guild.roles.find('name', "Black");
  var pink = message.guild.roles.find('name', "Pink");
  var green = message.guild.roles.find('name', "Green");
  var yellow = message.guild.roles.find('name', "Yellow");
  var blue = message.guild.roles.find('name', "Blue");
  var lime = message.guild.roles.find('name', "Lime");
  var orange = message.guild.roles.find('name', "Orange");
  var purple = message.guild.roles.find('name', "Purple");
  var plum = message.guild.roles.find('name', "Plum");
  var ob = message.guild.roles.find('name', "Ocean Blue");
  let args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.channel.send("Please specify an argument.")
  if (args === "red") {
    try {
      message.member.removeRole(red)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Red role.')
    }
  }
  if (args === "cyan") {
    try {
      message.member.removeRole(cyan)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Cyan role.')
    }
  }
  if (args === "black") {
    try {
      message.member.removeRole(black)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Black role.')
    }
  }
  if (args === "pink") {
    try {
      message.member.removeRole(pink)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Pink role.')
    }
  }
  if (args === "green") {
    try {
      message.member.removeRole(green)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Green role.')
    }
  }
  if (args === "yellow") {
    try {
      message.member.removeRole(yellow)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Yellow role.')
    }
  }
  if (args === "blue") {
    try {
      message.member.removeRole(blue)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Blue role.')
    }
  }
  if (args === "lime") {
    try {
      message.member.removeRole(lime)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Lime role.')
    }
  }
  if (args === "orange") {
    try {
      message.member.removeRole(orange)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Orange role.')
    }
  }
  if (args === "purple") {
    try {
      message.member.removeRole(purple)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Purple role.')
    }
  }
  if (args === "plum") {
    try {
      message.member.removeRole(plum)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Plum role.')
    }
  }
  if (args === "ob") {
    try {
      message.member.removeRole(ob)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Ocean Blue role.')
    }
  }
}
