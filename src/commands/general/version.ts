import { CommandInterface } from "../../interfaces/CommandInterface";

export const version: CommandInterface = {
  name: "version",
  description: "Displays the deployed version",
  command: async (message) => {
    await message.reply(`Running bot version: ${process.env.VERSION}`);
    return;
  },
};
