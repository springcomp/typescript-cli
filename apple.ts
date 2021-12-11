import { Arguments, InferredOptionTypes, Options } from "yargs";

export namespace apple {

	export const command: string = "apple";
	export const describe: string = "Apples, part of apples and oranges.";

	export const builder: any = {
      a: { type: 'boolean', default: false },
      b: { type: 'string', demandOption: true },
      c: { type: 'number', alias: 'chill' },
      d: { type: 'array' },
      e: { type: 'count' },
      f: { choices: ['1', '2', '3'] },
    };

	export const handler: (args: Arguments<InferredOptionTypes<{ [key: string]: Options }>>) => void | Promise<void> =
		(argv: any) => {
			console.log("apple");
		};
}