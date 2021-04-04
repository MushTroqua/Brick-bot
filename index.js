const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Brick is listening in at http://localhost:${port}`));

//======================={DISCORD BOT}=======================//

const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection } = require('discord.js');

client.on('ready', async () => {
	console.log('Brick is a cunt.');
	console.log('Created by matsu#3622.')
	client.user.setActivity('with Brick\'s mom')
	console.log('Ready to fuck those motherfuckers up.');

	//Boot up sequence
});

const prefix = '&';
client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	const UserID = "397177896684224513";
	const Avatar = message.author.avatarURL();
	const prediction = Math.floor(Math.random() * 11);
	const user = getUserFromMention(args[0]);

	const help = new Discord.MessageEmbed()
		.setColor('#00000')
		.setTitle('Brick is a retard that needs help.')
		.setAuthor(message.author.username, Avatar)
		.addFields(
			{ name: '&brick', value: 'is a cunt.' },
			{ name: '$help', value: 'Brings up this embed.' },
			{ name: '$cunt', value: 'Shows the cunt.' },
			{ name: '&predict', value: 'Shows how much **you** are a cunt in a scale of 1 to 10. (WIP)' }
		)

	const cunt = new Discord.MessageEmbed()
		.setColor('#00000')
		.setTitle('Brick is a retard that needs help.')
		.setFooter(message.author.username, Avatar)
		.setImage('https://cdn.discordapp.com/avatars/397177896684224513/72d2fae9aa2bfa0d1733a808e5e0ca32.png')
		.setDescription('Showing you the massive cunt.')
		.setTimestamp();

	const pred = new Discord.MessageEmbed()
		.setColor('#000000')
		.setTitle('Here, you cunt.')
		.setImage(message.author.avatarURL())
		.setDescription(`On a scale of 1 to 10, you\'re a level ${prediction} cunt`)
		.setFooter(message.author.username, Avatar)
		.setTimestamp();

	function getUserFromMention(mention) {
        	if (!mention) return;

        	if (mention.startsWith('<@') && mention.endsWith('>')) {
        		mention = mention.slice(2, -1);

        		if (mention.startsWith('!')) {
        			mention = mention.slice(1);
        		}

        		return client.users.cache.get(mention);
        	}
        }
	if (command === 'brick') {
		if (message.author.id === UserID) {
			message.channel.send('Shut the fuck up Brick.');
		} else {
			message.channel.send('Brick is a cunt.');
			message.delete(message.author);
		}
	}
	if (command === 'help') {
		if (message.author.id === UserID) {
			message.channel.send('Shut the fuck up Brick.');
		} else {
			message.channel.send(help);
		}
	}
	if (command === 'cunt') {
		const user = getUserFromMention(args[0]);
		if (message.author.id === UserID) {
			message.channel.send('Shut the fuck up Brick.');
		} else {
			message.channel.send(cunt);
		}
	}
	if (command === 'predict') {
		if (message.author.id === UserID){
			message.reply("What the fuck Brick? You're definitely a level 10 cunt.")
		} else {

		if (args[0]) {
        		
        		if (!user) {
        			message.reply('``use the fucking proper mention if you want to use this command.``');
        		} 
		
		const userPred = new Discord.MessageEmbed()
		.setColor('#000000')
		.setTitle('Here, you cunt.')
		.setImage(user.displayAvatarURL())
		.setDescription(`On a scale of 1 to 10, ${user.username} is a level ${prediction} cunt`)
		.setFooter(message.author.username, Avatar)
		.setTimestamp();
		return message.channel.send(userPred)
	}

		return message.channel.send(pred)

	}
	}

});
client.login(process.env.BOT_TOKEN);
