const {Client, CommandInteraction} = require("discord.js");
const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: "invite",
    description: "sends u a embed add bot to ur server",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const inviteembed = new MessageEmbed()
            .setAuthor({
                name: client.user.tag,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor("DARK_BUT_NOT_BLACK")
            .setTitle("👋 Invite Snowflake To Your Server")
            .setDescription('Click The Button To Bring Snowflake To Your Place')
            .setThumbnail(`https://cdn.discordapp.com/attachments/989860544125218877/1076476250236932136/snowflake.jpg`)
            .setFooter({text: "SNOWFLAKE❄️"})
            .setTimestamp();

        const inviterow = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel("Add To Your Server")
                .setStyle("LINK")
                .setURL('https://discord.com/oauth2/authorize?client_id=1071726892849299548&scope=bot&permissions=1099511627775')
        );


        await interaction.followUp({
            embeds: [inviteembed],
            components: [inviterow]
        });
    }
};
