const pickedNumber = 83;

/**
 *
 * @param {number} n
 * @returns {number}
 */
function guess(n) {
  if (n > pickedNumber) {
    return -1;
  }

  if (n < pickedNumber) {
    return 1;
  }

  return 0;
}

/**
 * @param {number} n
 * @returns {number}
 */
const guessNumber = function(n) {
  const numericalBase = 10;
  let baseRadix = n.toString().length - 1;
  let expIncrement = Math.pow(numericalBase, baseRadix);

  if (expIncrement >= n) {
    baseRadix -= 1;
    expIncrement = Math.pow(numericalBase, baseRadix);
  }

  for (
    let pickResult = guess(n);
    ;
    pickResult = guess(n)
  ) {
    if (pickResult === 0) {
      return n;
    }

    if (pickResult === 1 && expIncrement > 1) {
      baseRadix -= 1;
      expIncrement = Math.pow(numericalBase, baseRadix);
    }

    console.log(`e: ${expIncrement}`);

    increment = parseInt(
      pickResult * expIncrement,
      numericalBase
    );

    console.log(`i: ${increment}`);

    n += increment;

    console.log(`n: ${n}`);
  }
}

console.log(guessNumber(100));
