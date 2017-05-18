function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr1.filter(function(item){
    if(arr2.indexOf(item) === -1) {return newArr.push(item);}
  });
  arr2.filter(function(item){
    if(arr1.indexOf(item) === -1) {return newArr.push(item);}
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);