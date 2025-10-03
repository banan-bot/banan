const { SlashCommandBuilder,EmbedBuilder, MessageFlags } = require('discord.js');

const helpEmbed = new EmbedBuilder()
	.setColor(0xffff00)
	.setTitle('How to use banan?')
	.setThumbnail("https://raw.githubusercontent.com/domos000/banan-bot/main/assets/logo.jpg")
	.setDescription("using banan is is **super easy**! here are all the commands you can use to interact with banan.")
	.addFields(
		{ name: '----------', value: ' ' },
		{ name: "`/about`", value:"when you use `/about` command, banan will reply with information about itself." },
		{ name: '----------', value: ' ' },
		{ name: "`/help`", value:"when you use `/help` command, banan will reply with this embed message." },
		{ name: '----------', value: ' ' },
		{ name: "`/imagen <prompt>`", value:"when you use `/imagen` command with a prompt, banan will generate an image based on your prompt and will reply with the generated image." },
		{ name: '----------', value: ' ' },
		{ name: "`/promptgen <prompt>`", value:"when you use `/promptgen` command with a prompt, banan will generate a better prompt based on your prompt and will reply with the generated prompt." },
		{ name: '----------', value: ' ' },
	)
	.setFooter({ text: 'i hope you have a fun time using this bot :D' });
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with how you can use the bot.'),
	async execute(interaction) {
		await interaction.reply(
			{ embeds: [helpEmbed], flags: MessageFlags.Ephemeral }
		);
	},
};