const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
	
    if (message.content === '!rolejoueur') {// si le bot lit la commande
	

let roleplayer = message.guild.roles.find("name","JOUEUR");
if(message.member.roles.has(roleplayer.id)) {

  message.channel.send('Bonjour ' + message.author + 'tu as déjà le rôle joueur pas besoin de le refaire');

} else {

let role = message.guild.roles.find("name", "JOUEUR");
let member = message.guild.members.get(message.author.id);
member.addRole(role).catch(console.error);


message.channel.send('Bienvenu chez nous ' + message.author + ', tu peux maintenant profiter à fond du Discord');

}
	

  	}
	
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
