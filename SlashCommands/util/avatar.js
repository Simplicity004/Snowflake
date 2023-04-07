const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "returns avatar of mentioned user",
    options: [
        {
            name : 'user' ,
            description: 'user to display avatar' ,
            type: 'USER' ,
            required: false
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        let mentionedMember = interaction.options.getUser('user')
        if (!mentionedMember) mentionedMember = interaction.member;


    const avatarembed = new MessageEmbed()
        .setColor("DARK_BUT_NOT_BLACK")
        .setImage(mentionedMember.displayAvatarURL({ size: 4096, dynamic: true }))
        .setFooter({
            text: "SNOWFLAKE❄️"
        })
        .setTimestamp();




await interaction.followUp({embeds: [avatarembed]});
    },
};