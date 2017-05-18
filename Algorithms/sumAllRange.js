function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var newArr = [];
  for(var i=max; i>=min ;i--){
    newArr.push(i);
  }
  var a = newArr.reduce(function(result, element){
    return result + element;
  },0); 
  return a;
}

sumAll([1, 4]);