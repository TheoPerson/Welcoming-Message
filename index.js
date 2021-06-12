const Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json')
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()

 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on("guildMemberAdd", async member => {
    client.channels.cache.get('Your Channel ID ( I recomend general chat').send(`1st emote • 2nd emote \`Welcome\` ${member}\n**Thanks for joining the discord, have a good time.** **We are now \`${member.guild.memberCount}\` In the server.**\ `)
})