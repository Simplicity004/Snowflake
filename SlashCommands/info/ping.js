const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    description: "responds with bot's latency",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const pingEmbed= new MessageEmbed()
        .setAuthor({
            name : client.user.tag,
            iconURL : client.user.displayAvatarURL()
        })
        .setColor("DARK_BUT_NOT_BLACK")
        .setTitle("🏓  Pong!")
        .setDescription(`Bot latency: ${client.ws.ping}ms`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/989860544125218877/1076476250236932136/snowflake.jpg`)
        .setFooter({text: "SNOWFLAKE❄️"})
        .setTimestamp();

await interaction.followUp({embeds: [pingEmbed]});
    },
};
