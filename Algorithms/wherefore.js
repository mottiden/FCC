function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var keys = Object.keys(source);
  var flag = 0;
  // Only change code below this line
  collection.filter(function(obj){
    flag=0;
    for(var i of keys){
      if(obj.hasOwnProperty(i)) {
        if(obj[i]===source[i]){flag++;}
      }
      if(flag >= keys.length){
      arr.push(obj);
      }
    }
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });