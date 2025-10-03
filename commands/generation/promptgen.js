const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('promptgen')
		.setDescription('Generates a prompt based on the description that you give to create the perfect image you want.'),
	async execute(interaction) {
		await interaction.reply('this is promptgen command');
	},
};