/*jshint esversion:6*/
function truthCheck(collection, pre) {
  // Is everyone being true?
  pre = collection.every(el => el.hasOwnProperty(`${pre}`) 
                         && el[pre]!==0
                         && el[pre]!==""
                         && el[pre]!==null
                         && !Number.isNaN(el[pre])
                         && el[pre]!==undefined);
  return pre;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");