import { ComamndInt } from "../../interfaces/CommandInt";

export const ping: ComamndInt = {
  name: "ping",
  description: "Pings the bot.",
  command: async (message) => {
    await message.reply("Pong!");
    return;
  },
};
