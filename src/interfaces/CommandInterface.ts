import { Message } from "discord.js";
import { BotConfigInterface } from "./BotConfigInterface";

export interface CommandInterface {
  name: string;
  description: string;
  parameters?: string[];
  command: (message: Message, config?: BotConfigInterface) => Promise<void>;
}
