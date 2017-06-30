const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
var moment = require('moment')

process.on('uncaughtException', function(err) {
    console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE BOT FROM CRASHING
});

//Member Joining
client.on("guildMemberAdd", member =>{
     var embed = new Discord.RichEmbed();
    var moment = require('moment')
    embed.setAuthor(`${member.user.tag}`, `https://cdn.discordapp.com/attachments/248014822082347008/325320653156777986/w_logo.png`)
    .setFooter(`User Joined`)
    .setColor("#1973E6")
    .setTimestamp()
    .setDescription(`${member.user}` + " " + "welcome to Aeris Discord Server! Please make sure you check out our rules!")
    client.guilds.get("280285147805384704").channels.get("280285147805384704").sendEmbed(
        embed, {
                disableEveryone: true
            }
    );
});
    //Bots prefix
	const prefix = "p!"

client.on('message', message => {

    //Evaluate JavaScript
	if(message.content.startsWith(prefix + "eval")) {
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

//Get roles
if (message.content.startsWith(prefix + "agree")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Supporters");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Supporters.')
      }
  }
}

if (message.content.startsWith(prefix + "red")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Red");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Red role.')
      }
  }
}
if (message.content.startsWith(prefix + "nored")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Red");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Red role.')
      }
  }
  }

if (message.content.startsWith(prefix + "cyan")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Cyan");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Cyan role.')
      }
  }
}
if (message.content.startsWith(prefix + "nocyan")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Cyan");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Cyan role.')
      }
  }
  }


if (message.content.startsWith(prefix + "black")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Black");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Black role.')
      }
  }
}
if (message.content.startsWith(prefix + "noblack")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Black");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Black role.')
      }
  }
  }

if (message.content.startsWith(prefix + "pink")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Pink");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Pink role.')
      }
  }
}
if (message.content.startsWith(prefix + "nopink")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Pink");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Pink role.')
      }
  }
  }

if (message.content.startsWith(prefix + "green")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Green");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Green role.')
      }
  }
}
if (message.content.startsWith(prefix + "nogreen")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Green");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Green role.')
      }
  }
  }

