import { Client } from "discord.js";
import { CommandHandler } from "./commands/CommandHandler";
import { BotConfigInterface } from "./interfaces/BotConfigInterface";

const stargateBot = new Client();

const botToken = process.env.DISCORD_BOT_TOKEN;

const botConfig: BotConfigInterface = {
  // grabs the prefix from the env, falls back to default if missing
  prefix: process.env.PREFIX || "!stargate",
};

// Terminate the process if no token is provided.
if (!botToken) {
  console.error("Missing bot token!");
  process.exit(1);
}

stargateBot.on("ready", () => {
  console.log("It's aliiiiiiiive!");
});

stargateBot.on("message", (message) => CommandHandler(message, botConfig));

stargateBot.login(botToken);
