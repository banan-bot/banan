# banan
banan is a Discord bot that lets you use **stable diffusion's image generation capabilities**, right inside of Discord.

## How does it work?
- Well, it's pretty simple. First, the bot checks the user's prompt to see if it's NSFW or not and then generates the image/prompt (depending on the command used).
- The code is pretty simple to understand... i think. So, you can easily create your own version of banan.

## Why did you make it?
- Well, I was feeling bored and wanted to make something when my friend **@justcubewithhat** on discord gave me the idea of creating a discord bot that can generate images inside discord.
- I thought the idea was cool and so, I decided to make the bot.

## Were there are problems you faced while making the bot?
- Yes, quite alot. I suck at programming so, I didn't really know what I was doing. You're going to see alot of nested if statements and random things inside the code which don't make sense but..
> `If it works then don't touch it.`

- This project was originally going to use Google's Gemini 2.5 Flash Image model aka Nano Banana but I was just not able to get it working :( 

> **Fun Fact:** The name **banan** comes from **nano banana**.

## How can I use this bot?
- It's very simple to run this bot and I don't really think I need to tell you guys but still. Here is a simple step-by-step explanation of how you can run the bot on your computer.

### Discord Setup  :
1. Go to [Discord Developer Portal](https://discord.com/developers/applications) and log in.

2. Click on New Application. Give it a name and and agree to the TOS.

3. Give the application a good name, avatar and description. **Copy the Application ID and paste it somewhere safe.**

4. Go to the bot section and give the bot a good name and avatar. Reset the bot's token and **copy the token and also paste it somewhere safe.**

5. Go to the OAuth2 section and select "bot" in the first table. Then in the second table, select these options -
`Send Messages, Embed Links, Attach Files, Read Message History`.

6. Now, **copy the invite url at the bottom of the page and paste it somehwere safe**.

### Bot Files Setup :
1. Install `Node.js` and `Git` on your computer.

2. Create a folder anywhere and open a terminal there by right clicking and selecting `Open in Terminal (on Windows 11)`.

3. Now, type `git clone https://github.com/banan-bot/banan.git` in the terminal and hit enter. Wait until all the files have been cloned successfully.

4. Now, type `npm install discord.js` and wait until it's installed.

5. Do the same for `@google/genai, axios, dotenv and form-data` by typing `npm install name-of-the-package`. You can close the terminal after installing everything.

6. After everything is installed, copy all the contents of `env.example` and create a .env file in the same place as the env.example file and paste all the copied content into the .env file you just created.

7. Open the .env file using a text editor and paste your bot token and application id into the space given there.

8. Go to [Google AI Studio](https://aistudio.google.com/) and log in with your google account. Now, go to the Dashboard section and click on API Keys. Click on Create API Key and give it a name. Click on `Select a cloud project` and Create a new project and give it name. After that, you should see an API Key. Click on the `Copy API Key` button. Now, open the .env file and paste the API Key into the space given there.

9. Go to [Stability AI](https://platform.stability.ai/) and log in. Click on your profile picture at the top right corner and select `API Keys` from the left menu. You should see an API Key already made. If you don't click on `Create API Key` and create one. Now, click on `Copy to clipboard` button. Open the .env file once again and paste the API Key into the space given there.

10. At last, use the invite url you copied earlier and invite the bot to a discord server. Now, open a terminal in the same place where the `index.js` file is located and type `node .` into the terminal. You will see that after a few seconds, the bot has switched on and you'll see a `ready` message in the terminal.

11. Congrats, the bot is successfully on now! You can use /imagen and /promptgen to create an image and prompt respectively.

## Did you have fun making this bot?
- Yeah. I had a lot of fun making this bot. As i said previously, I suck at programming. So, I learnt quite a alot of things while making this bot. I hope **YOU** have fun while using the bot.

## What do you plan for the future of the bot?
- I don't really have much planned for the V2 of the bot rn. But, I do have some things planned such as...
> Bot response in embeds (/imagen and /promptgen) and storing the generated images on a database online.
- So yeah, that's it from my side for now. Bye!

## Credits :
[![GitHub](https://img.shields.io/badge/domos000-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/domos000)
[![GitHub](https://img.shields.io/badge/JustCubeLol-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JustCubeLol)