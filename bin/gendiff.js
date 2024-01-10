#!/usr/bin/env node
import { Command } from 'commander';
import {gendiff, getDataFromFile} from '../gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'json')
  .action((path1, path2, { format }) => {
    const file1 = getDataFromFile(path1, format);
    const file2 = getDataFromFile(path2, format);

    gendiff(file1, file2);
  });

program.parse(process.argv);
