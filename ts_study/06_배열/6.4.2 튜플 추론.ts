// 리턴 타입 : [string, number] 같지만 (string | number)[]
const callback = (input: string) => {
  return [input[0], input.length];
};

// firstCar : string | number
// size: string | number
const [firstChar, size] = callback("Gudit");

function dateStringToArray(date: string) {
  const dateParts = date.split("-").map((part) => parseInt(part, 10));
  return dateParts;
}

const result1 = dateStringToArray("2011-03-24");
console.log(result1); // [2011, 3, 24]

function dateStringToTuple(date: string): [number, number, number] {
  const dateParts = date.split("-").map((part) => parseInt(part, 10));

  if (dateParts.length === 3) {
    return [dateParts[0], dateParts[1], dateParts[2]];
  } else {
    throw new Error("Invalid date string format");
  }
}

const result2 = dateStringToTuple("2011-03-24");
console.log(result2); // [2011, 3, 24]
