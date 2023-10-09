const fail = (msg: string): never => {
  throw new Error(`Invariant failure: ${msg}`);
};
