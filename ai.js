const ds = require('discord.js');
const bot = new ds.Client();
bot.on('ready', () =>{
	console.log(`${bot.user.tag} ready.`)
});
bot.on('message', msg => {
	if(msg.content.includes('http://discord.gg/') || msg.content.includes('https://discord.gg/')) return msg.delete()
});
bot.login('token');