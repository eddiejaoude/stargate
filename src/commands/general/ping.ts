import { CommandInterface } from "../../interfaces/CommandInterface";

export const ping: CommandInterface = {
  name: "ping",
  description: "Pings the bot.",
  command: async (message) => {
    const reply = await message.reply("Pinging...");

    const ping = `${
      message.channel.type !== "dm" ? `${message.author},` : ""
    } Pong!`;
    const roundTrip = `The message round-trip took ${
      (reply.editedTimestamp || reply.createdTimestamp) -
      (message.editedTimestamp || message.createdTimestamp)
    }ms.`;
    const ws = `${
      message.client.ws.ping
        ? `The heartbeat ping is ${Math.round(message.client.ws.ping)}ms.`
        : ""
    }`;

    await reply.edit(`${ping} ${roundTrip} ${ws}`);

    return;
  },
};
