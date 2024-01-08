#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'fs';

const program = new Command();

const gendiff = (file1, file2) => {
  console.log(file1, file2);
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --file <type>', 'output format')
  .action((path1, path2) => {
    const fileData = JSON.parse(fs.readFileSync(path1, 'utf-8'));
    const fileData2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
    const fileDataKeys = Object.keys(fileData);
    const fileDataValues = Object.values(fileData);
  });

program.parse(process.argv);
