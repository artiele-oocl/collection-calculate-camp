'use strict';

function choose_multiples_of_three(collection) {

  //write code here
  return collection.filter(f => f % 3 == 0);
}

module.exports = choose_multiples_of_three;
