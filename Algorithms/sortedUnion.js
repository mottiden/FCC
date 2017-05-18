
function uniteUnique(arr) {
  var args = Array.from(arguments);
  
  arr = args.reduce(function(res, item){
    return res.concat(item);
  },[]);

  var seen = {};
  var bucket = arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
  
  console.log('bucket: ',bucket);
  console.log('arr: ',arr);

  return bucket;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
