import { Arguments, CommandModule, } from "yargs";

export namespace apple {
	export class options {
		a?: boolean = false;
		b?: string | undefined = undefined;
		c?: number;
		d?: string[];
		e?: string[];
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
			console.log(args.a);
			console.log(args._);
			console.log(args.$0);
			console.log(args.unknown);
		}
	};
}