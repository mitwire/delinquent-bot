const { REST, Routes } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const TOKEN = "MTA0MDc5OTA0ODMwMDUwNzIzOA.GZndv_.C9u50r5xVEauau8vfNWzR65OFSjsnklBgnl2FA";
const CLIENT_ID = "1040799048300507238"

client.user.setActivity('cats', { type: `WATCHING`}).catch(console.error);

const commands = [
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'info',
        description: 'Some info about the bot',
    },
];
//comment
const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
/*
 if (interaction.commandName === 'ping') {
      const pingvalue = client.ws.ping;
          const replyMsg = 'Pong! Hosted on Heroku' + '\n' + 'Latency: ' + pingvalue + 'ms' + ' 🏓';
              await interaction.reply(replyMsg);
 }
*/
  if (interaction.commandName === 'ping') {
    const pingvalue = client.ws.ping;
    const description = 'Bot Latency: ' + pingvalue + 'ms' 
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle('🏓 Pong!')
    .setDescription(description)
    
    //channel.send({ embeds: [exampleEmbed] });
    
    await interaction.reply({ embeds: [exampleEmbed] });
  }

});


client.login(TOKEN);
