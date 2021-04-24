let sequenceLength = 3;
let sprints = [76, 80, 81, 77, 83, 78, 80];

function sumSequence(startIndex) {
  let result = 0;
  for (let i = startIndex; i < startIndex + sequenceLength; i++) {
    result += sprints[i];
  }
  return result;
}

function bestTotalVelocity(input) { 
  if (input.length < 3) return "error";
  let sum = sumSequence(0);   
  let index = 0;
  let bestSequence = true;

  for (let i = 1; i <= input.length - sequenceLength; i++) {
    if (sumSequence(i) > sum) { 
      sum = sumSequence(i);
      index = i;
      bestSequence = true;
    } else if (sumSequence(i) == sum) {
      index = i;
      bestSequence = false;
    }
  }
  return bestSequence ? 
      `{sequence: [${input.slice(index, index + sequenceLength).join(", ")}] sum: ${sum}}`
      : `[${input.slice(index, index + sequenceLength).join(", ")}]`;
}

/*
function getInput() {
  sprints = [];
  let n = prompt("Total number of sprints");
  if (n < 3) return "error";

  for (let i = 0; i < n; i++) {
    sprints.push(parseInt(prompt(`Input ${i+1}`)));
  }
  return sprints;
}

getInput();
*/

console.log(bestTotalVelocity(sprints));