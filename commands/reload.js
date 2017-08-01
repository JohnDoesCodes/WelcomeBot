let main = require('../X7.js');
exports.run = (client, message, args) => {
  let cmd = args.join(' ');
  main.reload(message, cmd);
};
