const Eris = require("eris");
const keep_alive = require('./keep_alive.js')
        client.user.setActivity(statuses[i], {
            type: 'STREAMING',
            url: 'https://www.twitch.tv/youzarx'
        });
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); 
});

bot.connect();
