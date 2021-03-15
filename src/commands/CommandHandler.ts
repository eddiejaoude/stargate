import { Message } from "discord.js";
import { BotConfigInterface } from "../interfaces/BotConfigInterface";
import { CommandList } from "./CommandList";

export const CommandHandler = async (
  message: Message,
  config: BotConfigInterface
): Promise<void> => {
  const { prefix } = config;
  const { content } = message;
  if (!content.startsWith(prefix)) {
    return;
  }
  if (message.author.bot) {
    return;
  }

  const [, commandName] = content.split(" ");

  for (const command of CommandList) {
    if (command.name === commandName) {
      await command.command(message, config);
      return;
    }
  }
};
