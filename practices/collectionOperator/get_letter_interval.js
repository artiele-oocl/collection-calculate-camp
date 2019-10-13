'use strict';

function get_letter_interval(number_a, number_b) {
  //write code here
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const get_letter_interval = [];
  let start = Math.min(number_a, number_b);
  let end = Math.max(number_a, number_b);
  while (start <= end)
  {
    get_letter_interval.push(letters[start - 1]);
    start++;
  }
  return number_a < number_b ? get_letter_interval : get_letter_interval.reverse();
}

module.exports = get_letter_interval;
