const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('imagen')
		.setDescription('Generates an image based on the prompt that you give.'),
	async execute(interaction) {
		await interaction.reply('this is imagen command');
	},
};