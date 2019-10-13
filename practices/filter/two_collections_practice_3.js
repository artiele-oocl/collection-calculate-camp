'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //write code here
  return collection_a.filter(a => {
    let flag = false;
    collection_b.filter(b => {
      if (a % b === 0) flag = true;
    })
    if (flag) return a;
  })
}

module.exports = choose_divisible_integer;