if (message.content.startsWith(prefix + "yellow")) {
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Yellow");
      try {
          message.member.addRole(role)
		  message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Yellow role.')
      }
  }
}
if (message.content.startsWith(prefix + "noyellow")) {
const Discord = require("discord.js");
if (!message.guild || !message.member) return;
  if (!message.guild || message.guild.id !== '280285147805384704') return; {
      let member = message.guild.member
      var role = message.guild.roles.find('name', "Yellow");
      try {
          message.member.removeRole(role)
          message.reply("Done 👌")
      } catch (err) {
          message.channel.send('I can\'t find the Yellow role.')
      }
  }
  }

  if (message.content.startsWith(prefix + "blue")) {
  if (!message.guild || !message.member) return;
    if (!message.guild || message.guild.id !== '280285147805384704') return; {
        let member = message.guild.member
        var role = message.guild.roles.find('name', "Blue");
        try {
            message.member.addRole(role)
  		  message.reply("Done 👌")
        } catch (err) {
            message.channel.send('I can\'t find the Blue role.')
        }
    }
  }

  if (message.content.startsWith(prefix + "noblue")) {
  const Discord = require("discord.js");
  if (!message.guild || !message.member) return;
    if (!message.guild || message.guild.id !== '280285147805384704') return; {
        let member = message.guild.member
        var role = message.guild.roles.find('name', "Yellow");
        try {
            message.member.removeRole(role)
            message.reply("Done 👌")
        } catch (err) {
            message.channel.send('I can\'t find the Blue role.')
        }
    }
    }

    if (message.content.startsWith(prefix + "lime")) {
    if (!message.guild || !message.member) return;
      if (!message.guild || message.guild.id !== '280285147805384704') return; {
          let member = message.guild.member
          var role = message.guild.roles.find('name', "Lime");
          try {
              message.member.addRole(role)
    		  message.reply("Done 👌")
          } catch (err) {
              message.channel.send('I can\'t find the Lime role.')
          }
      }
    }

    if (message.content.startsWith(prefix + "nolime")) {
    const Discord = require("discord.js");
    if (!message.guild || !message.member) return;
      if (!message.guild || message.guild.id !== '280285147805384704') return; {
          let member = message.guild.member
          var role = message.guild.roles.find('name', "Lime");
          try {
              message.member.removeRole(role)
              message.reply("Done 👌")
          } catch (err) {
              message.channel.send('I can\'t find the Lime role.')
          }
      }
      }

      if (message.content.startsWith(prefix + "orange")) {
      if (!message.guild || !message.member) return;
        if (!message.guild || message.guild.id !== '280285147805384704') return; {
            let member = message.guild.member
            var role = message.guild.roles.find('name', "Orange");
            try {
                message.member.addRole(role)
      		  message.reply("Done 👌")
            } catch (err) {
                message.channel.send('I can\'t find the Orange role.')
            }
        }
      }

      if (message.content.startsWith(prefix + "noorange")) {
      const Discord = require("discord.js");
      if (!message.guild || !message.member) return;
        if (!message.guild || message.guild.id !== '280285147805384704') return; {
            let member = message.guild.member
            var role = message.guild.roles.find('name', "Orange");
            try {
                message.member.removeRole(role)
                message.reply("Done 👌")
            } catch (err) {
                message.channel.send('I can\'t find the Orange role.')
            }
        }
        }

        if (message.content.startsWith(prefix + "purple")) {
        if (!message.guild || !message.member) return;
          if (!message.guild || message.guild.id !== '280285147805384704') return; {
              let member = message.guild.member
              var role = message.guild.roles.find('name', "Purple");
              try {
                  message.member.addRole(role)
        		  message.reply("Done 👌")
              } catch (err) {
                  message.channel.send('I can\'t find the Purple role.')
              }
          }
        }

        if (message.content.startsWith(prefix + "nopurple")) {
        const Discord = require("discord.js");
        if (!message.guild || !message.member) return;
          if (!message.guild || message.guild.id !== '280285147805384704') return; {
              let member = message.guild.member
              var role = message.guild.roles.find('name', "Purple");
              try {
                  message.member.removeRole(role)
                  message.reply("Done 👌")
              } catch (err) {
                  message.channel.send('I can\'t find the Purple role.')
              }
          }
          }

          if (message.content.startsWith(prefix + "plum")) {
          if (!message.guild || !message.member) return;
            if (!message.guild || message.guild.id !== '280285147805384704') return; {
                let member = message.guild.member
                var role = message.guild.roles.find('name', "Plum");
                try {
                    message.member.addRole(role)
          		  message.reply("Done 👌")
                } catch (err) {
                    message.channel.send('I can\'t find the Plum role.')
                }
            }
          }

          if (message.content.startsWith(prefix + "noplum")) {
          const Discord = require("discord.js");
          if (!message.guild || !message.member) return;
            if (!message.guild || message.guild.id !== '280285147805384704') return; {
                let member = message.guild.member
                var role = message.guild.roles.find('name', "Plum");
                try {
                    message.member.removeRole(role)
                    message.reply("Done 👌")
                } catch (err) {
                    message.channel.send('I can\'t find the Plum role.')
                }
            }
            }

            if (message.content.startsWith(prefix + "ob")) {
            if (!message.guild || !message.member) return;
              if (!message.guild || message.guild.id !== '280285147805384704') return; {
                  let member = message.guild.member
                  var role = message.guild.roles.find('name', "Ocean Blue");
                  try {
                      message.member.addRole(role)
            		  message.reply("Done 👌")
                  } catch (err) {
                      message.channel.send('I can\'t find the Ocean Blue role.')
                  }
              }
            }

            if (message.content.startsWith(prefix + "noob")) {
            const Discord = require("discord.js");
            if (!message.guild || !message.member) return;
              if (!message.guild || message.guild.id !== '280285147805384704') return; {
                  let member = message.guild.member
                  var role = message.guild.roles.find('name', "Ocean Blue");
                  try {
                      message.member.removeRole(role)
                      message.reply("Done 👌")
                  } catch (err) {
                      message.channel.send('I can\'t find the Ocean Blue role.')
                  }
              }
              }

//owo

if (message.content.startsWith("<@325311955885883392>" + " " + "ping")) {
	message.channel.send("Pong!")
}

});

//Not for your damn eyes
client.login(config.token);
