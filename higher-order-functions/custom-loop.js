let loop = (start, test, update, body) => {
  for (let val = start; test(val); val = update(val)) {
    body(val);
  }
};

loop(
  1,
  (n) => n < 5,
  (n) => n + 1,
  console.log
);
