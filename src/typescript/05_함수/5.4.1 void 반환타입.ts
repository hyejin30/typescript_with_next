const returnVoid = () => {
  return;
};

const returnUndefined = () => {
  return undefined;
};

let value: string | undefined;

value = returnUndefined();
value = returnVoid(); // Error
