export default async function socials(message, profileCollection) {
  const prefix = "!!socials";
  const allowedSocials = ["github", "linkedin"];

  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (!allowedSocials.includes(command)) {
      return message.channel.send("Social not found");
    }

    if (args[0]) {
      try {
        await profileCollection.update(message.author.id, {
          name: message.author.username,
          avatar: message.author.avatarURL(),
          [command]: args[0],
        });

        return message.channel.send("Profile updated");
      } catch (e) {
        console.log(e);
      }
    }

    return message.channel.send("Argument required");
  }
}
