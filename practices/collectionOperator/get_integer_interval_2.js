'use strict';

function get_integer_interval_2(number_a, number_b) {
  //write code here
  const get_integer_interval_2 =
    generateArr(Math.min(number_a, number_b), Math.max(number_a, number_b))
      .filter(f => f % 2 == 0);
  return number_a < number_b ? get_integer_interval_2 : get_integer_interval_2.reverse();
}

function generateArr(numa, numb) {
  const arr = [];
  while (numa < numb + 1)
  {
    arr.push(numa++);
  }
  return arr;
}

module.exports = get_integer_interval_2;
