#!/usr/bin/env node
import { Command } from 'commander';
import { getDataFromFile } from '../gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'json')
  .action((path1, path2) => {
    const file1 = getDataFromFile(path1);
    const file2 = getDataFromFile(path2);
  });

program.parse(process.argv);
