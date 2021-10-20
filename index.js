const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "";

Client.on("ready", function () {
        console.log("bot opérationnel");
    });

Client.login(process.env.TOKEN);

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //quoi ?
    if(message.content === prefix + "quoi ?"){
        message.reply("feur");
    }

    //rat
    if(message.content === prefix + "rat"){
        message.reply("ciste");
    }

    //negro
    if(message.content === prefix + "negro"){
        message.reply("mon reuf ??")
    }

    //non
    if(message.content === prefix + "non"){
        message.reply("bril")
    }

    //oui
    if(message.content === prefix + "oui"){
        message.reply("stiti")
    }

    //salut
    if(message.content === prefix + "salut"){
        message.reply("nazi")
    }

    //ah
    if(message.content === prefix + "ah"){
        message.reply("b")
    }

    //mais
    if(message.content === prefix + "mais"){
        message.reply("on")
    }

    //ouais
    if(message.content === prefix + "ouais"){
        message.reply("stern")
    }

    //re
    if(message.content === prefix + "re"){
        message.reply("quin")
    }

    //bonjour
    if(message.content === prefix + "bonjour"){
        message.reply("bonsoir")
    }

    //toi
    if(message.content === prefix + "toi"){
        message.reply("lette")
    }

    //tout
    if(message.content === prefix + "tout"){
        message.reply("pie")
    }

    //trop
    if(message.content === prefix + "trop"){
        message.reply("pico")
    }

    //vois
    if(message.content === prefix + "vois"){
        message.reply("ture")
    }

    //la
    if(message.content === prefix + "la"){
        message.reply("brador")
    }

    //oe
    if(message.content === prefix + "oe"){
        message.reply("jdene")
    }

    //moi
    if(message.content === prefix + "moi"){
        message.reply("ssonneuse")
    }

    //pas
    if(message.content === prefix + "pas"){
        message.reply("lourde")
    }

    //hein
    if(message.content === prefix + "hein"){
        message.reply("deux")
    }

    //néo
    if(message.content === prefix + "néo"){
        message.reply("nazi")
    }

    //fort
    if(message.content === prefix + "fort"){
        message.reply("nite")
    }

    //ok
    if(message.content === prefix + "ok"){
        message.reply("sur glace")
    }

    //chaud
    if(message.content === prefix + "chaud"){
        message.reply("colat")
    }

    //fou
    if(message.content === prefix + "fou"){
        message.reply("tre")
    }

    //ou
    if(message.content === prefix + "ou"){
        message.reply("ssama ben laden")
    }

    //ça
    if(message.content === prefix + "ça"){
        message.reply("pristi")
    }

    //comment
    if(message.content === prefix + "comment"){
        message.reply("taire")
    }
});
