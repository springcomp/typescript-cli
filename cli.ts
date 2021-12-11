#!/usr/bin/env node

import { appendFile } from 'fs';
import { argv } from 'process';
import yargs from 'yargs/yargs';
import { apple } from './commands/apple';

const parser = yargs(process.argv.slice(2))
  .command(apple.cmd)
  .command({
    command: "orange",
    describe: "Oranges, part of apples and oranges.",
    builder: {
      a: { type: 'boolean', default: false },
      b: { type: 'string', demandOption: true },
      c: { type: 'number', alias: 'chill' },
      d: { type: 'array' },
      e: { type: 'count' },
      f: { choices: ['1', '2', '3'] },
    },
    handler: (argv) => { console.log("apple"); }
  })
  .demandCommand()
  .fail(function (msg, err) {
    console.log(msg);
    process.exit(0);
  })
  ;

(async () => {
  const args = await parser.argv;
  console.log(args);
})();