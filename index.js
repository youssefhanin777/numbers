const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

//-------------------------------------------------
    const statuses = [
        '🇵🇸 | Palestine.js'
    ];
    let i = 0;
    setInterval(() => {
        client.user.setActivity(statuses[i], {
            type: 'STREAMING',
            url: 'https://www.twitch.tv/youzarx'
        });
        i = ++i % statuses.length;
    }, 1e4);
//-------------------------------------------------


const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); 
});

bot.connect();
