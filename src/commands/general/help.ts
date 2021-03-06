import { MessageEmbed } from "discord.js";
import { CommandInterface } from "../../interfaces/CommandInterface";
import { CommandList } from "../CommandList";

export const help: CommandInterface = {
  name: "help",
  description: "Returns information on the available bot commands",
  parameters: [
    "`command` (optional) - the specific command to return information about.",
  ],
  command: async (message) => {
    const { channel, content } = message;

    const [, , targetCommand] = content.split(" ");

    if (targetCommand) {
      const commandData = CommandList.find(
        (command) => command.name === targetCommand
      );

      if (!commandData) {
        await message.reply(
          `Sorry, but I do not have a ${targetCommand} command.`
        );
        return;
      }
      const helpEmbed = new MessageEmbed();
      helpEmbed.setTitle(`${targetCommand} Command`);
      helpEmbed.setDescription(commandData.description);

      if (commandData.parameters) {
        helpEmbed.addField("parameters", commandData.parameters.join("\n"));
      }

      await channel.send(helpEmbed);
      return;
    }

    const helpEmbed = new MessageEmbed();

    const commandListString = CommandList.map(
      (command) => `\`${command.name}\``
    )
      .sort()
      .join(" - ");
    helpEmbed.setTitle("Available Commands");
    helpEmbed.setDescription(commandListString);

    await channel.send(helpEmbed);
    return;
  },
};
