const { Client, GatewayIntentBits } = require('discord.js');
const moment = require('moment');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Calculer la date actuelle plus 14 jours

    
});

client.on('messageCreate', async (message) => {
    
    if (!message.author.bot && message.guild) {

        // création de fils carnet cadet
        if (message.content.toLowerCase().includes('cadet') && (message.channel.id === '1143222504731725864' || message.channel.id === '1178741812131811429')) {
            const threadName = `Cadet ${message.content.substring(message.content.indexOf('cadet ') + 10)}`;
            const thread = await message.startThread({
                name: threadName,
            });

            const futureDate = moment().add(14, 'days').format('MMMM Do YYYY');
            console.log(futureDate)

            // Ajouter le texte à envoyer dans le thread
            const messageText = `Passage de test sheriff disponible a partir du : ${futureDate}`;

        
            thread.send('https://media.discordapp.net/attachments/1155625398873358469/1178736428239310940/bcsa_2.png?ex=65773ad8&is=6564c5d8&hm=54dfa531fb5c1012d459595f3ac59e7f1fe34fb477f43d2e34b0c8124f9d54a8&=&format=webp&width=665&height=665')
            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            thread.send(':pushpin: Permis de conduire moto et voiture');
            thread.send(':pushpin: Visite médical d\'aptitude à la fonction de Sheriff / Test Psychologique');
            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            thread.send(':pushpin: Formation Procédure de base');
            thread.send(':pushpin: Formation Procédure GAV');
            thread.send(':pushpin: Formation Radio');
            thread.send(':pushpin: Formation Analyse Résiduelle de poudre');
            thread.send(':pushpin: Formation PPA FDO');
            thread.send(':pushpin: PPA A1');
            thread.send(':pushpin: Port de l\'UMP45');
            thread.send(':pushpin: GAV supervisées 1');
            thread.send(':pushpin: GAV supervisées 2 ');
            thread.send('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ');
            thread.send('__**Manuel du Cadet**__ :  https://docs.google.com/document/d/1hVX5FlWIl-J9mzb56fULxdHjKQTwpCsm9KIKjtTBmkU/edit');
            thread.send('__**Tablette BCSSI/SIPD ( demande d\'accès à faire ) :**__ https://sipd1.idmontchat.fr/index.php');
            thread.send('__**Site de la BCSSI :**__ https://sites.google.com/view/bcssi-sunny-island/home');
            thread.send('__**Lien pour le pointage ( à faire après chaque fin de service):**__ https://sites.google.com/view/bcssi-sunny-island/pointeuse');
            thread.send('__**Ten code:**__ https://media.discordapp.net/attachments/829330096837361699/1143224630795059351/U7F6axDZ2KEu2KzCpMdXswFde1LlYjWxqPtVCWJzBS4646kA4UMoBfnFcMKZ-2SCS2TI8Gg_veOrqL5khv5rE1fz-lAqlPcK2w3_xnF1M0KKGvG789h850ZIhE8Z1AR9zww1280.png');
            thread.send('__**Etapes d\' GAV:**__ https://media.discordapp.net/attachments/829330096837361699/1143224282986594304/0b60eae1-361a-45e8-942d-87866bada293.png');
            thread.send('__**Droits miranda:**__ https://media.discordapp.net/attachments/829330096837361699/1143224283284381776/2458e4bc-8e6e-4a35-9b29-efd19bc41592.png');
            thread.send('__**Catégories des armes:**__ https://media.discordapp.net/attachments/1140987249115279390/1141118052382023810/Categorie_des_armes.png');
            thread.send('__**Vous trouverez ici, le lien direct pour l\'accès aux rapports de jugement:**__ https://docs.google.com/spreadsheets/d/198_iE0Q9s6fvGgzRNjf0JgkYuU3X-2dk_zylwagqsVE/edit#gid=90283916')
            thread.send('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ');
            thread.send('__**Vous trouverez ici, plusieurs documents qui vous seront très utile pour votre cursus en tant que cadet:**__ https://discord.com/channels/892531493325377618/1077380832521629766')
            thread.send('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ');
            thread.send(messageText);
            thread.send('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ');

        }

        // création de fils test sheriff
        if (message.content.toLowerCase().includes('test ') && (message.channel.id === '1143222504731725864' || message.channel.id === '1178741812131811429')) {
            const threadName = `test ${message.content.substring(message.content.indexOf('test ') + 5)}`;
            const thread = await message.startThread({
                name: threadName,
            });
            thread.send('__**TEST SHERIFF**__\nMerci de mettre tous les rapports que vous devez envoyer dans ce canal en suivant ce patron suivant.\n\nNom de l\'endroit où vous devez l\'envoyer\nCe que vous voulez envoyer. et mettre un channel par message.')
        }

        // le reve de 10
        if (message.content.toLowerCase().includes(' quoi') && message.channel.id === '1182376915059884217') {
            message.reply('feur');
        // }
        // if (message.content.length > 70 && message.content.length < 100 && message.channel.id === '1182376915059884217') {
        //         message.reply("resume on a pas ton time");
        }
        if (message.content.length > 150  && message.channel.id === '1182376915059884217') {
                message.reply("tgl tu debite trop");
        }
    }
});


client.login('clée ici');
