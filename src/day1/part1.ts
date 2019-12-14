import { readFileSync } from 'fs';

const input = readFileSync('./input', { encoding: 'utf8'});

console.log(
  input
    .trim()
    .split("\n")
    .map(mass => Math.floor(parseInt(mass, 10) / 3) - 2)
    .reduce((a, b) => a + b)
  );
