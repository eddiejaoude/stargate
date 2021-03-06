import { Message } from "discord.js";
import { BotConfigInt } from "./BotConfigInt";

export interface ComamndInt {
  name: string;
  description: string;
  parameters?: string[];
  command: (message: Message, config?: BotConfigInt) => Promise<void>;
}
