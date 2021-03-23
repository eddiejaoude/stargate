import Discord from "discord.js";
import { createClient } from "@astrajs/collections";

import bio from "./bio.js";
import profile from "./profile.js";
import socials from "./socials.js";

const client = new Discord.Client();

(async () => {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const profileCollection = astraClient
    .namespace("discord")
    .collection("profile");

  client.once("ready", () => {
    console.log("Ready!");
  });

  client.on("message", async (message) => bio(message, profileCollection));
  client.on("message", async (message) => profile(message, profileCollection));
  client.on("message", async (message) => socials(message, profileCollection));

  client.login(process.env.DISCORD_BOT_TOKEN);
})();
