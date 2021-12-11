import { assert } from 'console';
import { apple } from '../commands/apple';

export namespace services {
	export interface IAppleService {
		displayArguments(): void;
	}

	export class AppleService implements IAppleService {
		private args_: apple.options;

		constructor(args: apple.options) {
			this.args_ = args;
		}

		public static handle(args: apple.options) {
			new AppleService(args)
				.displayArguments()
				;
		}

		displayArguments(): void {
			console.log(this.args_.a);

			// this is ugly

			assert(this.args_.b !== undefined);
			if(this.args_.b !== undefined){
				console.log(this.args_.b);
			}
		}
	}
}