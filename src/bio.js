export default async function bio(message, profileCollection) {
  const prefix = "!!bio";

  if (message.content.startsWith(prefix)) {
    const arg = message.content.slice(prefix.length).trim();

    if (arg) {
      try {
        await profileCollection.update(message.author.id, {
          name: message.author.username,
          avatar: message.author.avatarURL(),
          bio: arg,
        });

        return message.channel.send("Profile updated");
      } catch (e) {
        console.log(e);
      }
    }

    return message.channel.send("Argument required");
  }
}
