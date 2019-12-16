enum Opcode {
  ADD = 1,
  MUL = 2,
  STEP = 4,
  END = 99
};

function intCodeComputer(integers: number[]): number[] {
  let instructionPointer = 0;
  while (integers[instructionPointer] !== Opcode.END) {
    let [opcode, input1, input2, output] = integers.slice(instructionPointer, instructionPointer+4);
    if (opcode === Opcode.ADD) {
      integers[output] = integers[input1] + integers[input2];
    } else if (opcode === Opcode.MUL) {
      integers[output] = integers[input1] * integers[input2];
    } else {
      throw new Error(`Invalid opcode ${opcode}`);
    }
    instructionPointer = instructionPointer + Opcode.STEP;
  }
  return integers;
}

const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0];
const goal = 19690720;

for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const arr = [...input];
    arr.splice(1, 2, noun, verb);
    const [firstValue,] = intCodeComputer(arr);
    if (firstValue === goal) {
      console.log([noun, verb]);
      process.exit(0);
    }
  }
}

