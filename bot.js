require("dotenv").config()

const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = "-"
const MOD_ME_COMMAND = "mod-me"

client.on("ready", () => {
    console.log("Bot is ready to go!");
});

client.on("messageDelete", msg => {
    msg.channel.send("MESSAGE REDACTED NOTHING TO SEE HERE")
})

client.on("message", msg => {
    if (msg.content == "James") {
        msg.react("💩")
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("812833718099509299")
}

client.login(process.env.BOT_TOKEN);