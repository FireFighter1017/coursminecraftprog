var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// fonction de calculatrice
function calcu(param1, operateur, param2){
    
    var resultat // contiendra le résultat du calcul

    switch(operateur) {
        case "+":
            resultat = Number(param1) + Number(param2);
            if(resultat==0){
                resultat = String(resultat);
            };
            break;
        case "-":
            resultat = String(Number(param1) - Number(param2));
            if(resultat==0){
                resultat = String(resultat);
            };
            break;
        case "*":
            resultat = Number(param1) * Number(param2);
            if(resultat==0){
                resultat = String(resultat);
            };
            break;
        case "/":
            resultat = String(Number(param1) / Number(param2));
            if(resultat==0){
                resultat = String(resultat);
            };
            break;
    }
    
    // retourner le résultat du calcul
    return resultat;
}

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

// Discord bot message processing
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'goglu':
                bot.sendMessage({
                    to: channelID,
                    message: "Ça sent la nature!!"
                });
                break;
            case 'eti':
                bot.sendMessage({
                    to: channelID,
                    message: "eti: " + calcu(args[0], args[1], args[2])
                });
                break;
            case 'alex':
                bot.sendMessage({
                    to: channelID,
                    message: "alex: " + calcu(args[0], args[1], args[2])
                });
                break;
            case 'oli':
                bot.sendMessage({
                    to: channelID,
                    message: "oli: " + calcu(args[0], args[1], args[2])
                });
                break;
            case 'ff':
                bot.sendMessage({
                    to: channelID,
                    message: "ff: " + calcu(args[0], args[1], args[2])
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});