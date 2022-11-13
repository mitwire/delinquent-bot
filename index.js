const { REST, Routes } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const TOKEN = "MTA0MDc5OTA0ODMwMDUwNzIzOA.GZndv_.C9u50r5xVEauau8vfNWzR65OFSjsnklBgnl2FA";
const CLIENT_ID = "1040799048300507238"



const commands = [
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'info',
        description: 'Some info about the bot',
    },
    {
       name: 'coinflip',
      description: 'Flip a coin'
    },
    {
       name: 'help',
      description: 'Get the list of commands'
    },
    {
      name: '8ball',
      description: 'Ask the 8ball a question',
      "options": [
        {
            "name": "question",
            "description": "Write your question here",
            "type": 3,
            "required": true,
            
        }     
      
    ]
    },
    {
      name: 'avatar',
      description: 'Get the avatar of someone',
      "options": [
      {
        "name": "user",
        "description": "Pick the user",
        "type": 3,
        "required": true,

      }
    ]
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
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({ activities: [{ name: '/help | trolling' }]});

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

  if (interaction.commandName === 'info') {
    const description = 'Delinquent is made by mtwr#0006' + '\n' + 'Its a multipurpose bot with meme, entertaiment, and image bot commands' + '\n' + 'Find more about mtwr in his website' + "\n" + 'https://mitwire.com';
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Delinquent's Info")
    .setDescription(description)

    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'coinflip') {
    const options = ["It's Heads :coin:","It's Tails :coin:"];
    const result = options[Math.floor(Math.random() * options.length)]
                    
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)

    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'help') {
    const description = '***Information***' + '\n' + '</help:0>' + '\n' + '</info:0>' + '\n' + '</ping:0>' + '\n' + '\n' + '***Fun***' + '\n' + '</coinflip:0>' + '\n' + '</8ball:0>'
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's The List")
    .setDescription(description)
    
    await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === '8ball') {
    const options = ["I honestly dont know","Probably","Probably not","Most likely","Theres no shot","Possibly","Yeah","Nope","Not at all","Definetly"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)

    await interaction.reply({ embeds: [exampleEmbed] })
    
  }

  {
    if (interaction.commandName === 'avatar') {
      const members=[];
      const guild = client.guilds.cache.get('993824755889225768');

      guild.members.fetch().then(members =>
        {
          console.log(members);
          members = members;
            // Loop through every members
          // members.forEach(member =>
          //   {
          //     // Do whatever you want with the current member
          //   });
        });
      // const canvas = Canvas.createCanvas(700, 250);
		  // const context = canvas.getContext('2d');
      
      // const exampleEmbed = new EmbedBuilder()
      // .setColor(0xf1e65d)

      await interaction.reply(members);
    }





  }
  // if (interaction.commandName === 'blep') {
    
  //   //console.log(interaction.options.data[0].value);
  //   await interaction.reply(interaction.options.data[0].value);
  // }


});




client.login(TOKEN);
