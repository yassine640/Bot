const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!game') {
      msg.reply('the best of yassine: Brawlhalla');
    }
  });

client.on('message', message => {
    
    if (message.content === '!avartar') {
      
      message.reply(message.author.avatarURL);
    }
  });
  
  
  
client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.find('name', 'member-log');
   
    if (!channel) return;
   
    channel.send(`Welcome to the server, ${member}`);
  });
  
  
  client.login('NDYyNTY1OTM2NjMzODcyMzk0.DhjtpQ.mKPco_HizLH929IeM-DNFs7BpgY');