exports.run = function(bot, msg) {
  msg.delete().then(() => {
    if (msg.author.id === '186989309369384960') {
      console.log('[!] Restarting Bot...');
      process.exitCode = 1;
      process.exit();
    }

    if (msg.author.id !== '186989309369384960') {
      msg.channel.send(':x: That command is staff only!');
    }
  });
};

exports.info = {
  name: 'restart',
  usage: 'restart',
  description: 'Restarts the bot'
};