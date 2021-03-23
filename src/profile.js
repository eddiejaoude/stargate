import Discord from "discord.js";

export default async function profile(message, profileCollection) {
  const prefix = "!!profile";
  const allowedSocials = ["bio", "github", "linkedin"];

  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(" ");

    try {
      const profile = await profileCollection.get(args[0] || message.author.id);
      console.log("profile", profile);

      if (profile) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle(profile.name).setThumbnail(profile.avatar);
        allowedSocials.forEach((name) =>
          profile[name] ? embed.addField(name, profile[name]) : true
        );

        return message.channel.send(embed);
      } else {
        return message.channel.send(`User ${args[0]} not found`);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
