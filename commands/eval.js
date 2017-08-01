const Discord = require("discord.js");

exports.run = (client, message, args) => {
if (message.author.id !== "241216483592634368")
return message.reply("This can only be used by the bot owner.")
if (!message.guild || !message.member) return;
var evalcode = message.content.split(" ").splice(1).join(" ");
		try {
			var evaled = eval(evalcode);
			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			message.channel.sendMessage("Output:\n```x1\n" + clean(evaled) + "```");
		}
		catch (err) {
			message.channel.sendMessage("Error: " + clean(err));
		}

		function clean(text) {
			if (typeof(text) === "string") {
				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			}
			else {
				return text;
			}
		}
  }
