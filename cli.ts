#!/usr/bin/env node

import { argv } from 'process';
import yargs from 'yargs/yargs';

const options: string[] = ["one", "two", "three"];
type Options = typeof options[number];

const parser = yargs(process.argv.slice(2))
  .command({
    command: "apple",
    describe: "Apples, part of apples and oranges.",
    builder: {
      a: { type: 'boolean', default: false },
      b: { type: 'string', demandOption: true },
      c: { type: 'number', alias: 'chill' },
      d: { type: 'array' },
      e: { type: 'count' },
      f: { choices: ['1', '2', '3'] },
      o: { choices: options }
    },
    handler: (argv) => { console.log("apple"); }
  })
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
      o: { choices: options }
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