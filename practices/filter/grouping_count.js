'use strict';

function grouping_count(collection) {

  //write code here
  let grouping_count = {};
  const set = [...new Set([...collection])];
  collection.sort();
  set.forEach(s => {
    let count = collection.lastIndexOf(s) + 1;
    collection.splice(0, count);
    grouping_count[s] = count;
  })
  return grouping_count;
}

module.exports = grouping_count;
