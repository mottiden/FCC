function smallestCommons(arr) {
  var div = [];
  //generate the sequence of dividing numbers
  if(arr[0]<=arr[1]){
    for(var i=arr[0];i<=arr[1];i++){
      div.push(i);
    }
  } else {
    for(var j=arr[1];j<=arr[0];j++){
      div.push(j);
    }
  }
  
  function gcd(a, b) {return !b ? a : gcd(b, a % b);}
  function lcm(a, b) {return (a * b) / gcd(a, b);}

  var multiple = div[0];
  div.forEach(function(n) {
     multiple = lcm(multiple, n);
  });
  console.log(multiple);
  return multiple;
  
}


smallestCommons([1,5]);