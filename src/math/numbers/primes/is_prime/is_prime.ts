/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import isInteger from 'src/math/numbers/is_integer';
import not from 'src/helpers/not';

/**
 * Checks if a number is prime
 *
 * @param {number} n number under test
 * @returns {boolean} true, if number is prime, else, false
 */
const isPrime = (n: number): boolean => {
  // If number is not an integer, it is not prime
  if (not(isInteger(n))) {
    return false;
  }

  // if number is 1 or less, then it is not prime
  if (n < 2) {
    return false;
  }

  // 2 and 3 are primes
  if ([2, 3].includes(n)) {
    return true;
  }

  // If number is divisible by 2 or 3, then it is not prime
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  // Primes only occur at position: (6n - 1) and (6n + 1)
  // So, we only check if n is divisible by any of those probable primes
  // instead of all numbers < n
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0) return false;
    if (n % (i + 2) === 0) return false;
    i += 6;
  }

  // It all other cases, it is prime
  return true;
};

export default isPrime;
