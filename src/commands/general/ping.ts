import { CommandInterface } from "../../interfaces/CommandInterface";

export const ping: CommandInterface = {
  name: "ping",
  description: "Pings the bot.",
  command: async (message) => {
    await message.reply("Pong!");
    return;
  },
};
