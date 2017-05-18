function findElement(arr, func) {
  var num = 0;
  num = arr.filter(function(el){
    return func(el);
  });
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
