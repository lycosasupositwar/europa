const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!rolejoueur') {
		
let role = message.guild.roles.find("name", "JOUEUR");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role).catch(console.error''console.log('role ajoutee!'););

// Remove a role!
member.removeRole(role).catch(console.error);
  	}
	
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
