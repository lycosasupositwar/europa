const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
var stmessage = message.content.substr(0, 11);
    if (stmessage === '!rolejoueur') {// si le bot lit la commande
	

let roleplayer = message.guild.roles.find("name","Rookie");
if(message.member.roles.has(roleplayer.id)) {
	

  var tableau=message.content.split(" ");
  console.log(tableau[1]);
  message.channel.send('Bonjour ' + message.author + 'tu as déjà le rôle joueur pas besoin de le refaire');
  

} else {

let role = message.guild.roles.find("name", "Rookie");
let member = message.guild.members.get(message.author.id);
member.addRole(role).catch(console.error);


message.channel.send('Bienvenu chez nous ' + message.author + ', tu peux maintenant profiter à fond du Discord');

}
	

  	}
	
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
