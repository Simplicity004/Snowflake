const { Message , Client } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av'],
    description: "Displays The Avatar Of The Mentioned User",
    /**
    *
    *
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async (client, message , args) => {

        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const avatarembed = new MessageEmbed()
        .setColor("DARK_BUT_NOT_BLACK")
        .setTitle("AVATAR")
        .setImage(mentionedMember.user.displayAvatarURL({ size: 4096, dynamic: true }))
        .setFooter({
            text: "SNOWFLAKE❄️"
        })
        .setTimestamp();

        message.channel.send({
            embeds : [avatarembed]
        });
    }
}