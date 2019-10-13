'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //write code here
  return collection_a.filter(f => {
    if (!collection_b.includes(f)) return f
  })
}

module.exports = choose_no_common_elements;
