const config = require('../config.json');
module.exports = message => {

  let client = message.client;
  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content.split(' ')
  const command = args.shift().slice(config.prefix.length);

  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args);
  } catch (err) {
    console.log(`Command ${command} failed\n${err.stack}`);
  }
};
