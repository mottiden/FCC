function dropElements(arr, func) {
  // Drop them elements.
  for(var i=0;i<=arr.length-1;i){
    var result = func(arr[i]);
    console.log(arr[i]);
    console.log(result);
    if( result === true){break;}
    else{arr.shift();}
  }  
  //var first = arr.shift();
  console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
