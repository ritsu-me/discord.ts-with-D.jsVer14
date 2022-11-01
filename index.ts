import { Message, Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
import logger from "signale"

dotenv.config()

const client = new Client({
    intents: Object.values(GatewayIntentBits).filter((n): n is number => typeof n === "number")
});

client.once('ready', () => {
    if (!client.user) {
        return
    } else {
        logger.success(`Logged in as ${client.user.tag}!!`)
    }
})

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content.startsWith('!ping')) {
        message.channel.send('Pong!')
    }
})

client.login(process.env.TOKEN);