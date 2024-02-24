const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false}); 

client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);
})


    const statuses = [
        ' 🇵🇸 | Palestine.js'
    ];
    let i = 0;
    setInterval(() => {
        client.user.setActivity(statuses[i], {
            type: 'STREAMING',
            url: 'https://www.twitch.tv/youzarx'
        });
        i = ++i % statuses.length;
    }, 1e4);


client.login(process.env.token);
