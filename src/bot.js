import Discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Discord.Client()

client.on('ready', ()=>{
  console.log("Connected as " + client.user.tag)
})

console.log(process.env.TOKEN)

client.login(process.env.TOKEN)
