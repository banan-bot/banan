const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require('discord.js');

const aboutEmbed = new EmbedBuilder()
	.setColor(0xffff00)
	.setTitle("About This Bot.")
	.setURL("https://github.com/domos000/banan-bot")
	.setThumbnail("https://raw.githubusercontent.com/domos000/banan-bot/main/assets/logo.jpg")
	.setDescription("banan is a Discord bot that lets you use Google's **nano banana** image generation capabilities, right inside of Discord. it's powered with Google's Gemini 2.5 Flash Image aka __'nano banana'__ model.")
	.addFields(
		{ name: '----------', value: ' ' },
		{ name: "Why should I use banan?", value: "banan uses Google's latest image generation model under the hood which can generate astonishing results. it can generate images with whatever* prompt you give it **right inside of discord**." },
		{ name: "----------", value:" "},
		{ name: "Why did you make this bot?", value: "honestly, i was feeling bored and wanted to make soemthing when my friend **@justcubewithhat** gave me the idea of creating a discord bot that can generate images right inside of discord. so, i went straight to making this bot." },
		{ name: "----------", value:" "},
		{ name: "What if someone tries to generate NSFW images?", value:"I know people will try to do something like this so, banan is equipped with Gemini 2.5 Flash which checks the prompt of the user and if it detects any NSFW content, it will refuse to generate the image and will send a warning message to the user." },
		{ name: "----------", value:" "},
	)
	.setFooter({ text: 'Created by @adeebur and @justcubewithhat' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Replies with information about the bot.'),
	async execute(interaction) {
		await interaction.reply(
			{ embeds: [aboutEmbed], flags: MessageFlags.Ephemeral }
		);
	},
};