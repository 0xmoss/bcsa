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

        

            thread.send('__**Manuel du Cadet**__ :  https://docs.google.com/document/d/1hVX5FlWIl-J9mzb56fULxdHjKQTwpCsm9KIKjtTBmkU/edit');
            thread.send('__**Tablette BCSSI/SIPD ( demande d\'accès à faire ) :**__ https://sipd1.idmontchat.fr/index.php');
            thread.send('__**Site de la BCSSI :**__ https://bcssi.gitbook.io/bcssi/');
            thread.send('\n**__Lien pour le pointage ( à faire après chaque fin de service)__**\nhttps://bcssi.gitbook.io/bcssi/ressources-humaines/pointeuse')
            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

            thread.send('__**Ten code:**__ https://media.discordapp.net/attachments/1197666491009613824/1197672198849175562/Code_10.png?ex=65bc1e27&is=65a9a927&hm=9edb25a6f83527f03a1f90db06021e2328094f1fdbc959d98247a5f619b758ef&=&format=webp&quality=lossless&width=409&height=665');
            thread.send('__**Etapes d\'une GAV**__ : https://cdn.discordapp.com/attachments/1193071720354025604/1193071976810545162/unknown.png?ex=65c7115d&is=65b49c5d&hm=b85e126b34e7cba768186db25ea1a8697fbdccc08a1c3e9892d0b8513383332e&');
            thread.send('__**Droits miranda**__ : https://media.discordapp.net/attachments/829330096837361699/1143224283284381776/2458e4bc-8e6e-4a35-9b29-efd19bc41592.png?ex=65ca4b15&is=65b7d615&hm=45bf78b6b6bc46782eb4a76902a0f610a5ff9c0c6d9100f85928257bc40fe576&');
            thread.send('__**Catégories des armes**__ : https://media.discordapp.net/attachments/1140987249115279390/1141118052382023810/Categorie_des_armes.png?ex=65cbdc00&is=65b96700&hm=3f614e4c8d1adf71761751339f6bb88630bbc3f89141974d3a405287e71753b6&');
            thread.send('__**Fond d\'écran droits miranda**__ : https://discord.com/channels/1127913661231534080/1132397426372784258/1143576148169736302');

            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            thread.send(':pushpin: Disponibilités du cadet sur deux semaines à écrire au début du carnet');
            thread.send(':pushpin: Permis de conduire moto et voiture');
            thread.send(':pushpin: Visite médical d\'aptitude à la fonction de Sheriff / Test Psychologique');
            thread.send(':pushpin: Connaissance de la formation Sandwich')

            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            thread.send('\n**__Premiers pas__**\n')

            thread.send(':pushpin: Présentation des BDS')
            thread.send(':pushpin: Présentation des missions concitoyennes')
            thread.send(':pushpin: Présentation de l\'intranet')
            thread.send(':pushpin: Patrouille découverte')


            thread.send('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            thread.send('\n**__Académie__**\n')
            
            thread.send(':pushpin: Formation Procédure de base');
            thread.send(':pushpin: Formation Procédure GAV');
            thread.send(':pushpin: Formation Radio');
            thread.send(':pushpin: Formation Analyse Résiduelle de poudre');
            thread.send(':pushpin: Formation PPA FDO');
            thread.send(':pushpin: Formation PPA A1')
            thread.send(':pushpin: Port de l\'UMP45');
            thread.send(':pushpin: GAV supervisées 1');
            thread.send(':pushpin: GAV supervisées 2\n');
            thread.send(':pushpin: GAV autonome');

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
    }
});


client.login('clée ici');
