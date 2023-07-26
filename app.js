const { Client, Intents } = require("discord.js");

// Create a new Discord client
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, // Required for basic bot functionality
    Intents.FLAGS.GUILD_MESSAGES, // Required to receive message events
    // Add any other intents you need for your bot here
  ],
});

// Your Discord bot token (keep this private)
const token = process.env.TOKEN;

// Event that indicates the bot is ready and connected to Discord
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event that triggers whenever a new message is received in any channel the bot can see
client.on("messageCreate", (message) => {
  // Ignore messages from other bots to avoid infinite loops
  if (message.author.bot) return;

  // Check if the message starts with the bot's mention or a specified prefix
  const prefix = "!"; // Change this to your desired prefix
  if (!message.content.startsWith(prefix)) return;

  // Split the message content to get the command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Handle different commands here
  if (command === "ping") {
    message.reply("Pong!");
  } else if (command === "hello") {
    message.channel.send("Hello, world!");
  }
  // Add more commands as needed

  // Add error handling for commands if desired
});

// Log in to Discord with the bot token
client.login(token).catch(console.error);
