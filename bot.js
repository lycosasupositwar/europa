const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
	
    if (message.content === '!rolejoueur') {// si le bot lit la commande
	

if(message.member.roles.some(r=>["JOUEUR"].includes(r.name)) ) {
	
  message.channel.send('Bonjour ' + message.author + 'tu as déjà le rôle joueur pas besoin de le refaire');
  
} else {

let role = message.guild.roles.find("name", "JOUEUR");
let member = message.mentions.members.first();
member.addRole(role).catch(console.error);


message.channel.send('Bienvenu chez nous ' + message.author + ', tu peux maintenant profiter à fond du Discord');
  
}
	

  	}
	
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
