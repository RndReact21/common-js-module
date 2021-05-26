// add 2 variable
const add = (var1, var2) => {
  return var1 + var2;
};
// difference between 2 variable
const diffrecence = (var1, var2) => {
  return var1 > var2 ? var1 - var2 : var2 - var1;
};

// make new json that have 2 function
const def = { add, diffrecence };

module.exports = def;
