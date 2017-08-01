const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
require('./util/eventLoader')(client);

//Member Joining
// client.on("guildMemberAdd", member =>{
//      var embed = new Discord.RichEmbed();
//     var moment = require('moment')
//     embed.setAuthor(`${member.user.tag}`, `https://cdn.discordapp.com/attachments/248014822082347008/325320653156777986/w_logo.png`)
//     .setFooter(`User Joined`)
//     .setColor("#1973E6")
//     .setTimestamp()
//     .setDescription(`${member.user}` + " " + "welcome to Aeris Discord Server! Please make sure you check out our rules!")
//     client.guilds.get("280285147805384704").channels.get("280285147805384704").sendEmbed(
//         embed, {
//                 disableEveryone: true
//             }
//     );
// });


process.on('uncaughtException', function(err) {
  console.log('DUD I CAUGHT EXCEPTION?!??!: ' + err); //STOPS THE BOT FROM CRASHING
});

function AaN(args, i) {
  if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
  return false;
}

const log = message => {
  console.log("I\'m ready asf!");
};

var reload = (message, cmd) => {
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.send(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.send(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};
exports.reload = reload;

client.login(config.token);
