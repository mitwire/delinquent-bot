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
    {
      name: 'vote',
      description: 'Vote for the bot on Top.gg'
    },
    {
      name: 'cat',
      description: 'See a cute cat'
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
    .setTimestamp()
    
    //channel.send({ embeds: [exampleEmbed] });
    
    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'info') {
    const description = 'Delinquent is made by mtwr#0006' + '\n' + 'Its a multipurpose bot with meme, entertaiment, and image bot commands' + '\n' + 'Find more about mtwr in his website' + "\n" + 'https://mitwire.com';
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Delinquent's Info")
    .setDescription(description)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'coinflip') {
    const options = ["It's Heads :coin:","It's Tails :coin:"];
    const result = options[Math.floor(Math.random() * options.length)]
                    
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'help') {
    const description = '***Information***' + '\n' + '</help:0>' + '\n' + '</info:0>' + '\n' + '</ping:0>' + '\n' + '\n' + '***Fun***' + '\n' + '</coinflip:0>' + '\n' + '</8ball:0>' + '\n' + '\n' + '***Miscellaneous***' + '\n' + '</vote:0>'
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's The List")
    .setDescription(description)
    .setTimestamp()
    
    await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === '8ball') {
    const options = ["I honestly dont know","Probably","Probably not","Most likely","Theres no shot","Possibly","Yeah","Nope","Not at all","Definetly"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
    
  }

  if (interaction.commandName === 'vote') {
    const description = 'Delinquent is currently in the process of being added to Top.gg. It will be up there in about 1-2 weeks. Thank you for trying to support us on Top.gg lol.'
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Vote here on Top.gg!")
    .setDescription(description)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
  }

  

  if (interaction.commandName === 'cat') {
    const options = ["https://i.imgur.com/6Lt8z3K.png",
                    "https://i.imgur.com/9IutgB6.png",
                    "https://i.imgur.com/mHpt7Di.png",
                    "https://i.imgur.com/KQyafHb.jpg",
                    "https://i.imgur.com/lLVcHpE.png",
                    "https://i.imgur.com/ifTw4i0.png",
                    "https://i.imgur.com/g5f3a0u.png",
                    "https://i.imgur.com/l5MEjyH.png",
                    "tenor.com/VdIKn05yIh8AAAPo/cat-sleep.mp4https://tenor.com/view/cat-sleep-gif-23970142",
                    "https://tenor.com/view/cat-cute-burger-burger-cat-cat-burger-gif-25078813",
                    "https://i.imgur.com/ofoXS6Z.png",
                    "https://i.imgur.com/gwsyypL.png",
                    "https://i.imgur.com/uvJxM4p.png",
                    "https://i.imgur.com/1wcERx9.png",
                    "https://i.imgur.com/VpmH8cF.png",
                    "https://tenor.com/view/thinking-cat-gif-23030201"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's your cat")
    .setImage(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
    
  }



  // }
  // // if (interaction.commandName === 'blep') {
    
  // //   //console.log(interaction.options.data[0].value);
  // //   await interaction.reply(interaction.options.data[0].value);
  // // }


});




client.login(TOKEN);
