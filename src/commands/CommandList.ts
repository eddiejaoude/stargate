import { ComamndInt } from "../interfaces/CommandInt";
import { help } from "./general/help";
import { ping } from "./general/ping";

export const CommandList: ComamndInt[] = [ping, help];
