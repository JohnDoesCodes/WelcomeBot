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
  var members = message.guild.roles.find('name', "Members");
  let args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.channel.send("Please specify an argument.")
  if (args === "members") {
    try {
      message.member.addRole(members)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Members role.')
    }
  }
  if (args === "red") {
    try {
      message.member.addRole(red)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Red role.')
    }
  }
  if (args === "cyan") {
    try {
      message.member.addRole(cyan)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Cyan role.')
    }
  }
  if (args === "black") {
    try {
      message.member.addRole(black)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Black role.')
    }
  }
  if (args === "pink") {
    try {
      message.member.addRole(pink)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Pink role.')
    }
  }
  if (args === "green") {
    try {
      message.member.addRole(green)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Green role.')
    }
  }
  if (args === "yellow") {
    try {
      message.member.addRole(yellow)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Yellow role.')
    }
  }
  if (args === "blue") {
    try {
      message.member.addRole(blue)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Blue role.')
    }
  }
  if (args === "lime") {
    try {
      message.member.addRole(role)
      message.reply("Done 👌")
    } catch (err) {
      message.channel.send('I can\'t find the Lime role.')
    }
  }
  if (args === "orange") {
    try {
        message.member.addRole(orange)
    message.reply("Done 👌")
    } catch (err) {
        message.channel.send('I can\'t find the Orange role.')
    }
  }
  if (args === "purple") {
    try {
        message.member.addRole(purple)
    message.reply("Done 👌")
    } catch (err) {
        message.channel.send('I can\'t find the Purple role.')
    }
  }
  if (args === "plum") {
    try {
        message.member.addRole(plum)
    message.reply("Done 👌")
    } catch (err) {
        message.channel.send('I can\'t find the Plum role.')
    }
  }
  if (args === "ob") {
    try {
        message.member.addRole(ob)
    message.reply("Done 👌")
    } catch (err) {
        message.channel.send('I can\'t find the Ocean Blue role.')
    }
  }
}
