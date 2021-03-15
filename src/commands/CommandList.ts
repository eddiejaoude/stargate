import { CommandInterface } from "../interfaces/CommandInterface";
import { help } from "./general/help";
import { ping } from "./general/ping";
import { version } from "./general/version";

export const CommandList: CommandInterface[] = [ping, help, version];
