require('dotenv').load();
const { REST, Routes, Embed, userMention } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');


const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;



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
    // {
    //   name: 'avatar',
    //   description: 'Get the avatar of someone',
    //   "options": [
    //   {
    //     "name": "user",
    //     "description": "Pick the user",
    //     "type": 3,
    //     "required": true,

    //   }
    // ]
    // },
    {
      name: 'vote',
      description: 'Vote for the bot on Top.gg'
    },
    {
      name: 'cat',
      description: 'See a cute Cat'
    },
    {
      name: 'dog',
      description: 'See a cute Dog'
    },
    {
      name: 'capybara',
      description: 'See a cute Capybara'
    },
    {
      name: 'wyr',
      description: 'Sends a would-you-rather question'
    },
    {
      name: 'joke',
      description: 'Sends a semi-funny joke'
    },
    {
      name: 'darkjoke',
      description: 'Sends a darkjoke'
    },
    {
      name: 'invite',
      description: 'Invite Delinquent to your server!'
    },
    {
      name: 'meme',
      description: 'Get a funny meme'
    },

     {
       name: 'changelog',
      description: 'Get a log of all recent changes made on Delinquent'
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

  client.user.setPresence({ activities: [{ name: '/help | mentally insane' }]});

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
    const description = 'Bot Latency:' + pingvalue + 'ms' + "\n" + "Hosted Locally"
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle('🏓 Pong!')
    .setDescription(description)
    .setTimestamp()
    
    //channel.send({ embeds: [exampleEmbed] });
    
    await interaction.reply({ embeds: [exampleEmbed] });
  }

  if (interaction.commandName === 'info') {
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel('Invite Me!')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1040799048300507238&permissions=414467870272&scope=bot%20applications.commands'),
        new ButtonBuilder()
        .setLabel('Support Server')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/ht6HyC3jW3')
    ); 
    const description = 'Delinquent is made by mtwr#0006' + '\n' + 'Its a multipurpose bot with meme, entertaiment, and image commands' + '\n' + 'Find more about mtwr in his website' + "\n" + 'https://mitwire.com';
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Delinquent's Info")
    .setDescription(description)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed], components: [row] });
  }

  if (interaction.commandName === 'coinflip') {
    const options = ["It's Heads :coin:","It's Tails :coin:"];
    const result = options[Math.floor(Math.random() * options.length)]
                    
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })


  }

  if (interaction.commandName === 'help') {
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel('Invite Me!')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.com/api/oauth2/authorize?client_id=1040799048300507238&permissions=414467870272&scope=bot%20applications.commands'),
        new ButtonBuilder()
        .setLabel('Support Server')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/ht6HyC3jW3')
    ); 
    const description = '***Utility***' + '\n' + '</info:0> - Info about Delinquent' + '\n' + '</invite:0> - Invite Delinquent to another server' + '\n' + '</ping:0> - Check the ping of the bot' + '\n' + '\n' + '***Fun***' + '\n' + '</coinflip:0> - Flip a coin' + '\n' + '</8ball:0> - Ask the 8ball a question' + '\n' + '</joke:0> - Get a semi-funny joke' + '\n' + '</darkjoke:0> - Get a dark joke' + '\n' + '</wyr:0> - Get a would-you-rather question' + '\n' + '\n' + '***Images***' + '\n' + '</cat:0> - Find a cute cat' + '\n' + '</dog:0> - Find a cute dog' + '\n' + '</capybara:0> - Find a cute capybara' + '\n' + '</meme:0> - Get a funny meme' + '\n' + '\n' + '***Miscellaneous***' + '\n' + '</vote:0> - Vote for the bot on Top.gg' + '\n' + '</changelog:0> - Get a log of all a recent changes made to Delinquent'
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's The List Of The Commands")
    .setDescription(description)
    .setTimestamp()
    
    await interaction.reply({ embeds: [exampleEmbed], ephemeral: true, components: [row] })
  }

  if (interaction.commandName === '8ball') {
    const options = ["I honestly dont know","Probably","100% percent yes","Probably not","Most likely","Theres no shot","Possibly","Yeah","Nope","Not at all","Definetly","I dont get it","I dont think so","Yeah, I dont think so","Yessir"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
    
  }

  if (interaction.commandName === 'vote') {
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel('Vote')
        .setStyle(ButtonStyle.Link)
        .setURL('https://top.gg/bot/1040799048300507238/vote'),
    ); 
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Vote here on Top.gg")
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed], components: [row] })
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
                    "https://i.imgur.com/ofoXS6Z.png",
                    "https://i.imgur.com/gwsyypL.png",
                    "https://i.imgur.com/uvJxM4p.png",
                    "https://i.imgur.com/1wcERx9.png",
                    "https://i.imgur.com/VpmH8cF.png",
                    "https://i.imgur.com/1fcMybv.jpg",
                    "https://i.imgur.com/RmlX44h.jpg",
                    "https://i.imgur.com/fSfPHZP.jpg",
                    "https://i.imgur.com/RCUxs46.png",
                    "https://i.imgur.com/KxfsB5J.png",
                    "https://i.imgur.com/fK0QVQG.png",
                    "https://i.imgur.com/rHwrM35.png",
                    "https://i.imgur.com/YjxyRHz.jpg",
                    "https://i.imgur.com/YjxyRHz.jpg",
                    "https://i.imgur.com/lzRevQZ.jpg",
                    "https://i.imgur.com/lY3bDu2.jpg",
                    "https://i.imgur.com/81trB44.jpg"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's your cat")
    .setImage(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
    
  }

  if (interaction.commandName === 'dog') {
    const options = ["https://i.imgur.com/yBXiX1c.png",
                     "https://i.imgur.com/fv2sPEj.jpg",
                     "https://i.imgur.com/F7jl9NI.jpg",
                     "https://i.imgur.com/tso4Mfi.jpg",
                     "https://i.imgur.com/KMoeSKF.png",
                     "https://i.imgur.com/q166x1r.jpg",
                     "https://i.imgur.com/eWtkZr1.jpg",
                     "https://i.imgur.com/tqXJgL9.jpg",
                     "https://i.imgur.com/Eei0oqN.jpg",
                     "https://i.imgur.com/TDFCNjv.jpg",
                     "https://i.imgur.com/NIGM2tT.jpg",
                     "https://i.imgur.com/PABFvIM.jpg",
                     "https://i.imgur.com/T0uO2xO.jpg",
                     "https://i.imgur.com/JXTSmOU.jpg",
                     "https://i.imgur.com/BW3IzLU.jpg",
                     "https://i.imgur.com/7b42DYw.jpg",
                     "https://i.imgur.com/t41Qaya.jpg",
                     "https://i.imgur.com/7fHuShO.jpg",
                     "https://i.imgur.com/OOqlUF7.jpg",
                     "https://i.imgur.com/E9T95R0.jpg",
                     "https://i.imgur.com/QqX5fkq.png",
                     "https://i.imgur.com/EXL9Nyy.jpg",
                     "https://i.imgur.com/bqCoOaB.jpg",
                     "https://i.imgur.com/XHSvKKY.jpg",
                     "https://i.imgur.com/0Skf95V.jpg"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's your dog")
    .setImage(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === 'capybara') {
    const options = ["https://i.imgur.com/AQVM7Ie.jpg",
                     "https://i.imgur.com/CYJS3mu.jpg",
                     "https://i.imgur.com/zF0cHOC.jpg",
                     "https://i.imgur.com/aLYBunk.jpg",
                     "https://i.imgur.com/9Q1tZQE.jpg",
                     "https://i.imgur.com/MI3nXy4.jpg",
                     "https://i.imgur.com/x4ALoqw.jpg",
                     "https://i.imgur.com/fDu2ISg.jpg",
                     "https://i.imgur.com/SBoLuWv.jpg",
                     "https://i.imgur.com/yBqjNcv.jpg",
                     "https://i.imgur.com/2kGH3Et.jpg",
                     "https://i.imgur.com/W7jPYNn.jpg",
                     "https://i.imgur.com/qRnxgaP.jpg",
                     "https://i.imgur.com/avk9g7l.jpg",
                     "https://i.imgur.com/9K72KKT.jpg",
                     "https://i.imgur.com/4gP7YWt.jpg",
                     "https://i.imgur.com/hveIqo7.jpg",
                     "https://i.imgur.com/qdIrV0R.jpg",
                     "https://i.imgur.com/RNd5iH3.jpg",
                     "https://i.imgur.com/3H6pEYc.jpg",
                     "https://i.imgur.com/He2M80L.jpg",
                     "https://i.imgur.com/LJfRG5y.jpg",
                     "https://i.imgur.com/eFWc9Ft.jpg",
                     "https://i.imgur.com/GmTBSi8.jpg",
                     "https://i.imgur.com/v7MbrlQ.jpg"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle("Here's your capybara")
    .setImage(result)
    .setTimestamp()

      await interaction.reply({ embeds: [exampleEmbed] })

  }

  if (interaction.commandName === 'wyr') {
    const options = ["Would you rather be a genius and know everything or be amazing at any activity you tried?","Would you rather dine alone or watch a good movie by yourself?","Would you rather end world hunger or stop crime all over the United States?","Would you rather wear pants 3 sizes too big or shoes 3 sizes too small?","Would you rather go into the past and meet your ancestors or go into the future and meet your great-great-grandchildren?","Would you rather lose your ability to speak or the ability to hear for your entire life?","Would you rather experience the world beginning or ending?","Would you rather have more money or more time?","Would you rather only be able to whisper or only be able to shout?","Would you rather work more hours a day, but have longer weekends or work fewer hours a day with more workdays?","Would rather have 100 duck-sized elephants or 1 elephant-sized duck?","Would you rather wear a clown wig or clown shoes every day?","Would you rather be insulted by Gordon Ramsay for 10 seconds or receive unlimited text messages from Donald Trump for 10 days?","Would you rather always have a mullet haircut or a ponytail haircut?","Would you rather be without elbows or knees?","Would you rather your only mode of transportation be a donkey or a giraffe?","Would you rather be a clown who distracts the bull or the cowboy who rides the bull?","Would you rather lose the ability to lie or believe everything youre told?","Would you rather lose all of the money you've earned this year or lose all of the memories you've gained this year?","Always hit a red light for the rest of your life or always get slow internet after the sun goes down?","Would you rather know how you will die or when you will die?","Would you rather ace a job interview at your dream job or go on a date with the hottest person you know","Would you rather know the worlds secrets or live ignorantly forever?","Would you rather speak to animals or know other peoples thoughts?","Would you rather live in a real haunted house or in the middle of a dessert?","Would you rather be the person who flips the switch during executions or be the judge who decides who should be executed?","Would you rather always have the urge to pee or have to always wear a diaper?","Would you rather have a rewind button or a pause button on your life?","Would you rather have an extra toe or extra finger?","Would you rather have good grades or be good at sports?"];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setFooter({ text: 'Sourced by quizbreaker.com'})
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === 'joke') {
    const options = ["What did the snail who was riding on the turtle's back say? Wheeeee!","I was going to tell a time traveling joke, but you guys didn't like it.","What do you call a lazy kangaroo? A pouch potato.","I used to run a dating service for chickens, but I was struggling to make hens meet.",'Why do we tell actors to "break a leg?" Because every play has a cast.',"What does a pig put on dry skin? Oinkment.","What do you call it when a snowman throws a tantrum? A meltdown.","My uncle named his dogs Timex and Rolex. They're his watch dogs.","Did you hear about the guy whose left side was cut off? He's all right now.","How do you open a banana? With a mon-key.","Which is faster, hot or cold? Hot, because you can catch a cold.","What did one plate say to the other plate? Dinner's on me.","Why do oranges wear sunscreen? So they don't peel.","My wife told me to stop acting like a flamingo, so I had to put my foot down.","What do you call a pig that does karate? A pork chop.","Where does Batman go to the bathroom? The batroom.","What do you call a pony with a sore throat? A little horse.","What did the mama tomato say to the baby tomato? Catch up!","Why didn't the melons get married? Because they cantaloupe.","What do you call a fake noodle? An impasta. ඞ","How did the pig get to the hogspital? In a hambulance.","I'm so good at sleeping I can do it with my eyes closed!","Why does Humpty Dumpty love autumn? Because he had a great fall","What happens when a strawberry gets run over crossing the street? Traffic jam.","Why did the cow jump over the moon? The farmer had cold hands.",'A termite walks into a bar and says, "So, is the bar tender here?"'];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setFooter({ text: 'Sourced by countryliving.com' })
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === 'darkjoke') {
    const options = ["Never break someones heart, they only have one. Break their bones instead, they have 206 of them.","What does my dad have in common with Nemo? they cant be found","I have a fish that can breakdance! Only for 20 seconds, though, and only once.","When does a joke become a dad joke? When it leaves and never comes back.","My girlfriend, whos into astronomy, asked me how stars die. “Usually an overdose,” I told her.","I want to die peacefully in my sleep, just like my grandfather, Not screaming like the passengers in his car.","Why do orphans like playing tennis? Because its the only love they get.","Why do women always look skinny after a miscarriage? They dont lose their figure when they dont go full term.","I started crying when dad was cutting onions. Onions was such a good dog.","My parents raised me as an only child, which really pissed off my brother.","If at first, you dont succeed… then skydiving definitely isnt for you.","Ill never forget my Granddads last words to me just before he died. “Are you still holding the ladder?”","The doctor gave me one year to live, so I shot him. The judge gave me 15 years. Problem solved.","Where do you find a dog with no legs? Exactly where you left it.","Theres a lot of talk about starting families, but no one ever talks about finishing what they started."];
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder ()
    .setColor(0xf1e65d)
    .setTitle(result)
    .setFooter({ text: 'Sourced by thecoolist.com' })
    .setTimestamp()

      await interaction.reply({ embeds: [exampleEmbed] })
  }

  if (interaction.commandName === 'invite') {
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Invite Me!')
					.setStyle(ButtonStyle.Link)
          .setURL('https://discord.com/api/oauth2/authorize?client_id=1040799048300507238&permissions=414467870272&scope=bot%20applications.commands'),
			); 
    const exampleEmbed = new EmbedBuilder ()
    .setColor(0xf1e65d)
    .setTitle('Invite Delinquent')

      await interaction.reply({ embeds: [exampleEmbed], components: [row] })
  }


  if (interaction.commandName === 'meme') {
    const options = ["https://i.imgur.com/9o2tMq1.jpg",
                     "https://i.imgur.com/mf6Qrzf.jpg",
                     "https://i.imgur.com/zk8MMPT.jpg",
                     "https://i.imgur.com/FMAFbIN.jpg",
                     "https://i.imgur.com/HaHDP5h.jpg",
                     "https://i.imgur.com/9Ihzh4G.jpg",
                     "https://i.imgur.com/xzJdjqk.jpg",
                     "https://i.imgur.com/ZUMCZiM.jpg",
                     "https://i.imgur.com/lTcYRQW.jpg",
                     "https://i.imgur.com/s5K7sbr.png",
                     "https://i.imgur.com/Jx7PKTk.jpg",
                     "https://i.imgur.com/TVJNCDc.jpg",
                     "https://i.imgur.com/lWiF4wa.jpg",
                     "https://i.imgur.com/MHBoqCO.jpg",
                     "https://i.imgur.com/4TRBgZu.jpg",
                     "https://i.imgur.com/pfuxhmZ.png",
                     "https://i.imgur.com/U3MVLNd.jpg",
                     "https://i.imgur.com/Im0FrRE.jpg",
                     "https://i.imgur.com/09CEOMy.jpg",
                     "https://i.imgur.com/C1xhSPI.jpg"]
    const result = options[Math.floor(Math.random() * options.length)]
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xf1e65d)
    .setImage(result)
    .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] })
  }

   if (interaction.commandName === 'changelog') {
     const description = "Stable version has been released (1.2)" + '\n' + "• Added a meme command" + '\n' + "• Added buttons to multiple commands" + '\n' + "• Delinquent also got added to Top.gg"
     const exampleEmbed = new EmbedBuilder()
     .setColor(0xf1e65d)
     .setTitle("Changelog")
     .setDescription(description)

     await interaction.reply({ embeds: [exampleEmbed] })
    
  }





  // }
  // // if (interaction.commandName === 'blep') {
    
  // //   //console.log(interaction.options.data[0].value);
  // //   await interaction.reply(interaction.options.data[0].value);
  // // }


});




client.login(TOKEN);
