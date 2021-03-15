import { CommandInterface } from "../interfaces/CommandInterface";
import { help } from "./general/help";
import { ping } from "./general/ping";

export const CommandList: CommandInterface[] = [ping, help];
