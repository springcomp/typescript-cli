import { Arguments, CommandModule, } from "yargs";
import { services } from "../services/appleService";

export namespace apple {
	export class options {
		a?: boolean = false;
		b?: string = "";
		c?: number;
		d?: string[];
		e?: number = 0;
		f?: string[];
	};

	export const cmd: CommandModule<options, {}> = {
		command: "apple",
		describe: "Apples, part of apples and oranges",
		builder: {
			a: { type: 'boolean', default: false },
			b: { type: 'string', demandOption: true },
			c: { type: 'number', alias: 'chill' },
			d: { type: 'array' },
			e: { type: 'count' },
			f: { choices: ['1', '2', '3'] },
		},
		handler: (args: Arguments<options>) => {
			services.AppleService.handle(args);
		}
	};
}