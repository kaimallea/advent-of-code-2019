import { readFileSync } from 'fs';

function *calculateFuel(mass: number): any {
  mass = Math.floor(mass / 3) - 2;

  if (mass <= 0) {
    return yield 0;
  }

  yield mass;

  yield* calculateFuel(mass);
}

const input = readFileSync('./input', { encoding: 'utf8'});

console.log(
  input
    .trim()
    .split("\n")
    .map(mass => [...calculateFuel(parseInt(mass, 10))].reduce((a, b) => a + b))
    .reduce((a, b) => a + b)
  );
